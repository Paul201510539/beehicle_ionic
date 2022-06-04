import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {}
  
  closeModal(){
    this.modalController.dismiss();
  }
}
