import "./SocialMedia.scss";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface Props {
  link: string;
  image: StaticImageData;
  imageSrc: string;
  alt: string;
  label: string;
}

export default function SocialMediaItem({link, image, imageSrc, alt, label}: Props) {
    return (
      <Link href={link} target="_blank">
        <div className="mediaCont">
            <Image src={image} alt={alt} placeholder="blur" blurDataURL={imageSrc}/>
            <div>{label}</div>
        </div>
      </Link>
    );
}