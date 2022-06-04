import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ServiceComponent } from '../modals/service/service.component';

@Component({
  selector: 'app-slist',
  templateUrl: './slist.page.html',
  styleUrls: ['./slist.page.scss'],
})
export class SlistPage implements OnInit {
  public id;
  services: Array <Object>;
  constructor(
    private route : ActivatedRoute,
    private storage: Storage,
    private loadingController: LoadingController,
    public modalController: ModalController
    ) { 
    this.id =  parseInt(this.route.snapshot.paramMap.get('id'));
  }

  async ngOnInit() {
    const loading = await this.loadingController.create({message: 'Please wait'})
    await loading.present()
    const sData  = await this.storage.get("data")
    this.services = sData.vehicles.find(x => x.id == this.id).service_summary;
    loading.dismiss();
  }
  async ionViewDidEnter(){
    const sData  = await this.storage.get("data")
    this.services = sData.vehicles.find(x => x.id == this.id).service_summary;
  }

  presentModal(){
    this.showModal("Ready to use modal");  
  }

  async showModal(msg){
    const modal = await this.modalController.create({
      component: ServiceComponent,
      componentProps: { message : msg },
      cssClass: 'alert-modal'
    });
    await modal.present();
  }

}
