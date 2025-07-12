import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import mongoose, { Schema, Types } from "mongoose";

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

  dns: { type: String, required: true },
  szuletesiNem: { type: String, required: true },
  szuletesiDatum: { type: String, required: true },
  szuletesiNev: { type: String, required: true },
  anyanyelv: { type: String, required: true },
  becenev: { type: String, required: false },
  alnev: { type: String, required: false },
  testsuly: { type: Number, required: false },
  magassag: { type: Number, required: false },
  kedvencSzin: { type: String, required: false },
  testalkat: { type: String, required: false },
  borszin: { type: String, required: false },
  szemszin: { type: String, required: false },
  hajszin: { type: String, required: false },
  szorszin: { type: String, required: false },
  hajstilus: { type: String, required: false },
  foglalkozas: { type: String, required: false },
  felelem: { type: String, required: false },
  osztonzo: { type: String, required: false },
  gyulolet: { type: String, required: false },
  kovetendo: { type: String, required: false },
  irtozat: { type: String, required: false },
  vonzalom: { type: String, required: false },
  megjelenes: { type: String, required: false },
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