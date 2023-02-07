const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail,
    password,
  };

  mail === "" || password === ""
    ? alert("Всі поля повинні бути заповнені!")
    : event.currentTarget.reset();

  console.log(formData);
}
