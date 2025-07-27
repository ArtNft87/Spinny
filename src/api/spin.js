const roasts = [
  "Spinny says: even a rugpull would spin better than you.",
  "Your spin is as dead as Terra Luna.",
  "Is that a spin or a cry for help?",
  "Spin harder, paper hands.",
  "Even FTX had better luck than you.",
  "Your spin is more rugged than BitConnect.",
  "Spinny says: Did you just 404 your brain?",
  "That spin is why we can’t have nice things.",
  "Bro, your spin got liquidated instantly.",
  "Even Do Kwon would laugh at that spin.",
  "Spinny says: Your spin belongs in a DAO of failures.",
  "That spin? Pure rekt energy.",
  "Spinny: Imagine spinning and still being this broke.",
  "Your spin is the reason Vitalik looks sad.",
  "Spinny says: Are you spinning with your toes?",
  "This spin is worse than my meme portfolio.",
  "That’s not a spin, that’s a rug alert.",
  "Spinny says: Did your spin get hacked?",
  "That spin just lost 99% of its value.",
  "Spin harder, anon. CZ is watching.",
  "Your spin is deader than a Solana node.",
  "Spinny: That spin screams ‘exit liquidity.’",
  "Your spin is more scammy than SafeMoon.",
  "Spinny says: Are you spinning or just coping?",
  "That spin got front‑run by a bot.",
  "Even Gary Gensler would approve this L.",
  "Spin harder, wagmi is laughing.",
  "Your spin has less alpha than TikTok.",
  "Spinny says: burn that spin and start over.",
  "That spin makes Pepe cry."
];

const wins = [
  "You WIN! Spinny salutes you, degen.",
  "Spinny says: WAGMI, king!",
  "You just pulled a 100x spin!",
  "Winner energy detected — send it.",
  "Spinny approves this degen luck.",
  "Not bad for a moonboy like you.",
  "Degen gods are smiling at you.",
  "Spinny: You’re cooking!",
  "Your spin just pumped harder than Doge.",
  "You’re spinning like a true Chad.",
  "Spinny: winner, winner, meme dinner.",
  "Crypto Twitter would be proud.",
  "Spinny’s giving you the alpha nod.",
  "This spin is full‑send certified.",
  "Giga win, anon!",
  "You just made it to Valhalla.",
  "Spinny: absolute legend move.",
  "Your spin broke resistance levels.",
  "This spin’s hotter than Pepe memes.",
  "Spinny says: God-tier W!",
  "Winner vibes? Confirmed.",
  "Spinny: Enjoy the dopamine pump.",
  "You’re the chosen degen.",
  "Spinny bows to your luck.",
  "This spin? Pure bull run energy.",
  "Moon mission initiated!",
  "Spinny approves your stonk brain.",
  "You’re minting Ws like NFTs.",
  "This spin goes hard.",
  "Spinny says: Keep winning, Chad."
];

export function spin() {
  const isWin = Math.random() < 0.5; // 50% chance
  if (isWin) {
    return {
      result: "win",
      message: wins[Math.floor(Math.random() * wins.length)]
    };
  } else {
    return {
      result: "lose",
      message: roasts[Math.floor(Math.random() * roasts.length)]
    };
  }
}
