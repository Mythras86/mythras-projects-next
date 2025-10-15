'use client';

import useSelectHeader from "@/lib/hooks/useSelectHeader";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  children?: React.ReactNode;
  id: string;
}

export default function NavMenu({children, id}: Props) {

  const [mounted, setMounted] = useState(false);
  const { selectedHeader } = useSelectHeader();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted && selectedHeader === id) {
    return createPortal(
    <>
      {children}
    </>
    , document?.getElementById('mainHeaderMenu') as HTMLElement
    );
  } else {
      return null;
  }
}
