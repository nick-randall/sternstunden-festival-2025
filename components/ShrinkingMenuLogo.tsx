"use client";
import Link from "next/link";
import Image from "next/image";

interface ShrinkingMenuLogoProps {
  scrollIsAtTopOfPage: boolean;
}

const ShrinkingMenuLogo: React.FC<ShrinkingMenuLogoProps> = ({ scrollIsAtTopOfPage }) => {
  return (
    <h1 style={{ margin: 0}}>
      <Link href="/" className="menu-item-container" style={{ position: "relative" }}>
        <Image
          className={`menu-item logo ${scrollIsAtTopOfPage ? "big" : ""}`}
          src="/logo-with-dates.png"
          alt="Sternstunden Festival Logo"
          width="826"
          height="483"
          style={{ opacity: scrollIsAtTopOfPage ? 1 : 0, position: "absolute" }}
        />
        <Image
          className={`menu-item logo ${scrollIsAtTopOfPage ? "big" : ""}`}
          src="/logo-simple.png"
          alt="Sternstunden Festival Logo"
          width="826"
          height="483"
          style={{ opacity: scrollIsAtTopOfPage ? 0 : 1 }}
        />
      </Link>
    </h1>
  );
};

export default ShrinkingMenuLogo;
