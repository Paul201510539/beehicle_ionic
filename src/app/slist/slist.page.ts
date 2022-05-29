import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

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
    private loadingController: LoadingController
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

}
