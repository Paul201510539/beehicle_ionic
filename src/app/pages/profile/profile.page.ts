import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  back: boolean;
  user: Object;
  constructor(public router: Router, private storage:Storage) { 
    console.log('hey from constructor')
    // this.ngOnInit()
  }

  async ngOnInit() {
    const data = this.router.url.split('/');
    const sData = await this.storage.get('data');
    this.user = sData;

    console.log('hey from ngOnInit')

    if(data[1] == 'home') this.back = true;
    else this.back = false;
  }

  ionOnViewWillEnter(){
    console.log('hey from ionOnViewWillEnter')
  }
  IonViewDidLeave(){
    console.log('hey from IonViewDidLeave')
  }
 

}
