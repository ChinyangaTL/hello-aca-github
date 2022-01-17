const toggleBtn = document.createElement('button');

toggleBtn.innerHTML = 'Show Text';
document.body.appendChild(toggleBtn);

toggleBtn.style.cssText = `
    border: none;
    padding: 1rem 2rem;
    background: #006BA6;
    color: #fff;
    font-size: 2rem;
    border-radius: 8px;
    display: block;
    margin-bottom: 1rem;
    cursor: pointer;
`;

toggleBtn.classList.add('toggle-btn');

let isTextShowing = false;

const text = document.querySelector('.intro-text');
const toggleText = () => {
  const str = 'hello';

  if (isTextShowing) {
    toggleBtn.innerHTML = 'Show Text';
    text.style.cssText = `visibility: hidden`;
    isTextShowing = false;
    return;
  } else {
    toggleBtn.innerHTML = 'Hide Text';
    text.innerHTML = str;
    text.style.cssText = `visibility: visible`;
    isTextShowing = true;
    return;
  }

  // const introText = document.createElement('p');
  // if (!isTextShowing) {
  //   isTextShowing = true;
  //   console.log('text is not showing');
  //   introText.textContent = 'hello';
  //   introText.classList.add('intro-text');

  //   toggleBtn.insertAdjacentHTML('afterend', introText.textContent);
  //   console.log('it is now');
  // } else {
  //   console.log(document.body.childNodes);
  //   console.log(document.body.children);
};

toggleBtn.addEventListener('click', toggleText);
