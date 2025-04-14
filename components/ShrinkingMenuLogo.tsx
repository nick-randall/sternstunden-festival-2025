"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
const ShrinkingMenuLogo: React.FC = () => {
  const [bigLogo, setBigLogo] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBigLogo(false);
    } else {
      setBigLogo(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const logo = bigLogo ? "/logo-without-dates.png" : "/logo-simple.png";
  // const padding = bigLogo ? 0 : 20;
  return (
    <Link href="/" className="menu-item-container" style={{ position: "relative" }}>
      <Image
        className={`menu-item logo ${bigLogo ? "big" : ""}`}
        src="/logo-without-dates.png"
        alt="Sternstunden Festival Logo"
        width="826"
        height="483"
        style={{ opacity: bigLogo ? 1 : 0, position: "absolute", padding: "0" }}
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
