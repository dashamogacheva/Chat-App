import cookies from "./utils/cookies";

const showHistoryMessage = () => {

    if (cookies.read('name')) {
        getHistoryMessage();
    }

    async function getHistoryMessage() {
        const token = cookies.read('token');
        try {
            const response = await fetch('https://edu.strada.one/api/messages/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const historyMessage = await response.json();
                console.log(historyMessage);

                const allMessage = historyMessage.messages.reverse();
                renderHistoryMessage(allMessage.slice(-20), true);
                scrollHistory(allMessage);
            }
        } catch (error) {
            alert(error);
        }
    }


    const messenger = document.querySelector('.messenger');
    let page = 1;

    function scrollHistory(allMessage) {
        messenger.addEventListener('scroll', function () {
            if (messenger.scrollTop === messenger.scrollHeight - messenger.scrollHeight) {

                renderHistoryMessage(allMessage.slice((page * (-20)), -20));
                 // messenger.scrollTop = messenger.scrollTop - messenger.scrollHeight;
                page++;

                console.log(page)
                if (page === 14) {
                    alert('Вся история загружена');
                }
            }
        });
    }

    function renderHistoryMessage(allMessage, append) {
        const templateSendMessage = document.querySelector('#template-message');
        allMessage.forEach(elem => {
            let cloneTemplateMessage = templateSendMessage.content.cloneNode(true);
            cloneTemplateMessage.querySelector('.user-name').textContent = elem.user.name + ":";
            cloneTemplateMessage.querySelector('span').textContent = elem.text;
            let time = new Date(elem.createdAt);
            cloneTemplateMessage.querySelector('.time-sent').textContent = time.getHours() + ':' + time.getMinutes();
            if (append) {
                messenger.append(cloneTemplateMessage);
                messenger.scrollTop = messenger.scrollHeight;
            } else {
                messenger.prepend(cloneTemplateMessage);
            }
        })
    }
}

export default showHistoryMessage;