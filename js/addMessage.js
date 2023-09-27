import cookies from "./utils/cookies";
import socketConnect from './socketConnect'

const messageAdd = () => {
    const formEntry = document.querySelector('.form-entry');
    const messenger = document.querySelector('.messenger');
    const templateSendMessage = document.querySelector('#template-message');
    const inputMessage = document.querySelector('.input-message');

    formEntry.addEventListener('submit', e => {
        e.preventDefault();
        if (inputMessage.value === '') {
            alert('Введите сообщение!');
        } else {
            addMessage(inputMessage.value);
            socketConnect(inputMessage.value);
            inputMessage.value = '';
        }
    });

    function addMessage(inputMessage) {
        const cloneTemplateMessage = templateSendMessage.content.cloneNode(true);
        cloneTemplateMessage.querySelector('.user-name').textContent = cookies.read('name') + ":";
        cloneTemplateMessage.querySelector('span').textContent = inputMessage;
        let time = new Date();
        cloneTemplateMessage.querySelector('.time-sent').textContent = time.getHours() + ':' + time.getMinutes();
        messenger.appendChild(cloneTemplateMessage);
        messenger.scrollTop = messenger.scrollHeight;
    }
}

export default messageAdd;