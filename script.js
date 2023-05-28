
const backToTopBtn = document.querySelector('.back-to-top');
backToTopBtn.addEventListener('click', scrollToTop);
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const toggleSwitch = document.querySelector('#toggle-theme');

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

var buyBtn = document.querySelectorAll('.buy-btn');

var overlay = document.querySelector('.overlay');
var form = overlay.querySelector('.purchase-form');
var closeBtn = form.querySelector('.close-btn');

buyBtn.forEach ( function (buyBtns) {
buyBtns.addEventListener('click', function(event) {
  event.preventDefault();
  overlay.classList.add('show');
})
});

closeBtn.addEventListener('click', function(event) {
  event.preventDefault();
  overlay.classList.remove('show');
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  overlay.classList.remove('show');
});


function getDayInfo(dateString) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const weekNumber = Math.ceil(date.getDate() / 7);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${dayOfWeek}, ${weekNumber} неделя ${month} ${year} года`;
  }
  const resultElements = document.querySelectorAll("#result");
  const dateStrings = ["01.01.2022", "02.01.2022", "03.01.2022", "04.01.2022", "05.01.2022", "06.01.2022", "07.01.2022", "08.01.2022", "09.01.2022", "10.01.2022", "11.01.2022", "12.01.2022"];
  dateStrings.forEach((dateString, index) => {
    const dayInfo = getDayInfo(dateString);
    resultElements[index].textContent = dayInfo;
  });