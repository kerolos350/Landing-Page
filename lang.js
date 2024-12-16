var lang = navigator.languages

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

const langValue = getCookieValue('Lang');

if (langValue === '') {
    if (lang === 'ar') {
        setCookie('Lang', 'ar', 90);
    } else {
        setCookie('Lang', 'en', 90);
        window.location.href = './en';
    }
}if (langValue === 'en') {
    window.location.href = './en';
}