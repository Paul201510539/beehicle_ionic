import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-translist',
  templateUrl: './translist.page.html',
  styleUrls: ['./translist.page.scss'],
})
export class TranslistPage implements OnInit {
  vehicle_id: String;
  transactions: Array <Object>;
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private storage: Storage
  ) { 
    this.vehicle_id = this.route.snapshot.paramMap.get('vehicle_id');
   console.log(this.vehicle_id, 'dito')
  
  
  }
  async ngOnInit() {
    const data  = await this.storage.get("data")
    this.transactions = data.vehicles.find(x => x.id == this.vehicle_id).transactions;
    console.log(this.transactions);
  }

  async ionViewDidEnter(){
    const data  = await this.storage.get("data")
    console.log(data);
    this.transactions = data.vehicles.find(x => x.id == this.vehicle_id).transactions;
    console.log(this.transactions);
  }


}
