async function loadChannels() {
  const res = await fetch("channels.json");
  const channels = await res.json();

  const list = document.getElementById("channels");

  channels.forEach(ch => {
    const btn = document.createElement("div");
    btn.innerText = ch.name;
    btn.onclick = () => play(ch.id);
    list.appendChild(btn);
  });

  // Load first channel
  play(channels[0].id);
}

function play(id) {
  document.getElementById("player").src =
    "https://www.youtube.com/embed/live_stream?channel=" + id;
}

loadChannels();
