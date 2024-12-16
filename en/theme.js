var pageTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
var css = document.getElementById('theme')

function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/`;
}

function getCookieValue(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

const themeValue = getCookieValue('theme');

if (themeValue === null) {
    if (pageTheme === true) {
        setCookie('theme', 'dark', 90);
        css.setAttribute('href', 'dark-style.css');
    } if (pageTheme === false) {
        setCookie('theme', 'light', 90);
        css.setAttribute('href', 'style.css');
    }
};

if (themeValue === 'dark') {
    css.setAttribute('href', 'dark-style.css');
} if (themeValue === 'light') {
    css.setAttribute('href', 'style.css');
}