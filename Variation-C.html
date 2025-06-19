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
