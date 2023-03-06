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