import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import mongoose, { Types } from "mongoose";

interface IKarakter extends KarakterDto {
  _id: Types.ObjectId;
}

const KarakterSchema = new mongoose.Schema<IKarakter>({
  // Tulajdonos
  tulajdonosEmail: { type: String, required: true },
  letrehozasDatum: { type: String, required: true },
  
  // Karakter adatok
  partik: Array<any>,
  sztorik: Array<any>,
  eletutak: Array<any>,

  //Örökség
  dns: { type: String, required: true },
  szuletesiNem: { type: String, required: true },
  szuletesiDatum: { type: String, required: true },
  szuletesiNev: { type: String, required: true },
  anyanyelv: { type: String, required: true },
  borszin: { type: String, required: true },
  szemszin: { type: String, required: true },
  hajszin: { type: String, required: true },
  szorszin: { type: String, required: true },

  //Identitás
  foglalkozas: { type: String, required: true },
  becenev: { type: String, required: true },
  alnev: { type: String, required: true },
  latszolagosNem: { type: String, required: true },
  lathatoBorszin: { type: String, required: true },
  lathatoSzemszin: { type: String, required: true },
  lathatoHajszin: { type: String, required: true },
  lathatoSzorszin: { type: String, required: true },
  testsuly: { type: Number, required: true },
  magassag: { type: Number, required: true },
  testalkat: { type: String, required: true },
  kedvencSzin: { type: String, required: true },
  hajstilus: { type: String, required: true },
  megjelenes: { type: String, required: true },

  //Psziché
  felelem: { type: String, required: false },
  osztonzo: { type: String, required: false },
  gyulolet: { type: String, required: false },
  kovetendo: { type: String, required: false },
  irtozat: { type: String, required: false },
  vonzalom: { type: String, required: false },

  //Tulajdonságok
  fizEro: { type: Number, required: true },
  fizUgy: { type: Number, required: true },
  fizGyo: { type: Number, required: true },
  fizAll: { type: Number, required: true },
  asztEro: { type: Number, required: true },
  asztUgy: { type: Number, required: true },
  asztGyo: { type: Number, required: true },
  asztAll: { type: Number, required: true },
  esszencia: { type: Number, required: true },
  magia: { type: Number, required: true },
  chi: { type: Number, required: true },
  rezonancia: { type: Number, required: true },
  pancel: { type: Number, required: true },
  kockatartalek: { type: Number, required: true },

  //Állapotjelző
  asztralisAllapot: { type: Number, required: true },
  fizikaiAllapot: { type: Number, required: true },
  ehseg: { type: Number, required: true },
  faradtsag: { type: Number, required: true },


  //Erőforrások
  karmaAlap: { type: Number, required: true },
  karmaKapott: { type: Number, required: true },
  karmaFelhasznalt: { type: Number, required: true },
  tokeAlap: { type: Number, required: true },
  tokeKapott: { type: Number, required: true },
  tokeFelhasznalt: { type: Number, required: true },
  atvaltas: { type: Number, required: true },

  // Eszközök
  eszkozok: Array<any>

});

const Karakter = mongoose.models?.Karakter || mongoose.model<IKarakter>("Karakter", KarakterSchema);
export default Karakter;