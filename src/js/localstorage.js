const themeColor = {
  dark: 'dark-theme',
  light: 'light-theme',
};

const switchRef = document.querySelector('.js-switch-input');

switchRef.addEventListener('change', handleSwitchChange);

function handleSwitchChange(event) {
  if (event.target.checked) {
    darkTheme();
  } else {
    lightTheme();
  }

  localStorage.setItem(
    'theme',
    // JSON.stringify(themeColor),
    event.target.checked ? themeColor.dark : themeColor.light,
  );
}

function darkTheme() {
  document.body.classList.add(themeColor.dark);
  document.body.classList.remove(themeColor.light);
}

function lightTheme() {
  document.body.classList.add(themeColor.light);
  document.body.classList.remove(themeColor.dark);
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  // const parsedTheme = JSON.parse(savedTheme);
  document.body.classList.add(savedTheme);

  switchRef.checked = savedTheme;
}
