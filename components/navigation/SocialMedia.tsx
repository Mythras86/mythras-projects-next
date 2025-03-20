import "./SocialMedia.scss";
import Link from "next/link";
import Image from "next/image";

interface ISocialMediaItem {
  link: string;
  image: any;
  alt: string;
  label: string;
}

export default function SocialMediaItem({link, image, alt, label}: ISocialMediaItem) {
    return (
      <Link href={link} target="_blank">
        <div className="mediaCont">
            <Image src={image} alt={alt}/>
            <div>{label}</div>
        </div>
      </Link>
    );
}