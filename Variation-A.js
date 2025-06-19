const messageSpan = document.createElement('span');
messageSpan.className = 'oxo-kitchen-message';
messageSpan.textContent = "OXO products are used in over 10 million kitchens. You're in good company!";


const promoBlock = document.querySelector('.pdp-promotional-block-wrapper');

if (promoBlock) {

  promoBlock.parentNode.insertBefore(messageSpan, promoBlock);
  

  const style = document.createElement('style');
  style.textContent = `
    .oxo-kitchen-message {
      display: block;
      font-size: 13px;
      color: #666;
      text-align: center;
      margin: 10px auto -25px;
      font-style: italic;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      line-height: 1.4;
      width: 50%;
    }
    .oxo-kitchen-message.show {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
  
  
  setTimeout(() => {
    messageSpan.classList.add('show');
  }, 50);
}
