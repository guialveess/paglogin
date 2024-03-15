document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm(signUpForm);
    });

    signInForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm(signInForm);
    });

    function validateForm(form) {
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');
        const phoneInput = form.querySelector('input[type="tel"]');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const phone = phoneInput.value.trim();

        if (name === '') {
            alert('Por favor, preencha o campo Nome.');
            nameInput.focus();
            return;
        }

        if (email === '' || !isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            emailInput.focus();
            return;
        }

        if (password === '') {
            alert('Por favor, preencha o campo Senha.');
            passwordInput.focus();
            return;
        }

        if (phone === '' || !isValidPhone(phone)) {
            alert('Por favor, insira um número de telefone válido.');
            phoneInput.focus();
            return;
        }

        // Se todos os campos estiverem preenchidos corretamente, exiba uma mensagem de confirmação.
        alert('Inscrição realizada com sucesso!');
        form.reset();
    }

    function isValidEmail(email) {
        // RegEx para validar o formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        // RegEx para validar número de telefone com pelo menos 9 dígitos
        const phoneRegex = /^\d{9,}$/;
        return phoneRegex.test(phone);
    }
});
