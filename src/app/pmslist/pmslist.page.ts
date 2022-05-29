import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { LoadingController, AlertController } from '@ionic/angular';

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
    public alertController: AlertController
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
    if(!boolean){
      const alert = await this.alertController.create({
        header: 'Alert',
        message:'Not due for PMS',
        buttons: ['OK'] 
      })
      await alert.present();      
      return;
    }
    if(item.alert == true && item.done == true){
      const alert = await this.alertController.create({
        header: 'Information',
        message:'PMS already finished',
        buttons: ['OK'] 
      })
      await alert.present();  
      return;
    }
    this.router.navigate([`/pms/${vehicle_id}/${pms_kms}`]);
  }

}
