

document.addEventListener('DOMContentLoaded', function() {
  const captions = document.querySelectorAll('.collage-caption');
  const tooltip = document.getElementById('tooltip');

  captions.forEach(caption => {
    caption.addEventListener('mouseover', function(event) {
      tooltip.textContent = this.getAttribute('data-info');
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.pageX + 10}px`;
      tooltip.style.top = `${event.pageY + 10}px`;
    });

    caption.addEventListener('mousemove', function(event) {
      tooltip.style.left = `${event.pageX + 10}px`;
      tooltip.style.top = `${event.pageY + 10}px`;
    });

    caption.addEventListener('mouseout', function() {
      tooltip.style.display = 'none';
    });

    caption.addEventListener('click', function(event) {
      tooltip.textContent = this.getAttribute('data-info');
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.pageX + 10}px`;
      tooltip.style.top = `${event.pageY + 10}px`;
    });
  });
});
