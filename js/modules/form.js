const form = document.getElementById('contact');
const emailForm = document.getElementById('email-address');
const emailError = document.querySelector('.form-error');
const formBtn = document.querySelector('.form-btn');
const nameFormInput = document.getElementById('full-name');
const msgFormInput = document.getElementById('message');

const storageData = (object) => {
  localStorage.setItem('localStorageObj', JSON.stringify(object));
};

function validateEmail(email) {
  if (!email.checkValidity()) {
    emailError.classList.remove('error-visible');
    return false;
  }
  emailError.classList.add('error-visible');
  return true;
}

formBtn.addEventListener('click', () => {
  validateEmail(emailForm);
});

function displayData() {
  const data = JSON.parse(localStorage.getItem('localStorageObj')) || { name: '', msg: '', email: '' };
  nameFormInput.value = data.name;
  msgFormInput.value = data.msg;
  emailForm.value = data.email;
}

function formListener() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateEmail(emailForm)) {
      form.submit();
    }
  });

  nameFormInput.addEventListener('input', () => {
    const nameValue = nameFormInput.value;
    const msgValue = msgFormInput.value;
    const emailValue = emailForm.value;
    const localStorageObj = {
      name: nameValue,
      msg: msgValue,
      email: emailValue,
    };
    storageData(localStorageObj);
  });
  msgFormInput.addEventListener('input', () => {
    const nameValue = nameFormInput.value;
    const msgValue = msgFormInput.value;
    const emailValue = emailForm.value;
    const localStorageObj = {
      name: nameValue,
      msg: msgValue,
      email: emailValue,
    };
    storageData(localStorageObj);
  });
  emailForm.addEventListener('input', () => {
    const nameValue = nameFormInput.value;
    const msgValue = msgFormInput.value;
    const emailValue = emailForm.value;
    const localStorageObj = {
      name: nameValue,
      msg: msgValue,
      email: emailValue,
    };
    storageData(localStorageObj);
  });
}

export { formListener, displayData };
