const toggleBtn = document.createElement('button');

toggleBtn.innerHTML = 'Click me';
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

toggleBtn.addEventListener('click', () => {
  const introText = document.createElement('p');
  const introTextNode = document.createTextNode(
    'ACA just taught me about continuous integration and continuous deployment.'
  );
  introText.classList.add('intro-text');
  introText.appendChild(introTextNode);

  toggleBtn.insertAdjacentHTML('afterend', introText.innerHTML);
});
