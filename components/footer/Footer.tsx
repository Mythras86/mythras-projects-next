import Link from "next/link";
import { navData } from "../header/navData.data";
import "./style.scss";

export default function Footer() {
    return (
      <footer id='footerCont'>
          {navData.map(data => 
            <div key={data.id}>
              <Link 
              href={data.id}
              >
                {data.nev}
              </Link>
            </div>
          )}
      </footer>
     
    );
}