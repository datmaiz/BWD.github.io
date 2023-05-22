let signUp = document.getElementById("signUp");
let formSignIn = document.getElementById("form__signin");
let formSignUp = document.getElementById("form__signup");
let signInButton = document.getElementById('signIn');
signUp.addEventListener('click', () => {
    formSignIn.classList.add('move');
    formSignUp.classList.add('back');
})
signInButton.addEventListener('click', () => {
    formSignIn.classList.remove('move');
    formSignUp.classList.remove('back');
})
signUp.onclick = function () {
    
}