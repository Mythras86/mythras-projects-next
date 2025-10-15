'use client';

import cl from './Project.module.scss';
import Link from 'next/link';
import { ProjectModel } from '../projekt.data';
import Image from "next/image";
import underContruction from '@/public/images/underConstruction.png';
import useSelectHeader from '@/lib/hooks/useSelectHeader';

interface Props {
    data: ProjectModel;
}

export default function Project({data}: Props) {

    const { setHeader } = useSelectHeader();

    return (
        <Link className="margBott1" key={data.id} href={'/myprojects/'+data.id} onClick={()=>setHeader(data.header)}>
            <h2 className='neonOrange'>{data.name}</h2>
            <div className={`border-orange bg-black ${cl.imageCont}`}>
                {data.img && 
                <Image src={data.img} alt={data.alt} placeholder="blur" blurDataURL={data.imgSrc} />
            }
                {!data.img && 
                <Image src={underContruction} alt={'Porject is under construction'} placeholder="blur" 
                blurDataURL='@/public/images/underConstruction.png'/>
                }
            </div>
            <div className={`neonWhite text0 center ${cl.info}`}>
                Type: <span className="color-green">{data.type}</span>
            </div>
            <div className={`neonWhite text0 center ${cl.info}`}>
                Status: <span className="color-green">{data.status}</span>
            </div>
        </Link>
    );
}