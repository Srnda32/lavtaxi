const warpperElement = document.querySelector('.wrapper');

warpperElement.addEventListener('click', (event) => {
  if (event.target.tagName == 'A') {
    document.getElementById('active').checked = false;
  }
});
