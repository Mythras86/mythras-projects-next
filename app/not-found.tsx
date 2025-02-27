import Link from "next/link";

export default function NotFound() {
    return (
      <main id='notFound'>
        <h1 className="neonRed">!!! 404 HIBA !!!</h1>
        <h1 className="">Az oldal, amit kerestél nem található!</h1>
        <Link className="neonGreen text1 center margTop1" href={"/"}>Vissza a Főoldalra</Link>
      </main>
    );
}