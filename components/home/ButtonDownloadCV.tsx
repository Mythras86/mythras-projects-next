import Link from "next/link";

export default function ButtonDownloadCV() {

    return (
        <Link href={"/files/FKcvENG.pdf"} target="blank">
            <button className="neonYellow text2 center" type="button">Download CV</button>
        </Link>
    );
}