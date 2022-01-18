function changeFontStyle(e) {
    const text = document.querySelector('.box');
    if (e.target.id === 'bold') {
        e.target.classList.toggle('active');
        text.classList.toggle('bold');
    }
    if (e.target.id === 'italic') {
        e.target.classList.toggle('active');
        text.classList.toggle('italic');
    }
    if (e.target.id === 'color') {
        e.target.classList.toggle('active');
        text.classList.toggle('color');
    }
    if (e.target.id === 'sizeSmall') {
        e.target.classList.toggle('active');
        text.classList.toggle('sizeSmall');
    }
    if (e.target.id === 'sizeGreat') {
        e.target.classList.toggle('active');
        text.classList.toggle('sizeGreat');
    }
    if (e.target.id === 'clear') {
        e.target.classList.toggle('active');
        text.classList.toggle('clear');
    }
}
const btnAction = document.querySelector('.btnAction');
btnAction.addEventListener('click', changeFontStyle);