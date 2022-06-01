import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import { GlobalFooService } from './services/profile.service';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  user : Object;
  public pages: any[] = [
    {title: 'Dashboard', url: '/home', icon: 'home'},
    {title: 'Profile', url: '/profile', icon: 'person'},
    //{title: 'About Us', url: '/about', icon: 'information-circle'},
    // {title: 'Odometer', url: '/odometer', icon: 'speedometer'},
    {title: 'Sign Out', url: '', icon: 'log-out', route: true},
  ];

  constructor( private storage:Storage, private globalFooService: GlobalFooService ) {
  }

  async ngOnInit(){
    console.log('init')
    await this.storage.create();
    const sData = await this.storage.get('data');
    this.user = sData;
    this.globalFooService.getObservable().subscribe((data)=>{
      this.user = data.data
    })
      
  }

  async signOut() {
    await this.storage.clear();
    
  }
}
