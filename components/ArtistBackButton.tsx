"use client";
import { useRouter } from "next/navigation";
import Spacer from "./Spacer";
import Image from "next/image";

const ArtistBackButton: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="back-button" onClick={handleBackClick}>
      zurück
      <Spacer width={8} />
      <Image src="/close.png" alt="Zurück" width="24" height="24" />
    </div>
  );
};

export default ArtistBackButton;