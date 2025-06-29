import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import mongoose, { Schema, Types } from "mongoose";

interface IKarakter extends KarakterDto {
    _id: Types.ObjectId
}

const KarakterSchema = new mongoose.Schema<IKarakter>({

});

const Karakter = mongoose.models?.Karakter || mongoose.model<IKarakter>("Karakter", KarakterSchema);
export default Karakter;