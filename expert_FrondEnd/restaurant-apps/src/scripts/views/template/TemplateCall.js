import ConfigDataApi from '../../global/config';

const createCatalogTemplate = resto => `
         <section class="card-content">
                    <img src="${ConfigDataApi.ImageLink + resto.pictureId}" alt="gambar dari ${resto.name}">
                    <h1 class="location"> <i class="fas fa-location-dot"></i> ${resto.city}</h1>
                    <div class="card-item">
                        <h3><i class="fas fa-star"></i><span>${resto.rating}</span></h3>
                        <h1>${resto.name}</h1>
                        <button aria-label="${resto.name},  rating is ${resto.rating}, and restourant Description is ${resto.description}" class="detail" data-id="${resto.id}">Detail</button>
                    </div>
            </section>
    `;

export default createCatalogTemplate;
