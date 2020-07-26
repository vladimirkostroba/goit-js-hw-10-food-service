const themeColor = {
  dark: 'dark-theme',
  light: 'light-theme',
};

const switchRef = document.querySelector('.js-switch-input');

switchRef.addEventListener('change', handleSwitchChange);

function handleSwitchChange(event) {
  if (event.target.checked) {
    changeTheme(themeColor.dark, themeColor.light);
  } else {
    changeTheme(themeColor.light, themeColor.dark);
  }

  localStorage.setItem(
    'theme',
    event.target.checked ? themeColor.dark : themeColor.light,
  );
}

function changeTheme(newTheme, oldTheme) {
  document.body.classList.add(themeColor.dark);
  document.body.classList.remove(themeColor.light);
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.classList.add(savedTheme);

  switchRef.checked = savedTheme === themeColor.dark;
}
