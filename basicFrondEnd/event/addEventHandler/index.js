//handler onload
const welcome = ()=>{
    alert('Hello Ini adalah Alert')
    const content = document.querySelector('.contents')
    content.removeAttribute('hidden')
}

const increment = ()=>{
  const count = document.getElementById('count').innerText++;
    if (count == 7) {
      const hiddenMessage = document.createElement("h4");
      hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";
      const image = document.createElement("img");
      image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");
      const contents = document.querySelector(".contents");
      contents.appendChild(hiddenMessage).appendChild(image);
    }
}

// document.getElementById('incrementButton').onclick = increment
//memberikan loading pada web dan menjalankan function ini ketika di load pertama kali
// document.body.onload = welcome

window.addEventListener('load', welcome)
document.getElementById("incrementButton").addEventListener('click', increment)