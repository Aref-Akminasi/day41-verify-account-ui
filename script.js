const codes = document.querySelectorAll('.code');
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      setTimeout(() => {
        if (codes[idx + 1]) {
          //Checks if the next code exist
          codes[idx + 1].focus();
        }
      }, 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
