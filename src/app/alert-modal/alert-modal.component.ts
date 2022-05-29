import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent implements OnInit {

  @Input() message;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
  }

}
