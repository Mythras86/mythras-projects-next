import Link from "next/link";

export default function NotFound() {
    return (
      <main id='notFound'>
        <h1 className="margBott1">!!! 404 HIBA !!!</h1>
        <h1 className="margBott1">Az oldal, amit kerestél nem található!</h1>
        <div>
          <Link href={"/"}>Vissza a Főoldalra</Link>
        </div>
      </main>
    );
}