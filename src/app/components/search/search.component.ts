import { Component, OnInit } from '@angular/core';
import { GotraService } from 'src/app/services/gotra.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private gotraService:GotraService) { }
gotraThar:any;
suggestions=[];
allGotras=[];
allThars=[];
searchData:String;
  ngOnInit(): void {
    this.gotraThar=this.gotraService.gotraThar;
    // this.listTharAndGotras();
    this.allGotras=this.gotraService.allGotras;
    this.allThars=this.gotraService.allThars;
  }
search(){
  console.log(this.searchData);
  this.gotraService.getGotraFromThar(this.searchData).subscribe(
    data=>console.log(data),
    (err:any)=>console.error(err)
  );
}
showSuggestions(value:string){
  this.searchData=value;
  this.suggestions=[];
  if(value.trim().length < 2){
    return ;
  }
  this.allGotras.forEach((x:string)=>{
    if(x.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
      this.suggestions.push({value:x,type:'Gotra'});
    }
  })
  this.allThars.forEach((x:string)=>{
    if(x.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
      this.suggestions.push({value:x,type:'Thar'});
    }
  })
}
}
