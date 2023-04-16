import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css'



//hamburger menu toogle 
document.querySelector('#hamburger-menu').addEventListener('click', ()=>{
    const getNav = document.querySelector('.nav-item ul')
    getNav.classList.toggle('hamburger-toogle')
})

// event scroll 
document.addEventListener('scroll', ()=>{
    // scroll down
    if(window.scrollY > 200){
       const navbar =  document.querySelector('header > nav')
       navbar.style.backgroundColor = 'black'
    }else{
       const navbar = document.querySelector('header > nav')
       navbar.style.backgroundColor = 'transparent'
       home.classList.add("active");
    }
})

// active menu scroll
document.addEventListener('scroll', ()=>{
    if (window.scrollY > 300) {
      const home = document.querySelector("#home");
      home.classList.remove("active");
      const favorite = document.querySelector("#myFavorite");
      favorite.classList.add("active");
    }else{
        const home = document.querySelector("#home");
        home.classList.add("active");
        const favorite = document.querySelector("#myFavorite");
        favorite.classList.remove("active");
    }
})


//fecth Restourant
const Restourant = async () => {
    const response = await fetch('https://restaurant-api.dicoding.dev/list')
    .then(response => response.json())
    .then(responseJson =>responseJson.restaurants)
    .catch(error => console.log(error))
    return response
}


//fecth detail Restourant
const detailResto = async (id) => {
    const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`)
    .then(response => response.json())
    .then(responseJson => responseJson.restaurant)
    return response
}

//get detail resto
const getDetailResto = async (id) => {
  const detail = await detailResto(id);
  const modal = document.querySelector(".modal-content");
  modal.innerHTML = ` 
        <img src="https://restaurant-api.dicoding.dev/images/medium/${detail.pictureId}" alt=" gambar dari ${detail.name}">
                <div class="modal-item">
                    <h1 tabindex="0">${detail.name}</h1>
                    <br><br>
                    <h3 tabindex="0" ><i class="fas fa-location-dot"></i> ${detail.address} kota ${detail.city}</h3>
                    <br><br>
                    <h4>Description:</h4>
                    <br>
                    <p>${detail.description}</p>
                    <button aria-label="close" class="close-modal"><i class="fas fa-close"></i></button>
        </div>
    `;
  return modal;
};


//get data Restourant
const dataResto = async () => {
    const data = await Restourant()
    const listResto = document.querySelector('.card')
    data.map((resto) => {
      listResto.innerHTML += `
          <section class="card-content">
                    <img src="https://restaurant-api.dicoding.dev/images/medium/${resto.pictureId}" alt="gambar dari ${resto.name}">
                    <h1 class="location"> <i class="fas fa-location-dot"></i> ${resto.city}</h1>
                    <div class="card-item">
                        <h3><i class="fas fa-star"></i><span>${resto.rating}</span></h3>
                        <h1>${resto.name}</h1>
                        <button aria-label="${resto.name},  rating is ${resto.rating}, and restourant Description is ${resto.description}" class="detail" data-id="${resto.id}">Detail</button>
                    </div>
            </section>`;
    
        //open modal
        const detail = document.querySelectorAll(".detail");
        detail.forEach((btn) => {
            btn.addEventListener("click", async () => {
            const myModal = document.getElementById("modal");
            myModal.style.visibility = "visible";
            myModal.style.opacity = "1";
            myModal.style.transform = "translate(0)";
            myModal.style.transition = 'all 0.5s ease-in-out';
            await getDetailResto(btn.dataset.id);
            console.log(btn.dataset.id)
            });
        });
    })
}
    


//display data  Restourant
document.addEventListener('domcontentloaded', dataResto())

//close modal

window.addEventListener('click', (e) => {
    if(e.target == document.getElementById('modal') 
        || e.target == document.querySelector('.modal-content')
        || e.target == document.querySelector('.close-modal') 
        || e.target == document.querySelector('.close-modal i')){
       const myModal =  document.getElementById('modal')
           myModal.style.visibility = 'hidden'
           myModal.style.opacity = '0'
           myModal.style.transform = 'translateY(-100%)'
    }
})