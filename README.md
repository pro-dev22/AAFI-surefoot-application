# AAFI-surefoot-application Task

<h2>Requirements</h2>
<ul>
  <li> Open your browser's Developer Tools Console </li>
  <li>Copy the provided code snippet</li>
  <li>Paste it into the Console and press Enter</li>
   <li>Observe changes on the product page</li>
</ul>

<h2><strong>Variation A: Confidence Booster Message</strong></h2>
Target URL: All product pages https://www.oxo.com/oxo-professional-5pc-starter-set.html

<br/><br/>
<b>Approach Explanation:</b><br/><br/>
<ol>
  <li><b>Targeted Insertion:</b> I identified the .pdp-promotional-block-wrapper as the anchor point to insert the message. Placing the new span before this block ensures it appears above the promotional content without disrupting the existing layout.</li><br/>
  <li><b>Smooth Appearance:</b> To avoid abrupt visual changes, I used CSS opacity with a transition for a subtle fade-in effect. The setTimeout ensures this triggers after a tiny delay, allowing the DOM to render the element first.</li><br/>
  <li><b>Unobtrusive Styling:</b> The message is styled to be subtle (small, gray, italic) so it complements the page rather than competing with primary content. The centered 50% width keeps it readable without overwhelming the space.</li><br/>
  <span>This approach prioritizes seamless integration while maintaining the page's existing structure and user experience.</span>
</ol>
<br/><br/>
<h2><b>Code:</b></h2><br/>
const messageSpan = document.createElement('span');<br/>
messageSpan.className = 'oxo-kitchen-message';<br/>
messageSpan.textContent = "OXO products are used in over 10 million kitchens. You're in good company!";<br/>

const promoBlock = document.querySelector('.pdp-promotional-block-wrapper');<br/>

if (promoBlock) {<br/>
  promoBlock.parentNode.insertBefore(messageSpan, promoBlock);<br/>
  const style = document.createElement('style');<br/>
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
  `;<br/>
  document.head.appendChild(style);<br/>
  setTimeout(() => {<br/>
    messageSpan.classList.add('show');<br/>
  }, 50);
}
<br/><br/>


<h2><strong>Variation B: The Easter Egg Surprise</strong></h2>
Target URL: All product pages https://www.oxo.com/oxo-pop-20-piece-pop-container-set.html
<br/><br/>
<b>Approach Explanation for GIF Easter Egg:</b><br/><br/>
<ol>
  <li><b>Trigger Mechanism:</b>The GIF is revealed after 5 hovers on the "Add to Cart" button, creating a fun, unexpected interaction. This ensures it doesn’t distract users immediately but rewards engagement.</li><br/>
  <li><b>Smooth Animation & Dismissal:</b> The GIF appears with a fade-in + slide-up animation (using opacity and transform) for a polished feel.It can be dismissed by clicking the GIF or adding to cart, ensuring it doesn’t linger unnecessarily.</li><br/>
  <li><b>Unobtrusive Styling:</b> The GIF is centered, width-constrained, and shadowed for visual appeal without breaking layout.A subtle hover scale effect adds interactivity, while max-height: 0 hides it cleanly when inactive.</li><br/>
  <span>This approach balances playfulness with usability—delighting users without disrupting core functionality.</span>
</ol>
<br/><br/>
<h2><b>Code:</b></h2><br/>

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
      e.stopPropagation(); // Prevent potential double triggers
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
<br/><br/>




<h2><strong>Variation C: Recommended Products</strong></h2>
Target URL: Exactly https://www.oxo.com/oxo-good-grips-12-piece-smart-seal-glass-container-set.html
<br/><br/>
<b>Approach Explanation for Product Recommendations Section</b><br/><br/>
<ol>
  <li><b>Insertion Point:</b> The section is dynamically added before the .m-product__ugc element, ensuring it appears in a logical, high-visibility location without disrupting existing content.</li><br/>
  <li><b>Grid System:</b> Uses a responsive 3-column grid (shifting to 2-column on tablets, 1-column on mobile) to showcase products cleanly while adapting to screen sizes.</li><br/>
    <li><b>Visual Hierarchy:</b> The bold "You Might Also Like" heading (left-aligned on desktop, centered on mobile) immediately communicates the section's purpose.</li><br/>
    <li><b>API Integration:</b> Fetches only 3 recommendations via Algolia to minimize load time.</li>
</ol>
<br/><br/>
<h2><b>Code:</b></h2><br/>


const style = document.createElement('style');
style.textContent = `
  .oxo-recommendations {
    padding: 20px 0;
    clear: both;
max-width: 1440px;
margin: 40px auto;
  }
  .oxo-recommendations h3 {
    font-size: 40px;
    margin-bottom: 40px;
    color: Black;
    font-weight: 600;
    text-align: left;
    padding-left: 8rem;
  }
  .oxo-recommendations-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .oxo-recommended-product {
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    padding: 15px;
    transition: all 0.3s ease;
  }
  .oxo-recommended-product:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  }
  .oxo-recommended-image-container {
    height: 220px; /* Increased image container size */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
  .oxo-recommended-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s;
  }
  .oxo-recommended-product:hover .oxo-recommended-image {
    transform: scale(1.05);
  }
  .oxo-recommended-info {
    text-align: center;
    padding: 0 4rem;
  }
  .oxo-recommended-name {
    font-size: 16px;
    color: #333;
    margin-bottom: 12px;
    font-weight: 600;
    line-height: 1.3;
  }
  .oxo-recommended-price {
    font-size: 18px;
    color: #d32f2f;
    margin-bottom: 15px;
    font-weight: bold;
  }
  .oxo-recommended-link {
    display: inline-block;
    padding: 10px 15px;
    background-color: #333;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 18px;
    transition: background-color 0.3s;
width: 100%;
  }
  .oxo-recommended-link:hover {
    background-color: #555;
  }
