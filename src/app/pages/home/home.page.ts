import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas: ElementRef;
  segmentValue = '1';
  type: string;
  lineChart: any;
  checklist: any[] = [];
  services: any[] = [];
  
  newHeight = 0;

  constructor(public actionSheetCtrl: ActionSheetController, public alertController: AlertController, private router: Router) {}

  ngOnInit() {
    

    console.log('ngOnInit');
    this.checklist = [
      { id: 1, name: 'Sample name', age: 25, address: 'Sample address', gender: 'Female', vehicle_group: '2', photo: 'assets/imgs/2.png', distance: 0.5, phone: '9999900000', email: 'test@gmail.com' },
      { id: 2, name: 'Sample name', age: 22, address: 'Sample address', gender: 'Male', vehicle_group: '4', photo: 'assets/imgs/4.2.jpg', distance: 2, phone: '9999900001', email: 'test@gmail.com' },
      { id: 3, name: 'Sample name', age: 27, address: 'Sample address', gender: 'Female', vehicle_group: '2', photo: 'assets/imgs/2-1.jpg', distance: 6, phone: '9999900002', email: 'test@gmail.com' },
      { id: 4, name: 'Sample name', age: 35, address: 'Sample address', gender: 'Male', vehicle_group: '2', photo: 'assets/imgs/2.png', distance: 10, phone: '9999900003', email: 'test@gmail.com' },
      { id: 5, name: 'Sample name', age: 30, address: 'Sample address', gender: 'Male', vehicle_group: '4', photo: 'assets/imgs/4-1.jpg', distance: 12, phone: '9999900004', email: 'test@gmail.com' },
      { id: 6, name: 'Sample name', age: 45, address: 'Sample address', gender: 'Male', vehicle_group: '4', photo: 'assets/imgs/4.jpg', distance: 14.5, phone: '9999900005', email: 'test@gmail.com' },
      { id: 7, name: 'Sample name', age: 20, address: 'Sample address', gender: 'Female', vehicle_group: '2', photo: 'assets/imgs/2-1.jpg', distance: 16.7, phone: '9999900006', email: 'test@gmail.com' }
    ];

    this.services = [
      { id: 1, name: 'Sample name', age: 20, address: 'Sample address', gender: 'Female', vehicle_group: '4', photo: 'assets/imgs/2-1.jpg', distance: 1, phone: '9999900010', email: 'test@gmail.com' },
      { id: 2, name: 'Sample name', age: 29, address: 'Sample address', gender: 'Male', vehicle_group: '2', photo: 'assets/imgs/4-1.jpg', distance: 1.5, phone: '9999900020', email: 'test@gmail.com' },
      { id: 3, name: 'Sample name', age: 45, address: 'Sample address', gender: 'Male', vehicle_group: '2', photo: 'assets/imgs/4-1.jpg', distance: 3, phone: '9999900030', email: 'test@gmail.com' },
      { id: 4, name: 'Sample name', age: 40, address: 'Sample address', gender: 'Male', vehicle_group: '2', photo: 'assets/imgs/2-1.jpg', distance: 8, phone: '9999900040', email: 'test@gmail.com' },
      { id: 5, name: 'Sample name', age: 35, address: 'Sample address', gender: 'Male', vehicle_group: '4', photo: 'assets/imgs/2-1.jpg', distance: 15, phone: '9999900050', email: 'test@gmail.com' },
      { id: 6, name: 'Sample name', age: 20, address: 'Sample address', gender: 'Female', vehicle_group: '4', photo: 'assets/imgs/2-1.jpg', distance: 20, phone: '9999900060', email: 'test@gmail.com' }
    ];
    this.type = 'checklist';
    this.type = 'services'; 

  }
  
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  scroll(event){
    const value = event.detail.scrollTop;
    console.log(value, this.newHeight);
    if(value > 40) {
      this.newHeight += 5;
    } else {
      this.newHeight = 0;
    }
    if(value > 180 && this.newHeight <= 65){
      this.newHeight += 50;
    }

  }

  async checklistoptions(item) {
    console.log(item);
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      mode: 'ios',
      buttons: [
        {
        text: 'Add Checklist',
        icon: 'checkbox-outline',
        handler: () => {
          this.router.navigate(['/addchecklist'])
          console.log('add checklist clicked');
        },
      },

      {
        text: 'vehicle info',
        icon: 'information-circle-outline',
        handler: () => {
          this.router.navigate([''])
          console.log('vehicle info clicked');
        },
      },
        
      
        {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
      ]
    });
    await actionSheet.present();
  }

  

  async servicesoptions(item) {
    console.log(item);
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      mode: 'ios',
      buttons: [
        {
        text: 'add services',
        icon: 'car',
        handler: () => {
          this.router.navigate(['/addservices'])
          console.log('add services clicked');
        },
      },

      {
        text: 'vehicle info',
        icon: 'information-circle-outline',
        handler: () => {
          this.router.navigate([''])
          console.log('vehicle info clicked');
        },
      },

      

      {
        text: 'Checklist',
        icon: 'checkbox-outline',
        handler: () => {
          this.router.navigate(['/addchecklist'])
          console.log('Checklist clicked');
        },},


    
        {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
    await actionSheet.present();
  }

  segmentChanged(ev: any): void {
    console.log('Segment changed', ev);
    //this.segmentValue = event.detail.value;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'About',
      subHeader: 'sample',
      message: 'Yamete Kudesai.',
      buttons: ['Okay']
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
