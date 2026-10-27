const EVENT_DATE = new Date("2026-11-21T13:30:00-06:00");

function updateCountdown() {
  const now = new Date();
  let difference = EVENT_DATE.getTime() - now.getTime();
  const message = document.getElementById("countdownMessage");
  if (difference <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    message.textContent = "¡Hoy comienza la aventura de Génesis! 🎉";
    return;
  }
  const days = Math.floor(difference / 86400000);
  difference %= 86400000;
  const hours = Math.floor(difference / 3600000);
  difference %= 3600000;
  const minutes = Math.floor(difference / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);
  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// The recipient number is intentionally not set until the family supplies it.
// The generic WhatsApp share link lets guests choose a recipient for now.
const rsvpText = "¡Hola! Confirmo mi asistencia al segundo cumpleaños de Génesis, el sábado 21 de noviembre de 2026 a la 1:30 p. m. en Salón Cabaña Don Javi. 🐾";
document.getElementById("rsvpButton").href =
  "https://wa.me/?text=" + encodeURIComponent(rsvpText);

const music = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const musicIcon = document.getElementById("musicIcon");
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.setAttribute("aria-pressed", "true");
      musicLabel.textContent = "Silenciar música";
      musicIcon.textContent = "♫";
    } catch {
      musicLabel.textContent = "Añade musica.mp3";
      alert("Para activar la música, coloca un archivo llamado musica.mp3 en la carpeta assets.");
    }
  } else {
    music.pause();
    musicToggle.setAttribute("aria-pressed", "false");
    musicLabel.textContent = "Activar música";
    musicIcon.textContent = "♫";
  }
});
