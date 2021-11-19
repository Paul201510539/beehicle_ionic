import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shink-header',
  templateUrl: './shink-header.component.html',
  styleUrls: ['./shink-header.component.scss'],
})
export class ShinkHeaderComponent implements OnInit, OnDestroy {

  @Input('scrollArea') scrollArea : any;
  @Input('headerHeight') headerHeight : number;
  newHeaderHeight: any;
  scrollSub: Subscription;

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    public domCtrl: DomController
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');

    this.scrollSub = this.scrollArea.ionScroll.subscribe(event => {
      console.log(event.detail.scrollTop);
      this.resizeHeader(event);
    });
  }

  resizeHeader(event) {
    this.domCtrl.write(() => {
      this.newHeaderHeight = this.headerHeight - event.detail.scrollTop;
      //if(this.newHeaderHeight < 0) this.newHeaderHeight = 0;
      this.renderer.setStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
    });
  }

  ngOnDestroy() {
    if(this.scrollSub) this.scrollSub.unsubscribe();
  }

}
