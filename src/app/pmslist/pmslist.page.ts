import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { LoadingController, AlertController, ModalController } from '@ionic/angular';
import { PmsComponent } from '../modals/pms/pms.component';

@Component({
  selector: 'app-pmslist',
  templateUrl: './pmslist.page.html',
  styleUrls: ['./pmslist.page.scss'],
})
export class PmslistPage implements OnInit {
  vehicle_id: any;
  pms_list: Array<any>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage,
    public loadingController: LoadingController, 
    public alertController: AlertController,
    public modalController: ModalController
  ) { 
    this.pms_list = [];

  }

  async ngOnInit() {
    this.vehicle_id = this.route.snapshot.paramMap.get('vehicle_id')
    const sData = await this.storage.get('data');
    this.pms_list = sData.vehicles.find(x=>x.id == this.vehicle_id).pms_records.filter(x => x.alert == true)

  }
  ionViewWillEnter(){
    this.ngOnInit()
  }
  getIcon(boolean){
    return boolean ? 'checkmark-circle' : 'warning'
  }

  async goTo(boolean, vehicle_id, pms_kms,item){
    const sData = await this.storage.get('data');

    const pms_data = sData.vehicles.find(x=>x.id == this.vehicle_id).pms.find(x=>x.pms_kms == pms_kms);
    // const pms_data = sData.vehicles.find(x=>x.id == this.vehicle_id).pms
    
    
    // if(!pms_data){
    //   const alert = await this.alertController.create({
    //     header: 'Alert',
    //     message:'Not due for PMS',
    //     buttons: ['OK'] 
    //   })
    //   await alert.present();      
    //   return;
    // }
    // if(item.alert == true && item.done == true){
    //   // const alert = await this.alertController.create({
    //   //   header: 'Information',
    //   //   message:'PMS already finished',
    //   //   buttons: ['OK'] 
    //   // })
    //   // await alert.present();  
    //   this.router.navigate([`/pms/${vehicle_id}/${pms_kms}`]);

    //   return;
    // }
    if(pms_data){
        this.router.navigate([`/pms/${vehicle_id}/${pms_kms}`]);
        return;
    }
    this.router.navigate([`/pms/${vehicle_id}/${pms_kms}`]);
  }

  presentModal(){
    this.showModal("Ready to use modal");  
  }

  async showModal(msg){
    const modal = await this.modalController.create({
      component: PmsComponent,
      componentProps: { message : msg },
      cssClass: 'alert-modal'
    });
    await modal.present();
  }
}
