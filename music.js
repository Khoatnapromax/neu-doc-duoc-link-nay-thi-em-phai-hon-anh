<script>
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let isPlaying = true;

// cố gắng phát nhạc ngay khi load
window.addEventListener("load", () => {
  music.play().catch(() => {
    // nếu bị chặn -> phát ngay khi user click đầu tiên
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});

// điều khiển nút
musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🔈";
  } else {
    music.play();
    musicBtn.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});
</script>

