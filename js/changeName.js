import cookies from "./utils/cookies";

const changeName = () => {

    const userNameForm = document.querySelector('.nickname-form');
    const userName = document.querySelector('.enter-nickname');

    userNameForm.addEventListener('submit', e => {
        e.preventDefault();
        console.log(userName.value)
        const token = cookies.read('token');
        console.log(token);
        nameChange(userName.value, token);
    });

    async function nameChange(newName, token) {
        if (newName.length <= 2) {
            alert('Ваше имя слишком короткое. Минимум 2 символа');
        } else {
            try {
                const url = `https://edu.strada.one/api/user`;
                let data = await fetch(url, {
                    method: 'PATCH',
                    body: JSON.stringify({name: newName}),
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    }
                })
                if (data.ok) {
                    cookies.create('name', newName);
                    userName.value = '';
                    alert('Ваше имя изменено');
                    getName();
                }
            } catch (error) {
                alert(error);
            }
        }
    }

    async function getName() {
        const url = 'https://edu.strada.one/api/user/me'
        const promise = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${cookies.read('name')}`,
                "Content-Type": "text/html; charset=UTF-8",
            }
        })
        const result = await promise.json()
        console.log(result);
    }
}

export default changeName;