import { useRef, useState } from "react";

function Mingi() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleImageClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <img
        src="https://i.pinimg.com/736x/f0/e8/c7/f0e8c7bf520558293b50d581d1a5a929.jpg"
        alt="Random image"
        className="img-fluid w-25"
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      />
      <audio
        ref={audioRef}
        src="public/ATEEZ(에이티즈) - 'WAVE' Official MV.mp3"
      />
    </>
  );
}

export default Mingi;
