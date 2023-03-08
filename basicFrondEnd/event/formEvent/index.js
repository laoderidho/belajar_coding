const getPass = ()=>{
    const changePass = document.getElementById('pass')
    if (changePass.getAttribute('type')==='password') {
      changePass.removeAttribute("type", "password");
      changePass.setAttribute("type", "text");
    }else{
         changePass.removeAttribute("type", "text");
         changePass.setAttribute("type", "password");
    }
}

const getPassTrigerd = document.getElementById('getTampil')
.addEventListener('click', getPass)

const getForm = document.getElementById('getForm')
.addEventListener('submit', (event)=>{
  const getName = document.getElementById('name').value
  const getPassword = document.getElementById('pass').value
  const getOuput = `hello ${getName} your password is ${getPassword}`
  document.getElementById("tesDiv").innerHTML = getOuput;
  event.preventDefault();
})

