import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GotraService } from 'src/app/services/gotra.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gotraService:GotraService,
    private router:Router
    ) { }
gotraThar:any;
suggestions=[];
allGotras=[];
allThars=[];
searchData:String="";
  ngOnInit(): void {
    this.gotraThar=this.gotraService.gotraThar;
    // this.listTharAndGotras();
    this.allGotras=this.gotraService.allGotras;
    this.allThars=this.gotraService.allThars;
  }
search(){

  this.gotraService.getGotraFromThar(this.searchData).subscribe(
    (data:any)=>{

      this.router.navigateByUrl("/detail/"+data.name.toLowerCase()+"?fromSearch=true");
    },
    (err:any)=>console.error(err)
  );
}
showSuggestions(value:string){
  this.searchData=value;
  this.suggestions=[];
  let gotraSuggestions=[]

  this.allGotras.forEach((x:string)=>{
    if(x.toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())){
      gotraSuggestions.push(x);
    }
  })
  this.gotraService.gotraSub.next(gotraSuggestions);
  if(value.trim().length > 2){
    this.allThars.forEach((x:string)=>{
      if(x.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
        this.suggestions.push({value:x,type:'Thar'});
      }
    })
  }
}
}
