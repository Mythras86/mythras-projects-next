'use client';

import HeaderShadowrun from "@/app/myprojects/shadowrun-in-hungary/components/Header/HeaderShadowrun";
import HeaderHome from "@/components/Header/HeaderHome";
import { usePathname } from "next/navigation";

interface Props {
  children?: React.ReactNode;
  id?: string;
}

export default function NavMenu({children, id}: Props) {

  const path = usePathname();

  let headerId = 'home';

  function setHeaderId() {
    if (path.includes('shadowrun-in-hungary')) {
      return headerId = 'shadowrun';
    }
    return 'home';
  }

  setHeaderId();

  return(
    <menu id={id}>
      {headerId === 'home' &&
        <HeaderHome></HeaderHome>
      }
      {headerId === 'shadowrun' &&
        <HeaderShadowrun></HeaderShadowrun>
      }
      {children}
    </menu>
  );
}
