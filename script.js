document.addEventListener('DOMContentLoaded', () => {
    const passwordOutput = document.getElementById('passwordOutput');
    const passwordLength = document.getElementById('passwordLength');
    const lengthValue = document.getElementById('lengthValue');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');

    passwordLength.addEventListener('input', () => {
        lengthValue.textContent = passwordLength.value;
    });

    function generatePassword() {
        let charset = '';
        if (includeUppercase.checked) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase.checked) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers.checked) charset += '0123456789';
        if (includeSymbols.checked) charset += '!@#$%^&*()_+{}[]|:;<>,.?/~`';

        let password = '';
        for (let i = 0; i < passwordLength.value; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        passwordOutput.value = password;
    }

    generateBtn.addEventListener('click', generatePassword);

    copyBtn.addEventListener('click', () => {
        passwordOutput.select();
        document.execCommand('copy');
        alert('Senha copiada para a área de transferência!');
    });

    // Gerar senha inicial
    generatePassword();
});