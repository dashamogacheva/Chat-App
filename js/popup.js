export const popupWork = () => {
    const popupSettings = document.querySelector('.popup-settings');
    const popupConfirmation = document.querySelector('.popup-confirmation');
    const popupAuthorization = document.querySelector('.popup-authorization');

    document.querySelector('.settings').addEventListener('click', () => {
        popupSettings.show();
    });

    document.querySelector('.close-settings').addEventListener('click', () => {
        popupSettings.close();
    });

    document.querySelector('.authorization').addEventListener('click', () => {
        popupAuthorization.show();
    });

    document.querySelector('.close-authorization').addEventListener('click', () => {
        popupAuthorization.close();
    })

    document.querySelector('.get-code').addEventListener('click', () => {
        popupAuthorization.close();
        popupConfirmation.show();
    });

    document.querySelector('.enter-code').addEventListener('click', () => {
        popupAuthorization.close();
        popupConfirmation.show();
    });

    document.querySelector('.close-confirmation').addEventListener('click', () => {
        popupConfirmation.close();
    });
}

export default popupWork;