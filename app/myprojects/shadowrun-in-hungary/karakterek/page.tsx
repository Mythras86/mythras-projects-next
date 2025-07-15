import "./page.scss";
import { Metadata } from "next";
import Karakterek from "./components/Karakterek";
import Button from "@/components/Button/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Karakterek',
  description: 'Karakterek'
};

export default function KarakterekPage() {
  return (
    <main id='karakterek'>
      <h1>Karakterek</h1>
      <Link href={"/myprojects/shadowrun-in-hungary/ujkarakter"} className="center margBott1">
        <Button iconType={"yes"}>Új Karakter</Button>
      </Link>

      <Karakterek></Karakterek>
    </main>
  );
}