"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PlayAudioButtonProps {
  audioUrl: string;
}

const PlayAudioButton: React.FC<PlayAudioButtonProps> = ({ audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false)

  const handleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation()
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        // Pause any currently playing audio
        const prevAudio = document.querySelector("audio");
        if (prevAudio && prevAudio !== audioRef.current) {
          prevAudio.pause();
          prevAudio.currentTime = 0;
        }
        audioRef.current.play();
        setPlaying(true);
      }
    }
  }

  useEffect(() => {
    
    const handleEnded = () => {
      setPlaying(false);
    };

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }
  , []);

  return (
    <>
      <Image
        id="play-button"
        src={playing ? "/pause-button.svg": "/play-button.svg"}
        alt="Play"
        width={50}
        height={50}
        style={{ cursor: "pointer"}}
        onClick={handleClick}
      />
      <audio ref={audioRef} src={audioUrl}></audio>
    </>
  );
};

export default PlayAudioButton;
