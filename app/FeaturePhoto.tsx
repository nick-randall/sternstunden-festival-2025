"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface FeaturePhotoProps {
  url: string;
  removePhoto: () => void;
}

const FeaturePhoto: React.FC<FeaturePhotoProps> = ({ url, removePhoto }) => {
  const [mounted, setMounted] = useState(false);

  // Apparently this stops issues with SSR  (according to ChatGPT)
  useEffect(() => {
    setMounted(true); // Ensures the component only runs on the client
    return () => setMounted(false);
  }, []);

  if (!mounted) return null; // Prevents issues during SSR

  return createPortal(
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        position: "fixed",
        boxSizing: "content-box",
        backgroundColor: "black",
      }}
      onClick={removePhoto}
    >
      <Image src={url} alt={url} className="feature-photo" width="1000" height="1000" />
    </div>,
    document.body
  );
};

export default FeaturePhoto;
