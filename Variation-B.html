const gifContainer = document.createElement('div');
gifContainer.className = 'oxo-cooking-gif-easteregg';
gifContainer.innerHTML = `
  <img src="https://cdn.shopify.com/s/files/1/0687/2465/4280/files/Q52.gif?v=1750274175" 
       alt="Fun cooking animation" 
       style="width:100%;max-width:300px;margin:0 auto 20px;display:block;border-radius:8px;">
`;
gifContainer.style.cssText = `
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.4s ease;
  max-height: 0;
  overflow: hidden;
  text-align: center;
  position: relative;
  z-index: 10;
`;


const button = document.querySelector('button.pdp-add-to-cart');
const promoBlock = document.querySelector('.pdp-promotional-block-wrapper');

if (button && promoBlock) {
  let hoverCount = 0;
  
 
  promoBlock.parentNode.insertBefore(gifContainer, promoBlock);
  

  const hideGif = () => {
    gifContainer.style.maxHeight = '0';
    gifContainer.style.opacity = '0';
    gifContainer.style.transform = 'translateY(-10px)';
    gifContainer.style.marginBottom = '0';
    hoverCount = 0;
  };
  

  button.addEventListener('mouseenter', () => {
    if (hoverCount < 5) {
      hoverCount++;
      
      if (hoverCount === 5) {
        gifContainer.style.maxHeight = '500px';
        gifContainer.style.opacity = '1';
        gifContainer.style.transform = 'translateY(0)';
        gifContainer.style.marginBottom = '20px';
      }
    }
  });
  
  
  gifContainer.addEventListener('click', hideGif);
  
  
  button.addEventListener('click', (e) => {
    
    if (gifContainer.style.opacity === '1') {
      e.stopPropagation(); 
      hideGif();
    }
  });
  

  const style = document.createElement('style');
  style.textContent = `
    .oxo-cooking-gif-easteregg {
      cursor: pointer;
      width: 100%;
    }
    .oxo-cooking-gif-easteregg:hover img {
      transform: scale(1.02);
      transition: transform 0.2s ease;
    }
    .oxo-cooking-gif-easteregg img {
      transition: transform 0.2s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    @media (min-width: 768px) {
      .oxo-cooking-gif-easteregg {
        width: calc(100% - 96px);
        margin-left: auto;
        margin-right: auto;
      }
    }
  `;
  document.head.appendChild(style);
}
