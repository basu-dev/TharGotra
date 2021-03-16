import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotraService {

  constructor() { }
  gotraThar:any={
    Kaudinya:["Pyakurel","Paneru","Acharja","Acharya","Gaire","Sapkots","Satyal",
    "Marasaini","Morasaini","Parajuli","Baskota","Trital","Neupane","Khadka Lakai (Kamalkothe)","Thapa","Rawal"],
    Atri:["Chapagai","Osti","Oasti","Mishra","Khatiwoda","Malla","Ojha","Adhikari(Thadarai)","Gautam"],
    Atreya:["Dawadi","Dulal","Paudel","Poudel","Thapa (Puwar, Khulaal, Draini, Kalikote, Bagaale)","Panipokhrel",
    "Kalikote Khadka","Khadka Kalikote","Ajyal","Sigdel","Gelaal","Ghonde Gurung","Duwadi","Majhi" 
  ],
  Upamanyu:[
    "Mainali","Dhakal","Bartoula","Oli","Bhatta (Duwal)","Pande","Pade"
  ],

    Kashyap:["Shah","Shahi","Thakuri","Raimajhi","Ghimire","Godarthapa","Gartoula","Adhikari (Bhadare, Khilchine, Kowali)",
    "Bogati","Kathayat","Budathoki (Sodari)","Badal","Paande (Simaldiya,Badkhora)","Chhatkuli","Shreshtha","Limbu","Rai",
    "Sherpa","Unknown","Animals & Birds"
  
  ],
  Agasti:[
    "Dhungel"
  ],
  Kaushik:[
    "Regmi","Khaptari (Khadka)","Bista(Khaptari)","Bidari","Budathoki(Khaptari)", "Phuyal","Fuyal","Lamchhane Khadka",
    "Dhungana","Dhital","Rimal","Tiwari","Majhi","Basnet(Khaptari)","Luitel","Pudasaini","Baniya","Raghubanshi","Bhandari",
    "Bastakoti","Dashailiya","Pathak","Gauli","Dangi"
  ],
    Garga:["Acharya","Acharja"]
  }
  allGotras=[];
  allThars=[];

  listTharAndGotras():void{
    Object.entries(this.gotraThar).forEach((y:any)=>{
      this.allGotras.push(y[0]);
      y[1].forEach((a:string)=>{
        this.allThars.push(a)
      })
    })

  
}
getGotraDetail(name:String){
  let gotra:any;
  Object.entries(this.gotraThar).forEach((y:any)=>{
    console.log(name,y);
    if(y[0].toLowerCase() == name){
      gotra={name,thars:y[1]}
    }
  })
  return gotra;
}
checkValidThar(thar:String){
  return this.allThars.includes(thar);
}
getGotraFromThar(thar:String):Observable<any>{
  if(!this.checkValidThar(thar)){
    return throwError("Enter proper value")
  }
 let gotra:any;
  Object.entries(this.gotraThar).forEach((y:any,i)=>{
    console.log(y);
    if(y[1].includes(thar)){
      console.log(y[1]);
     gotra={name:y[0],thars:y[1]}
    }
  })
  console.log(gotra);
  return of(gotra);
}


}

