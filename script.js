var sun = document.getElementById('sun')
var moon = document.getElementById('moon')
var ball = document.getElementById('themeBall')
var theme = document.getElementById('theme')

function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
}

function changeLang(l) {
    window.location.href = './en'
    setCookie('Lang', 'en', 90);
}

function changeTheme() {
    if (themeValue === 'dark') {
        setCookie('theme', 'light', 90);
        css.setAttribute('href', 'style.css');
    }if (themeValue === 'light') {
        setCookie('theme', 'dark', 90);
        css.setAttribute('href', 'dark-style.css');
    }
}