function validatePasswords(event) {
    var pass1 = document.getElementById('password').value;
    var pass2 = document.getElementById('confirm-password').value;
    var p = document.getElementById('passdmc');

    if (pass1 !== pass2) {
        p.textContent = 'Passwords Do Not Match.';
        event.preventDefault(); 
    } else {
        p.textContent = '';
        window.location.href = 'index.html';
        event.preventDefault();
    }
}

document.querySelector('.signup-form').addEventListener('submit', validatePasswords);