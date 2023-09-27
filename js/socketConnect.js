import cookies from "./utils/cookies";

function socketConnect(textMessage) {
    const token = cookies.read('token');
    const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);

    socket.onopen = function () {
        socket.send(JSON.stringify({text: `${textMessage}`}));
        socket.onmessage = function (event) {
            console.log(event.data)
        };
    };

    socket.onclose = function (event) {
        alert(`Соединение с сервером закрыто, код=${event.code} причина=${event.reason}`);
    };

    socket.onerror = function (error) {
        alert(`Ошибка сокета ${error}`);
    };
}

export default socketConnect;