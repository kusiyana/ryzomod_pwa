function updateProgressBars() {
    document.querySelectorAll(".status-row").forEach((row) => {
      const hiddenInput = row.querySelector(".progress-value");
      const fill = row.querySelector(".progress-fill");
      const label = row.querySelector(".progress-label");
  
      const value = Math.min(Math.max(parseFloat(hiddenInput.value), 0), 100);
      fill.style.width = `${value}%`;
      label.textContent = `${value.toFixed(1)}%`;
    });
  }
  
  // Call once on page load
  updateProgressBars();

const progressInput = document.getElementById("progress-value");
const progressCircle = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const radius = 30;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = `${circumference}`;
progressCircle.style.strokeDashoffset = `${circumference}`;

function setProgressFromInput() {
  const value = Math.min(Math.max(parseFloat(progressInput.value), 0), 100);
  const offset = circumference - (value / 100) * circumference;

  progressCircle.style.strokeDashoffset = offset;
  progressText.textContent = `${value.toFixed(0)}%`;
}

// Initial draw
setProgressFromInput();

  