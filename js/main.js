import changeName from "./changeName";
import messageAdd from "./addMessage";
import authorization from "./authorization";
import popupWork from "./popup";
import showHistoryMessage from "./getHistoryOfMessage";
import scroll from "./expr";

document.addEventListener('DOMContentLoaded', () => {
    popupWork();
    authorization();
    showHistoryMessage();
    scroll();
    changeName();
    messageAdd();
});