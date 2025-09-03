const startDate = new Date('2025-09-06T09:30:00');

const statusEl = document.getElementById('status');
const timerEl = document.getElementById('timer');

function updateCountdown() {
  const now = new Date();
  const diff = startDate - now;

  if (diff <= 0) {
    statusEl.textContent = 'JA!';
    timerEl.textContent = 'De kermis is begonnen!';
    clearInterval(interval);
    return;
  }

  statusEl.textContent = 'NEE';
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  timerEl.textContent = `${days} dagen ${hours} uur ${mins} min ${secs} sec`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
