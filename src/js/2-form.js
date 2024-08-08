// // Оголоси поза будь-якими функціями об’єкт formData з полями email та message,
//  які спочатку мають порожні рядки як значення: { email: "", message: "" }.
// // Використовуй метод делегування для відстеження змін у формі через подію input.
//  Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт
//   у локальне сховище.Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі.
// Якщо так, використовуй їх для заповнення форми та об'єкта formData.
//  Якщо ні, залиш поля форми порожніми.
// // Перед відправленням форми переконайся, що обидва поля форми заповнені.
//  Якщо будь - яке з полів(властивостей об’єкта formData) порожнє,
//     показуй сповіщення з текстом «Fill please all fields».
//     Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями,
//     очисти локальне сховище, об’єкт formData і поля форми.

let formData = { email: '', message: '' };

const feedbackFormInput = document.querySelector('.js-feedback-form');

const localStorageChek = () => {
  const dataFromLs = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (dataFromLs === null) {
    return;
  }

  formData = dataFromLs;

  for (const key in dataFromLs) {
    feedbackFormInput.elements[key].value = dataFromLs[key];
  }
};
localStorageChek();

const onFormFieldInput = event => {
  const inputName = event.target.name;
  const inputValue = event.target.value;

  //   console.log(`${inputName}: ${inputValue}`);
  formData[inputName] = inputValue;
  //   console.log(formData);

  window.localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
const onFormFieldSubmit = event => {
  event.preventDefault();
  if (formData.email.length <= 0 || formData.message.length <= 0) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
  }
  event.target.reset();
  window.localStorage.removeItem('feedback-form-state');
};
feedbackFormInput.addEventListener('input', onFormFieldInput);
feedbackFormInput.addEventListener('submit', onFormFieldSubmit);
