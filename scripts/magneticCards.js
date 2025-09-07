document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.magnetic-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = (x - centerX) * 0.04;
      const moveY = (y - centerY) * 0.04;
      card.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `translate(0, 0)`;
    });
  });
});
