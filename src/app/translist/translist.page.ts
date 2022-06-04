import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { LoadingController, AlertController, NavController, ModalController } from '@ionic/angular';
import { environment } from '../../../src/environments/environment';  
import axios from 'axios';
import { TravelComponent } from '../modals/travel/travel.component';

@Component({
  selector: 'app-translist',
  templateUrl: './translist.page.html',
  styleUrls: ['./translist.page.scss'],
})
export class TranslistPage implements OnInit {
  vehicle_id: String;
  transactions: Array <Object>;
  vehicle: any;
  constructor(
    private router: Router,
    private route : ActivatedRoute,
    public loadingController: LoadingController, 
    public alertController: AlertController,
    private storage: Storage,
    private navCtrl: NavController,
    public modalController: ModalController
  ) { 
    this.vehicle_id = this.route.snapshot.paramMap.get('vehicle_id');
  
  }
  async ngOnInit() {
    const data  = await this.storage.get("data")
    this.transactions = data.vehicles.find(x => x.id == this.vehicle_id).travels.sort((a,b)=>b.id-a.id);
  }

  async ionViewDidEnter(){
    const data  = await this.storage.get("data")
    this.transactions = data.vehicles.find(x => x.id == this.vehicle_id).travels.sort((a,b)=>b.id-a.id);
    this.vehicle = data.vehicles.find(x => x.id == this.vehicle_id)
  }

  async delete(transaction_id){
    let decision = false;
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Do you really want to delete this record?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            decision = false;
          }
        },
        {
          text: 'Yes',
          handler: async() => {
            const loading = await this.loadingController.create({message: 'Please wait'})
            await loading.present()
            try {
              const token = await this.storage.get('access_token');
              
              const config = {
                headers: {
                  'Access-Control-Allow-Origin': '*', 
                  'Authorization': `Bearer ${token}`
                }
              }
              const URL = `${environment.API_HOST}/travels/${transaction_id}`;
              const form = {
                transaction_id : transaction_id
              }
        
        
              const response = await axios.delete(URL, { 
                  headers : {
                      'Access-Control-Allow-Origin': '*', 
                      'Authorization': `Bearer ${token}`
                  }
              });
              await this.storage.set('data', response.data.data)
        
              loading.dismiss()
        
              const alert = await this.alertController.create({
                header: 'Deleted',
                message: response.data.message,
                buttons: ['OK'] 
              })
              
              await alert.present();
              this.ionViewDidEnter();
            } catch (error) {
              loading.dismiss();
              const alert = await this.alertController.create({
                header: 'Error',
                message: 'Please contact system Administrator',
                buttons: ['OK'] 
              })
              
              await alert.present();
            }
          }
        }
      ]

    })
    
    await alert.present();

  

  }

  presentModal(){
    this.showModal("Ready to use modal");  
  }

  async showModal(msg){
    const modal = await this.modalController.create({
      component: TravelComponent,
      componentProps: { message : msg },
      cssClass: 'alert-modal'
    });
    await modal.present();
  }


}
