import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private storage: Storage
    ) { 
    this.id =  parseInt(this.route.snapshot.paramMap.get('id'));
  }

  async ngOnInit() {
    const sData  = await this.storage.get("data")
    this.services = sData.vehicles.find(x => x.id == this.id).service_summary;
  }
  async ionViewDidEnter(){
    const sData  = await this.storage.get("data")
    this.services = sData.vehicles.find(x => x.id == this.id).service_summary;
  }

}
