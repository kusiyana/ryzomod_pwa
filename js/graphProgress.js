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
  