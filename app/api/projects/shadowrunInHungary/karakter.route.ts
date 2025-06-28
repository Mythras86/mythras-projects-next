'use server';

import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import dbConnect from "@/lib/db";
import Karakter from "./karakter.model";
import { redirect } from "next/navigation";

export async function getKarakterek() {}

export async function getOneKarakter() {}

export async function saveKarakter(karakter: KarakterDto): Promise<void> {
  await dbConnect();

  if (karakter.id === "") {
    const newChar = new Karakter(karakter);
    try {
      await newChar.save();
    } catch (error) {
      throw error;
    }

    redirect("/");
  } else {
    try {
      await Karakter.findOneAndUpdate({_id: karakter.id}, {karakter});
    } catch (error) {
      throw error;
    }
  }

}

export async function deleteKarakter() {}