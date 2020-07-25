const themeColor = {
  dark: 'dark-theme',
  light: 'light-theme',
};

const switchRef = document.querySelector('.js-switch-input');
console.log(switchRef);

switchRef.addEventListener('change', handleSwitchChange);

function handleSwitchChange(event) {
  if (event.target.checked) {
    darkTheme();
  } else {
    lightTheme();
  }
}

function darkTheme() {
  document.body.classList.add(themeColor.dark);
  document.body.classList.remove(themeColor.light);
}

function lightTheme() {
  document.body.classList.add(themeColor.light);
  document.body.classList.remove(themeColor.dark);
}
