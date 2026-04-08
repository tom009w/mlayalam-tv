"use client";
import { useState } from "react";

const channels = [
  { name: "Asianet News", id: "UCuh3F3lVg1cA7L5Yw6k0Fjg" },
  { name: "Manorama News", id: "UCk8GzjMOrta8yxDcKfylJYw" },
  { name: "24 News", id: "UCpCiIDf9UrfRqte55FHWlYQ" }
];

export default function Home() {
  const [current, setCurrent] = useState(channels[0]);

  return (
    <main style={{ background: "black", color: "white", minHeight: "100vh" }}>
      <h1 style={{ padding: 20 }}>📺 Malayalam Live TV</h1>

      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/live_stream?channel=${current.id}`}
        allowFullScreen
      />

      {channels.map((ch, i) => (
        <button key={i} onClick={() => setCurrent(ch)}>
          {ch.name}
        </button>
      ))}
    </main>
  );
}
