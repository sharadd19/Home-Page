document.title = "Sharad Patel"
// Click on download CV button to download my CV
const cvButton = document.querySelector('.my-cv');
cvButton.addEventListener('click', () => {
    window.open('Sharad Patel CV.pdf', "_blank");
});