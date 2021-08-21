const listContacts = document.querySelector('#myContact');
const myMessage = () => {
    listContacts.classList.toggle('show');
};

const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');

const hover = (e) => {
    if (e === "phone") {
        line1.style.background = "transparent";
        line2.style.background = "white";
        line3.style.background = "white";
    }
    if (e === "zalo") {
        line1.style.background = "transparent";
        line2.style.background = "transparent";
        line3.style.background = "white";
    }
    if (e === "messenger") {
        line1.style.background = "white";
        line2.style.background = "transparent";
        line3.style.background = "transparent";
    }
    if (e === "mess") {
        line1.style.background = "white";
        line2.style.background = "white";
        line3.style.background = "transparent";
    }
}