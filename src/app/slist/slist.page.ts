import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slist',
  templateUrl: './slist.page.html',
  styleUrls: ['./slist.page.scss'],
})
export class SlistPage implements OnInit {
public id;
  constructor(private route : ActivatedRoute) { 
    this.id =  parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
