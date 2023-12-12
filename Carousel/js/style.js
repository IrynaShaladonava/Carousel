document.addEventListener('DOMContentLoaded', function () {
    
    // получаю данные из api
    fetch('https://strangerthings-quotes.vercel.app/api/quotes/50')
        .then(response => response.json())
        .then(data => {
            // элементы для карусели 
            const carouselIndicators = document.querySelector('.carousel-indicators');
            const carouselInner = document.querySelector('.carousel-inner');

            
            data.forEach((quote, index) => {
                // кнопка карусели
                const indicator = document.createElement('button');
                indicator.setAttribute('type', 'button');
                indicator.setAttribute('data-bs-target', '#carouselExampleDark');
                indicator.setAttribute('data-bs-slide-to', index.toString());
                if (index === 0) {
                    indicator.classList.add('active');
                }

                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (index === 0) {
                    carouselItem.classList.add('active');
                }

                // создаю div для карусели и заполняю его
                carouselItem.innerHTML = `
                    <div class="carousel-caption d-none d-md-block text-left align-items-start">
                    
                        <div class="d-flex align-items-start">
                        <img src="img/344_large.jpg" alt="">
                        <h5><i class="fa-solid fa-quote-left"></i>${quote.quote}</h5></div>
                        <p>— ${quote.author}</p>
                        
                    </div>
                `;

                carouselIndicators.appendChild(indicator);
                carouselInner.appendChild(carouselItem);
            });
        })
        .catch(error => console.error('Error fetching quotes:', error));
});