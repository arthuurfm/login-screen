export default function newError(input) {
  let error = input.nextElementSibling;
  if (!error || !error.classList.contains('error')) {
    error = document.createElement('span');
    error.classList.add('error');
    input.insertAdjacentElement('afterend', error);
  }
  return error;
}