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
    Garga:["Bastola","Gajurel","Bhatta","Risal","Lamicchane (Bhatta)","Bhurtel","Bhurtel","Acharya","Acharja","Lamchhanethapa",
  "Bhetwal","Lamichhane Gurung","Rokaha","Chudal","Joshi(Bhijaar)","Khadka (Palpali)"
  ],
  Gautam:[
    "Tripathi","Tiwari","Chand","Dangal"
  ],
  GhritaKaushik:[
    "Sutarkarki","Baral","Pandit","Khanal","Nepal","Bardewa","Wardewa"
  ],
  Dhananjaya:[
    "Homegain","Humagain","Rijal","Pangeni","Basel","Kukurkate","Guragain","Basnet (Khulal)","Basnet","Bhusal","Budathoki (Khulal)",
    "Gauripipli","Dhamala","Pakuwal"
  ],
  Bhardwaj:[
    "Chaulagain","Subedi","Thapaliya","Baidawaar","Vaidawaar","Panthi",
    "Pant","Siluwal","Silwal","Bist(Sijapati)","Wagle","Lohani","Adhikari (Thami)","Pokhrel(Dudh)","Siwakoti","Devkota",
    "Niraula","Jamarkattel","Khadka (Maharajji Khadka)","Raut","Kandel","Basnet (Shripali) ","Pande (Kuleta)","Chhetri",
    "Joshi (Lataula)","Gurung (Ghale)","Lama Gurung","Rajauriya","Chimauriya","Burlakoti","Majagaiya","Sitaula","Bauhara",
    "Singraula","Khanigelal"
  ],
  Parashar:[
    "Marhattha","Lamakarki","Arya","Dhimal","Kattel","Pandit",
    "Naral"
  ],
  Mandabya:[
    "Bajagain","Bajgain","Gyawali","Katuwal","Panthi","Maskebajai"
  ],
  Maudgalya:[
    "Koirala","Kuinkel","Thapa(Kalikote)","Simkhada","Upreti","Karki (Khulal , Mudula ,Lama)","Timsina","Belkaali",
    "Timalsina","Belbase"
  ],
  Batsa:[
    "Rana","Lamsal","Kunwar","Dahal","Rupakheti","Chauhan","Kharal"
  ],
  Krishnatri:[
    "Khakurel"
  ],
  Jaimini:[
    "Ghodasaini"
  ],
  Sainik:["Sahi"],
  Bashistha:[
    "Suyal","Gharti","Gaire Raut","Bhattarai","Suyel Thapa","Dawadi","Bhandari (Thansine)","Gharti (Suyal)","Kharel","Chalise",
    "Mudbari","Falakati","Pathak","Keshari","Soti"
  ],
  Shandilya:[
    "Kafle","Prashain","Mahat","Katuwal"
  ],
  Angiras:[
    "Joshi (Silai)", "Sedhain (Saunak)","Shahi"
  ],
  Bishwamitra:[
    "Bhatta (Alina)","Duwadi","Nirbanshi","Rayal","Rai"
  ],
  Krishnanjani:[
    "Bist (Kamalkote)","Kaderia"
  ],
  Kapil:[
    "Bohara","Khadka(Puwa)","Dani, Chhetri(Bist ,ThapaKhadka)"
  ],
  Bhrigu:[
    "Chauhan"
  ]
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
     gotra={name:y[0],thars:y[1],searchValue:thar}
    }
  })
  console.log(gotra);
  return of(gotra);
}


}

