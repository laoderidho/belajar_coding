const customEvent = new Event("customEvent")
const tombol = document.getElementById('tombol')

tombol.addEventListener("customEvent", ()=>{
  console.log('custom event is trigerd')
});
