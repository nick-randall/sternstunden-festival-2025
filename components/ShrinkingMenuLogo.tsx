"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ShrinkingMenuLogoProps {
  setBigLogoParent: (bigLogo: boolean) => void;
}
// }

const ShrinkingMenuLogo: React.FC<ShrinkingMenuLogoProps> = ({setBigLogoParent}) => {
  const [bigLogo, setBigLogo] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBigLogo(false);
      setBigLogoParent(false);
    } else {
      setBigLogo(true);
      setBigLogoParent(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  // const logo = bigLogo ? "/logo-without-dates.png" : "/logo-simple.png";
  // const padding = bigLogo ? 0 : 20;
  return (
    <Link href="/" className="menu-item-container" style={{ position: "relative" }}>
      <Image
        className={`menu-item logo ${bigLogo ? "big" : ""}`}
        src="/logo-with-dates.png"
        alt="Sternstunden Festival Logo"
        width="826"
        height="483"
        style={{ opacity: bigLogo ? 1 : 0, position: "absolute" }}
      />
      <Image
        className={`menu-item logo ${bigLogo ? "big" : ""}`}
        src="/logo-simple.png"

        alt="Sternstunden Festival Logo"
        width="826"
        height="483"
        style={{ opacity: bigLogo ? 0 : 1 }}
      />
    </Link>
  );
};

export default ShrinkingMenuLogo;
