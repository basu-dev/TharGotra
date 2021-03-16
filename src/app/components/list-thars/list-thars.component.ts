import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GotraService } from 'src/app/services/gotra.service';

@Component({
  selector: 'app-list-thars',
  templateUrl: './list-thars.component.html',
  styleUrls: ['./list-thars.component.css']
})
export class ListTharsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private gotraService:GotraService
    ) { 
  }
@Input() gotraName:String;
fromSearch=false;
gotra:{name:String,thars:[],searchValue:String}
  ngOnInit(): void {
      this.route.paramMap.subscribe((data:ParamMap)=>{
        this.gotraName = data.get('id');
        
        this.getGotraDetail();
      });
      console.log(this.route);
      this.route.queryParamMap.subscribe((data:ParamMap)=>{
        if(data.has('fromSearch')){
          this.fromSearch=true;
        }
      });
    
    console.log(this.fromSearch)
    
  }
  getGotraDetail(){
    this.gotra = this.gotraService.getGotraDetail(this.gotraName);
  }
  

}
