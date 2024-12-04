import { Component, OnInit } from '@angular/core';

interface HeadScript {
  src: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Alumnly';

  constructor(){}
  
  ngOnInit(): void {
  }
}
