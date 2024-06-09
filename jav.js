// function validasiNama() {

//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// };

function f(){

}

function get() {
  const gen3 = myForm.sel[myForm.sel.selectedIndex].text;
  
}

function submit() {
  let x = document.getElementById("nama");
  const date = document.getElementById("date");
  const emails = document.getElementById("email");
  // const nim2 = nim.value.toString().length;
   const gen = document.querySelector("#gen").value;
  const nomor = document.getElementById("tel").value;
  const alamat = document.getElementById("alamat").value;

  const email = "gmail.com";
  var validasiHuruf = /^[a-zA-Z ]+$/;

  var validnmr = /^[0-9]+$/;



  if (x.value == "" || date.value == "" || emails.value=="" || gen == "" || nomor == "" || alamat == "") {
    alert("Form tidak boleh ada yang kosong");
  } else if (!x.value.match(validasiHuruf)) {
    alert("Nama harus dengan huruf");
  
  } else if (!emails.value.endsWith(email)) {
    alert('Format email harus " gmail.com "');
  } else if (myForm.sel.selectedIndex == 0) {
    alert("Silahkan Pilih Jenis kelamin");
  } else if(!nomor.match(validnmr)){
    alert("Nomor harus dengan angka");
  }else {
    alert("Anda Berhasil mendaftar");
    alert("Hi, selamat datang "+x.value);
    alert("Berikut adalah data anda : \nNama                : "+x.value+
                                     "\nTanggal lahir     : "+date.value+
                                     "\nEmail                 : "+emails.value+
                                     "\nJenis Kelamin    : "+gen+
                                     "\nNo telpon         : "+nomor+
                                     "\nAlamat              : "+alamat )
  } 


}

form.addEventListener("submit", (e) => {
  submit();

  e.preventDefault();
});
