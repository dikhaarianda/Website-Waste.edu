const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')
const menuItems = document.querySelectorAll('.dropdown-menu li')
const audio = document.getElementById("myAudio")
const audioIcon = document.querySelector('#home button i')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

document.addEventListener('click', function (event) {
  const isClickInside = dropDownMenu.contains(event.target) || toggleBtn.contains(event.target);
  const menuItemsArray = Array.from(menuItems);
  const isClickInsideMenu = menuItemsArray.some(item => item.contains(event.target));

  if (!isClickInside || isClickInsideMenu) {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
});

function toggleMute() {
  if (audio.paused) {
    audio.play();
    audioIcon.classList = "fa-solid fa-volume-high"
  } else {
    audio.pause();
    audio.currentTime = 0;
    audioIcon.classList = "fa-solid fa-volume-xmark"
  }

  audio.addEventListener("ended", function () {
    audioIcon.classList = "fa-solid fa-volume-xmark";
  });
}

function toggleContent(index) {
  var buttonClick = document.querySelectorAll('#pengelolaan .menu span');
  var contentClick = document.querySelectorAll('.content-wrapper');

  buttonClick.forEach(function (wrapper) {
    wrapper.classList.remove('active-bt');
  });

  contentClick.forEach(function (wrapper) {
    wrapper.classList.remove('active-content');
  });

  buttonClick[index - 1].classList.add('active-bt');
  contentClick[index - 1].classList.add('active-content');
}

