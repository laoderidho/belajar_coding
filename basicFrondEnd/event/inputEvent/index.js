
document.addEventListener('DOMContentLoaded', ()=>{
  const inputMaxLength = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLength;

  //event OnInput
  //event Input akan di jalankan setiap user memberikan input
  document.getElementById("inputNama").addEventListener("input", () => {
    const JumlahCharKetik = document.getElementById("inputNama").value.length;
    const jumlahCharMax = document.getElementById("inputNama").maxLength;

    console.log("Jummlah Karakter di ketik", JumlahCharKetik);
    console.log("jumlah Karakter Maksimal", jumlahCharMax);

    const sisaChar = jumlahCharMax - JumlahCharKetik;
    document.getElementById("sisaKarakter").innerText = sisaChar

    if (sisaChar === 0) {
      document.getElementById("sisaKarakter").innerText = "Batas Maksimal";
    } else if (sisaChar <= 5) {
      document.getElementById("notifikasiSisaKarakter").style.color = "red";
    } else {
      document.getElementById("notifikasiSisaKarakter").style.color = "black";
    }
  });

  //event Onfocus
  // event akan di jalankan saat di klik/centang 
  document.getElementById("inputNama").addEventListener("focus", ()=>{
    console.log('input Nama: focus')
    document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
  })

  // event onBlur
  //event akan di jalankan saat di tinggalkan / klik di bagian lain input
  document.getElementById("inputNama").addEventListener("blur", () => {
    console.log("input Nama: focus");
    document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
  });

  // onChange event
  // apabila sebuah input di tekan enter maka program ini akan di jalankan
  document.getElementById("inputCaptcha").addEventListener('change', ()=>{
    console.log('inputChapta: change')
    const InputChapt = document.getElementById("inputCaptcha").value

    const submit = document.getElementById("submitButton")

    if(InputChapt === 'PRNU'){
      submit.removeAttribute("disabled");
    }else{
      submit.setAttribute("disabled", "");
    }
  })

  document.getElementById("formDataDiri").addEventListener('submit', (event)=>{
       const InputChapt = document.getElementById("inputCaptcha").value;

        if (InputChapt === "PRNU") {
          alert('selamat Anda lolos')
        } else {
          alert('coba ulangi lagi')
          document.getElementById("submitButton").setAttribute("disabled", "");
        }
        event.preventDefault()
  })

  // oncopy event
  document.getElementById('inputCopy').addEventListener('copy', ()=>{
    alert('anda men copy teks ini')
  })

  // onPaste Event
  document.getElementById("inputPaste").addEventListener('paste', ()=>{
    alert('anda copas di sini')
  })
})