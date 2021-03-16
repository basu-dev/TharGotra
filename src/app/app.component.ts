import { Component } from '@angular/core';
import { GotraService } from './services/gotra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private gotraService:GotraService){}
  title = 'TharGotra';
  ngOnInit(){
    this.gotraService.listTharAndGotras();
  }
}
