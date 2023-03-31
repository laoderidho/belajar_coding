import '../style/style.css'
import '../components/header-bar.js'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faFilm, faStar} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'

library.add(faMagnifyingGlass, faFilm, faStar);
dom.watch(); 

const dataFilm = async ()=>{
    const data = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c417d4a10d201b2fe39a3957368d2c1d')
                .then(res=> res.data.results)
                .catch(err=> console.log(err))
    return data
}

const displayFilm = async ()=>{
    const getData =  await dataFilm()
    let displayData = ''
    for(let data of getData){
        displayData += ` <section class="dataSection">
                                <img src='https://image.tmdb.org/t/p/original${data.poster_path}' alt="">
                                <p class="title">${data.title}</p>
                                <p class="year"> ${data.release_date} </p>
                                <p class="rating"><i class="fas fa-star"></i>${data.vote_average}</p>
                        </section>`;
    }
    setTimeout(()=>{
        document.getElementById("DataFilm").innerHTML = displayData;

     Array.from(document.querySelectorAll(".dataSection"))
            .map(item =>{
                item.addEventListener('click', async ()=>{
                    console.log(alert('Ini Hanya Demo'))
                })
            })
    }, 600)
}

document.getElementById('search').addEventListener('submit', (e)=>{
    e.preventDefault()
    const inputLabel = document.getElementById('input-search').value.toLowerCase()
    let conditionSearch = false;

        Array.from(document.querySelectorAll(".dataSection"))
            .map(item=> {
                const getItem = item.children[1].textContent.toLowerCase()

                if(getItem.indexOf(inputLabel)!=-1){
                    item.style.display ='block'
                    conditionSearch = true
                }else{
                    item.style.display = 'none'
                }
            })
        if(conditionSearch){
              document.getElementById('titleSearch').innerHTML = inputLabel === '' ? `<span>|</span>Film`:`<span>|</span> hasil dari ${inputLabel}` 
        }else{
            document.getElementById('titleSearch').innerHTML =`<span><i class="fas fa-magnifying-glass"></i></span>${inputLabel} tidak Ditemukan`
        }
})

document.addEventListener('DOMContentLoaded', displayFilm)
