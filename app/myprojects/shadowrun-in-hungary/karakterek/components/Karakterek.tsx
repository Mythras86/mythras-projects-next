'use client';

import { getKarakterek } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import { useEffect, useState } from "react";

export default function Karakterek() {

    const [karakterek, changeKarakterek] = useState([])
    
    useEffect(() => {
        async function getData() {
            try {
            const fetchedData = await getKarakterek();
            changeKarakterek(fetchedData);
            } catch(error) {
            throw error;
            }
        }
        getData();
    }, [])

    console.log(karakterek)
  
    return (
        <>
        <div>yes</div>
        {/* {karakterek.map(e=>
            <div className="neonGreen text2">{e.orokseg.szuletesiNev}</div>
        )} */}
        </>
    );


}