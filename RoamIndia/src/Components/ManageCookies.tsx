const setCookie = (name: string, value: string, daysToExpire: number) => {
    const date = new Date()
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000)
    const expire = "expires=" + date.toUTCString()
    document.cookie = `${name}=${value};${expire};path=/`
}

const deleteCookie = (name: string) => {
    document.cookie = `${name}=deleted;expires=Thu, 18 Dec 2013 12:00:00 UTC;path=/`
}

const getCookie = (name: string) => {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    cArray.forEach((elem) => {
        if (elem.indexOf(name) == 0) {
            result = elem.substring(name.length + 1);
        }
    });
    return result;
};

export { setCookie, deleteCookie, getCookie }