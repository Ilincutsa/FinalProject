const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openPopupButtons.forEach(button => {
    button.addEventListener("click", () => {
        const popup = document.querySelector(button.dataset.popupTarget);
        openPopup(popup);
    })
})

closePopupButtons.forEach(button => {
    button.addEventListener("click", () => {
        const popup = button.closest('.popup');
        closePopup(popup);
    })
})

function openPopup(popup) {
    if(popup == null) return
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup(popup) {
    if(popup == null) return
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

closePopupButtons.forEach(button => {
    button.addEventListener("click", () => {
        const popup2 = button.closest('.popup2');
        closePopup(popup2);
    })
})

closePopupButtons.forEach(button => {
    button.addEventListener("click", () => {
        const popup3 = button.closest('.popup3');
        closePopup(popup3);
    })
})