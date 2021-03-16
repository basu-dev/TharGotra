import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GotraService } from 'src/app/services/gotra.service';

@Component({
  selector: 'app-list-gotras',
  templateUrl: './list-gotras.component.html',
  styleUrls: ['./list-gotras.component.css']
})
export class ListGotrasComponent implements OnInit {

  constructor(private gotraService:GotraService,private router:Router) { }
  allGotras:String[];
  ngOnInit(): void {
    this.gotraService.gotraSub.subscribe(
      (data:any[])=>{this.allGotras = (data && data?.length!=0)?data:this.gotraService.allGotras;
      }
    )
    this.gotraService.gotraSub.next();
  }
  showGotraDetail(gotra:String){
    this.router.navigateByUrl("/detail/"+gotra.toLowerCase());
  }

}
