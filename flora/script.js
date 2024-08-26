//show text block

document.addEventListener('DOMContentLoaded', function() {
  const textBlocks = document.querySelectorAll('.text-block');

  function checkVisibility() {
      const windowHeight = window.innerHeight;
      textBlocks.forEach(block => {
          const rect = block.getBoundingClientRect();
          if (rect.top < windowHeight && rect.bottom > 0) {
              block.classList.add('visible');
          } else {
              block.classList.remove('visible');
          }
      });
  }

  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
});

//zoom img

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-zoom');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            overlay.style.display = 'flex';
            overlayImage.src = this.src;
        });
    });

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay || event.target === overlayImage) {
            overlay.style.display = 'none';
        }
    });
});

