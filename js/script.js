const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal-image');
const modalText = document.querySelector('.modal-text');
const images = document.querySelectorAll('.clickable-image');
const closeButton = document.getElementById('close-button');
const body = document.body;

// Добавляем обработчики событий для всех изображений
images.forEach((image) => {
    image.addEventListener('click', () => {
        const imgSrc = image.src; // Получаем источник изображения
        const description = image.dataset.description; // Получаем описание из data-атрибута

        // Устанавливаем значения в модальное окно
        modalImage.src = imgSrc;
        modalText.textContent = description;

        // Отображаем модальное окно
        modal.style.display = 'flex';
        body.classList.add('blurred');
    });
});

// Закрыть модальное окно
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    body.classList.remove('blurred');
});