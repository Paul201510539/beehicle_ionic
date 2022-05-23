import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user : Object;
  public pages: any[] = [
    {title: 'Dashboard', url: '/home', icon: 'home'},
    {title: 'Profile', url: '/profile', icon: 'person'},
    //{title: 'About Us', url: '/about', icon: 'information-circle'},
    // {title: 'Odometer', url: '/odometer', icon: 'speedometer'},
    {title: 'Sign Out', url: '', icon: 'log-out', route: true},
  ];

  constructor( private storage:Storage ) {
   
  }

  async ngOnInit(){
    await this.storage.create();
    const sData = await this.storage.get('data');
    this.user = sData;
    console.log(sData);
    
  }

  async signOut() {
    await this.storage.clear();
  }
}
