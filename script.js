const contents = document.querySelectorAll('.content');
const spinner = document.querySelector('.spinner');
contents.forEach(e => {
  e.addEventListener('mouseover', function () {
    e.classList.add('active');
  });
  e.addEventListener('mouseout', function(){
    e.classList.remove('active');
  });
});

const body = document.querySelector('body');

body.addEventListener("animationend", function() {
  spinner.style.display = 'none';
});