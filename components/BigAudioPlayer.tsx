import "../styles/planet.css";
import Image from "next/image";
import PlayAudioButton from "./PlayAudioButton";
import { useEffect, useRef } from "react";

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null)


  useEffect(() => {
    const audioPlayer = audioRef.current;
    if(audioPlayer) {
      audioPlayer.addEventListener("timeupdate", (time) => {
        console.log(time)
      });
    }
  })
  return (
    <>
      <div className="planets-audio-player">
        <Image height="140" width="140" alt="Planet Audio Player Image" className="audio-player-image" src="/audio-player.png" />
        <PlayAudioButton audioUrl="https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/hoerspielversion.mp3" />
        <span>Merle Juschka, Nilton Fonseca, Marvin J. Deitz, Vivien Rönneburg, Noemi Deitz, Julia Meier, Katja Lehmann, Sara Ricking</span>
      </div>
      <audio ref={audioRef} src="https://sternstunde.s3.ap-southeast-2.amazonaws.com/planets/hoerspielversion.mp3"></audio>
    </>
  );
};

export default AudioPlayer;
