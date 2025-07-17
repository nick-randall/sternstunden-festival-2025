"use client";
import { useEffect, useState } from "react";
import useMediaQuery from "./useMediaQuery";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

const FestivalAppPopup = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const { screenWidth } = useMediaQuery();

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem("bottomModalClosed", "true");
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted || !showModal) {
    return null; // Don't render on the server or before mounting
  }
  if (screenWidth > 768 || localStorage.getItem("bottomModalClosed") === "true") {
    return null; // Don't render on desktop
  }
  return createPortal(
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "align",
        alignItems: "center",
        borderRadius: "10px 10px 0 0",
        padding: 10,
        fontSize: 15,
      }}
    >
      Fürs Smartphone haben wir auch eine
      <Link href="/mobile-app">
        <strong>👉 Festival App</strong>
      </Link>
      
      <div style={{ position: "absolute", top: 14, right: 14 }}>
        <Image src="/close.png" alt="Zurück" width="19" height="19" onClick={handleClose} />
      </div>
    </div>,
    document.body
  );
};

export default FestivalAppPopup;