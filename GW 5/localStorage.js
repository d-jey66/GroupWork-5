function signup() {
    let inp1 = document.getElementById('name').value;
    let inp2 = document.getElementById('email').value;
    let inp3 = document.getElementById('password').value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name: inp1, email: inp2, password: inp3 });
    localStorage.setItem('users', JSON.stringify(users));
}

function validatePasswords(event) {

        let inp4 = document.getElementById('email').value;
        let inp5 = document.getElementById('password').value;
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let found = users.find(user => user.email === inp4 && user.password === inp5);
    
        if (found) {
            window.location.href = 'loggedin-signedup.html';
            event.preventDefault();
        }
        else {
            alert('you are not signed up.');
            event.preventDefault();
        }
    }

document.querySelector('.login-form').addEventListener('submit', validatePasswords);