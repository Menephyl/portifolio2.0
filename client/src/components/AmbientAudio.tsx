import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function AmbientAudio() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggleAudio = () => {
    if (muted) {
      setMuted(false);
      setPlaying(true);
    } else {
      setMuted(true);
      setPlaying(false);
    }
  };

  return (
    <>
      <div className="hidden">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=jW9nf13XPvc"
          playing={playing}
          muted={muted}
          loop={true}
          volume={0.3}
          width="0"
          height="0"
        />
      </div>

      <motion.button
        onClick={toggleAudio}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-24 left-6 z-50 w-12 h-12 bg-background/80 backdrop-blur border border-border rounded-full flex items-center justify-center shadow-lg hover:border-primary/50 hover:text-primary transition-all duration-300"
        aria-label={muted ? "Ativar som ambiente" : "Desativar som ambiente"}
      >
        {muted ? (
          <VolumeX className="w-5 h-5 text-muted-foreground" />
        ) : (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <Volume2 className="w-5 h-5 text-primary" />
          </motion.div>
        )}
      </motion.button>
    </>
  );
}
