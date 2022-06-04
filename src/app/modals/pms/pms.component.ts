import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pms',
  templateUrl: './pms.component.html',
  styleUrls: ['./pms.component.scss'],
})
export class PmsComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}
  closeModal(){
    this.modalController.dismiss();
  }
}
