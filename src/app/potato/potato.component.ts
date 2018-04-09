import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.css']
})
export class PotatoComponent implements OnInit {

  data: any;
  showPotato: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('api/').subscribe(data => {
      this.data = data;
      this.showPotato = true;
    });
  }

  addPotato() {
    this.http.post ('api/potato', { 'isActive' : 1 }).subscribe(data => {
      this.data = data;
    });
  }

  clickPotato() {
    console.log('click');
    this.showPotato = false;
  }

}
