'use client';

import { getKarakterek } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";
import { useEffect, useState } from "react";

export interface IKarakterek {
    _id: string;
    szuletesiNev: string;
    tulajdonosEmail: string;
}

export default function Karakterek() {

    const [isLoading, setLoading] = useState(true);
    const [karakterek, changeKarakterek] = useState<IKarakterek[]>([]);
    
    useEffect(() => {
        async function getData() {
            try {
            const fetchedData: IKarakterek[] = await getKarakterek();
            changeKarakterek(fetchedData);
            setLoading(false);
            } catch(error) {
            throw error;
            }
        }
        getData();
    }, [])
  
    return (
        <LoadingSpinner isLoading={isLoading}>
            {karakterek.map(e=>
                <div key={e._id} className="neonGreen text2">{e.szuletesiNev} {e.tulajdonosEmail}</div>
            )}
        </LoadingSpinner>
    );


}