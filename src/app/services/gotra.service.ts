import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotraService {

  constructor() { }
  gotraThar: any = {
    Kaudinya: {
      thars: ["Pyakurel", "Paneru", "Acharja (Kaudinya)", "Acharya (Kaudinya)", "Gaire", "Sapkota", "Satyal",
        "Marasaini", "Morasaini", "Parajuli", "Baskota", "Trital", "Neupane", "Khadka Lakai (Kamalkothe)",
        "Thapa", "Rawal"], prawar: ["Kaudinya", "Bashistha", "Maitrabaruni"]
    },
    Atri: {
      thars: ["Chapagai", "Osti", "Oasti", "Mishra", "Khatiwoda", "Malla", "Ojha", "Adhikari(Thadarai)",
        "Gautam"], prawar: ["Atri","Archananasa","Shyabashwo"]
    },
    Atreya: {
      thars: ["Dawadi", "Dulal", "Paudel", "Poudel", "Thapa (Puwar, Khulaal, Draini, Kalikote, Bagaale)", "Panipokhrel",
        "Kalikote Khadka", "Khadka Kalikote", "Ajyal", "Sigdel", "Gelaal", "Ghonde Gurung", "Duwadi", "Majhi"
      ], prawar: ["Atreya","Archananasha","Shyabashwo"]
    },
    Upamanyu: {
      thars: [
        "Mainali", "Dhakal", "Bartoula", "Oli", "Bhatta (Duwal)", "Pande", "Pade"
      ], prawar: ["Upamanyu","Kapil","Biruj"]
    },

    Kashyap: {
      thars: ["Shah", "Shahi", "Thakuri", "Raimajhi", "Ghimire", "Godarthapa", "Gartoula",
        "Adhikari (Bhadare, Khilchine, Kowali)", "Bogati", "Kathayat", "Budathoki (Sodari)", "Badal",
        "Paande (Simaldiya, Badkhora)", "Chhatkuli", "Shreshtha", "Limbu", "Rai",
        "Sherpa", "Unknown", "Animals & Birds"

      ], prawar: ["Kashyap","Awatsar","Naidhruwa"]
    },
    Agasti: {
      thars: [
        "Dhungel"
      ], prawar: ["Agatsya","Dardhyachyut","Idmawaha"]
    },
    Kaushik: {
      thars: [
        "Regmi", "Khaptari (Khadka)", "Bista (Khaptari)", "Bidari", "Budathoki (Khaptari)", "Phuyal", "Fuyal",
        "Lamchhane Khadka", "Dhungana", "Dhital", "Rimal", "Tiwari", "Majhi", "Basnet (Khaptari)", "Luitel", "Pudasaini",
        "Baniya", "Raghubanshi", "Bhandari",
        "Bastakoti", "Dashailiya", "Pathak (Kaushik)", "Gauli", "Dangi"
      ], prawar: ["Kaushika","Hridhamarshana","Vishwamitra"]
    },
    Garga: {
      thars: ["Bastola", "Gajurel", "Bhatta", "Risal", "Lamicchane (Bhatta)", "Bhurtel", "Bhurtel", "Acharya (Garga)",
        "Acharja (Garga)", "Lamchhanethapa",
        "Bhetwal", "Lamichhane Gurung", "Rokaha", "Chudal", "Joshi (Bhijaar)", "Khadka (Palpali)"
      ], prawar: ["Garga","Gaargya","Gautam","Vishwamitra","Paarashar"]
    },
    Gautam: {
      thars: [
        "Tripathi", "Tiwari", "Chand", "Dangal"
      ], prawar: ["Gautam","Garga","Shandilya"]
    },
    GhritaKaushik: {
      thars: [
        "Sutarkarki", "Baral", "Pandit", "Khanal", "Nepal", "Bardewa", "Wardewa"
      ], prawar: ["Ghritakaushika","Vishwawmitra"]
    },
    Dhananjaya: {
      thars: [
        "Homegain", "Humagain", "Rijal", "Pangeni", "Basel", "Kukurkate", "Guragain", "Basnet (Khulal)", "Basnet",
        "Bhusal", "Budathoki (Khulal)",
        "Gauripipli", "Dhamala", "Pakuwal"
      ], prawar: ["Dhananjaya","Vishwamitra","Maduchchhanda"]
    },
    Bhardwaj: {
      thars: [
        "Chaulagain", "Subedi", "Thapaliya", "Baidawaar", "Vaidawaar", "Panthi",
        "Pant", "Siluwal", "Silwal", "Bist(Sijapati)", "Wagle", "Lohani", "Adhikari (Thami)", "Pokhrel(Dudh)", "Siwakoti",
        "Devkota",
        "Niraula", "Jamarkattel", "Khadka (Maharajji Khadka)", "Raut", "Kandel", "Basnet (Shripali) ", "Pande (Kuleta)",
        "Chhetri",
        "Joshi (Lataula)", "Gurung (Ghale)", "Lama Gurung", "Rajauriya", "Chimauriya", "Burlakoti", "Majagaiya", "Sitaula",
        "Bauhara",
        "Singraula", "Khanigelal"
      ], prawar: ["Bhardwaj","Angirasha","Barhaspatya"]
    },
    Parashar: {
      thars: [
        "Marhattha", "Lamakarki", "Arya", "Dhimal", "Kattel", "Pandit",
        "Naral"
      ], prawar: ["Parashar","Bashistha","Shakti"]
    },
    Mandabya: {
      thars: [
        "Bajagain", "Bajgain", "Gyawali", "Katuwal", "Panthi", "Maskebajai"
      ], prawar: ["Mandabya","Maandap","Vishwamitra"]
    },
    Maudgalya: {
      thars: [
        "Koirala", "Kuinkel", "Thapa(Kalikote)", "Simkhada", "Upreti", "Karki (Khulal , Mudula ,Lama)", "Timsina",
        "Belkaali",
        "Timalsina", "Belbase"
      ], prawar: ["Maudgalya","Angirasha","Bharmashwa"]
    },
    Batsa: {
      thars: [
        "Rana", "Lamsal", "Kunwar", "Dahal", "Rupakheti", "Chauhan", "Kharal"
      ], prawar: ["Batsa","Awrwo","Chyawan","Bharwawa","Jaamadagni"]
    },
    Krishnatri: {
      thars: [
        "Khakurel"
      ], prawar: []
    },
    Jaimini: {
      thars: [
        "Ghodasaini"
      ], prawar: ["Jaimini","Ugra","Sankrit"]
    },
    Shawnak: { thars: ["Sahi"], prawar: ["Shawnak","Vishwamitra","Bharmashwa"] },
    Bashistha: {
      thars: [
        "Suyal", "Gharti", "Gaire Raut", "Bhattarai", "Suyel Thapa", "Dawadi", "Bhandari (Thansine)", "Gharti (Suyal)",
        "Kharel", "Chalise",
        "Mudbari", "Falakati", "Pathak", "Keshari", "Soti"
      ], prawar: ["Bashistha","Indrapramad","AAbhardwasu"]
    },
    Shandilya: {
      thars: [
        "Kafle", "Prashain", "Mahat", "Katuwal"
      ], prawar: ["Shandilya","Asita","Dewal"]
    },
    Angiras: {
      thars: [
        "Joshi (Silai)", "Sedhain (Saunak)", "Shahi"
      ], prawar: ["Shawnak","Vishwamitra","Bharmashwa"]
    },
    Bishwamitra: {
      thars: [
        "Bhatta (Alina)", "Duwadi", "Nirbanshi", "Rayal", "Rai"
      ], prawar: []
    },
    Krishnanjani: {
      thars: [
        "Bist (Kamalkote)", "Kaderia"
      ], prawar: []
    },
    Kapil: {
      thars: [
        "Bohara", "Khadka(Puwa)", "Dani, Chhetri(Bist ,ThapaKhadka)"
      ], prawar: []
    },
    Bhrigu: {
      thars: [
        "Chauhan"
      ], prawar: []
    }
  }
  allGotras = [];
  allThars = [];
  gotraSub = new Subject<any>();
  listTharAndGotras(): void {
    Object.entries(this.gotraThar).forEach((y: any) => {
      this.allGotras.push(y[0]);
      y[1]["thars"].forEach((a: string) => {
        this.allThars.push(a)
      })
    })
  }
  getGotraDetail(name: String) {
    let gotra: any;
    Object.entries(this.gotraThar).forEach((y: any) => {
      if (y[0].toLowerCase() == name) {
        gotra = { name, thars: y[1]["thars"], prawar: y[1]["prawar"] }
      }
    })
    return gotra;
  }
  checkValidThar(thar: String) {
    return this.allThars.includes(thar);
  }
  checkValidGotra(gotra: String) {
    return this.allGotras.includes(gotra);
  }
  getGotraFromThar(thar: String): Observable<any> {
    if (!this.checkValidThar(thar)) {
      return throwError("Enter proper value")
    }
    let gotra: any;
    Object.entries(this.gotraThar).forEach((y: any, i) => {
      if (y[1]["thars"].includes(thar)) {
        gotra = { name: y[0], thars: y[1]["thars"], prawar: y[1]["prawar"], searchValue: thar }
      }
    })
    return of(gotra);
  }


}



