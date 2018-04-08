import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-potato',
  templateUrl: './potato.component.html',
  styleUrls: ['./potato.component.css']
})
export class PotatoComponent implements OnInit {

  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('api/').subscribe(data => {
      this.data = data;
    });
  }

  addPotato() {
    this.http.post ('api/potato', { 'isActive' : 1 }).subscribe(data => {
      this.data = data;
    });
  }

}
