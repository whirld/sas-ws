
  function matchLabelWidths() {
    const labels = document.querySelectorAll('.links > a > strong');
    let maxWidth = 0;
    labels.forEach(label => {
      label.style.width = 'auto'; // reset width to measure natural size
      const width = label.getBoundingClientRect().width;
      if (width > maxWidth) {
        maxWidth = width;
      }
    });
    labels.forEach(label => {
      label.style.width = maxWidth + 'px';
    });
  }

  window.addEventListener('load', matchLabelWidths);
  window.addEventListener('resize', matchLabelWidths);
