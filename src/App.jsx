import React, { useState } from "react";
import spinnyImage from "./assets/spinny.png";
import rouletteImage from "./assets/roulette.png";
import meme1 from "./assets/memes/spinny1 (1).png";
import meme2 from "./assets/memes/spinny1 (2).png";
import meme3 from "./assets/memes/spinny1 (3).png";
import meme4 from "./assets/memes/spinny1 (4).png";
import winSound from "./assets/sounds/win1.wav";
import loseSound from "./assets/sounds/lose1.wav";
import "./App.css";

export default function App() {
  const memes = [meme1, meme2, meme3, meme4];
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [meme, setMeme] = useState(memes[0]);
  const [soundOn, setSoundOn] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const winMessages = [
    "Spinny approves this degen luck.",
    "You're hotter than Pepe memes.",
    "Degen gods are smiling at you."
  ];

  const loseMessages = [
    "Spinny says: you spin like a true degen.",
    "That spin makes Pepe cry.",
    "Imagine spinning and still being broke."
  ];

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult("");
    setMessage("");

    setTimeout(() => {
      const didWin = Math.random() > 0.5;
      setResult(didWin ? "WIN" : "LOSE");
      setMessage(didWin ? randomItem(winMessages) : randomItem(loseMessages));
      setMeme(randomItem(memes));

      if (didWin) setWins((prev) => prev + 1);
      else setLosses((prev) => prev + 1);

      if (soundOn) {
        const sound = new Audio(didWin ? winSound : loseSound);
        sound.play();
      }
      setIsSpinning(false);
    }, 2000);
  };

  const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const shareOnX = () => {
    const text = `Spinny's Roulette: YOU ${result}! ${message} 🔥 @Spinnit_xyz\n\nThink you can beat me? Spin here: https://spinnit.xyz`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <div className="top-section">
        <img
          src={spinnyImage}
          alt="Spinny"
          className={isSpinning ? "spinny-spin" : ""}
        />
        <img
          src={rouletteImage}
          alt="Roulette"
          className={isSpinning ? "roulette-spin" : ""}
        />
      </div>

      <h1>Spinny's Roulette</h1>
      <button onClick={spin}>{isSpinning ? "Spinning..." : "Spin Again"}</button>
      <div className="sound-toggle">
        <input
          type="checkbox"
          checked={soundOn}
          onChange={() => setSoundOn(!soundOn)}
        />{" "}
        Sound ON
      </div>

      {result && (
        <div className={`result-text ${result === "WIN" ? "result-win" : "result-lose"}`}>
          YOU {result}!
        </div>
      )}
      {message && <p>{message}</p>}

      <div className="share-block">
        <h3>This is what will be shared on X:</h3>
        <img src={meme} alt="Share Meme" className="share-preview" />
        <a onClick={shareOnX} className="share-btn">Share on X</a>
        <p className="bonus-text">
          Share now! 10% chance for an extra **FREE SPIN!**
        </p>
      </div>

      <div className="leaderboard">
        <h3>Leaderboard</h3>
        <p>Wins: {wins}</p>
        <p>Losses: {losses}</p>
      </div>
    </div>
  );
}
