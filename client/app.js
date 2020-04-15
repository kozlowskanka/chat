const loginForm = document.getElementById('welcome-form');
const messageSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

let userName ='';

loginForm.addEventListener('submit', function(event) {
    login(event);
});

const login = event => {
    event.preventDefault();
    if(userNameInput.value == '') {
        alert('what is your login?');
    } else {
        userName = username.value;
        loginForm.classList.remove('show');
        messageSection.classList.add('show');
    }
};

