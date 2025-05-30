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

document.querySelectorAll(".infographic").forEach((infographic) => {
  const input = infographic.querySelector(".progress-value");
  const circle = infographic.querySelector(".progress-bar");
  const text = infographic.querySelector(".progress-text");

  const radius = circle.getAttribute("r");
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const value = Math.min(Math.max(parseFloat(input.value), 0), 100);
  const offset = circumference - (value / 100) * circumference;

  circle.style.strokeDashoffset = offset;
  text.textContent = `${value.toFixed(0)}%`;
});


  