@media (max-width: 1250px){
.oxo-recommendations h3{
padding-left: 3rem;
}
.oxo-recommendations-grid{
width: 95%;
}
}

  @media (max-width: 768px) {
    .oxo-recommendations-grid {
      grid-template-columns: 1fr 1fr;
      width: 95%;
    }
.oxo-recommendations h3{
    font-size: 35px;
    margin-bottom: 35px;
   padding-left: 2rem
}
    .oxo-recommended-image-container {
      height: 180px;
    }
  }
@media (max-width: 480px){
  .oxo-recommendations-grid {
      grid-template-columns: 1fr;
      width: 100%;
    }
.oxo-recommendations h3{
    font-size: 30px;
        text-align: center;
    padding-left: 0rem;
}
}



`;
document.head.appendChild(style);

function createRecommendationSection(products) {
  const section = document.createElement('div');
  section.className = 'oxo-recommendations';
  
  const title = document.createElement('h3');
  title.textContent = 'You Might Also Like';
  section.appendChild(title);
  
  const grid = document.createElement('div');
  grid.className = 'oxo-recommendations-grid';
  
  products.slice(0, 3).forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'oxo-recommended-product';
    productElement.innerHTML = `
      <div class="oxo-recommended-image-container">
        <img src="${product.image_url}" alt="${product.name}" class="oxo-recommended-image">
      </div>
      <div class="oxo-recommended-info">
        <div class="oxo-recommended-name">${product.name}</div>
        <div class="oxo-recommended-price">$${product.price.USD.default}</div>
        <a href="${product.url}" class="oxo-recommended-link">View Details</a>
      </div>
    `;
    grid.appendChild(productElement);
  });
  
  section.appendChild(grid);
  return section;
}


async function fetchRecommendedProducts() {
  try {
    const response = await fetch('https://mvfvxhvmmt-dsn.algolia.net/1/indexes/*/recommendations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Algolia-API-Key': 'ab2c55cb9b5c14cc40a50f16dde51a90',
        'X-Algolia-Application-ID': 'MVFVXHVMMT'
      },
      body: JSON.stringify({
        "requests": [{
          "indexName": "magento2_prod_oxooxo_products",
          "objectID": "5632",
          "model": "related-products",
          "maxRecommendations": 3,
          "threshold": 0
        }]
      })
    });
    const data = await response.json();
    return data.results[0].hits;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return null;
  }
}

async function addRecommendationSection() {
  const targetElement = document.querySelector('.m-product__ugc');
  if (!targetElement) return;
  
  const products = await fetchRecommendedProducts();
  if (!products || products.length === 0) return;
  
  const section = createRecommendationSection(products);
  targetElement.parentNode.insertBefore(section, targetElement);
}


addRecommendationSection();


