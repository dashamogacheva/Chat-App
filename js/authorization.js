import cookies from "./utils/cookies";

const authorization = () => {
    const getCodeBtn = document.querySelector('.get-code');
    getCodeBtn.addEventListener('click', getCode);

    async function getCode() {
        const userEmail = document.querySelector('.entry-field').value;
        if (userEmail === '') {
            alert('Введите электронную почту!');
        } else {
            let data = await fetch('https://edu.strada.one/api/user', {
                method: 'POST',
                body: JSON.stringify({email: userEmail}),
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(data => data.json())
                .catch(err => alert(err))
            console.log(data);
        }
    }

    const codeInput = document.querySelector('.entry-code');
    const formConfirmationCode = document.querySelector('.confirmation-code');
    const popupSettings = document.querySelector('.popup-settings');
    const popupConfirmation = document.querySelector('.popup-confirmation');

    formConfirmationCode.addEventListener('submit', e => {
        e.preventDefault();
        if (codeInput.value === '') {
            alert('Введите код!');
        } else {
            cookies.create('token', codeInput.value);
            popupConfirmation.close();
            popupSettings.show();
        }
    })
}

export default authorization;