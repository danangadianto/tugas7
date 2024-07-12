var formMenu = document.getElementById("input-form");
formMenu.style.display = "none";

function editForm() {
  if (formMenu.style.display === "none") {
    formMenu.style.display = "block";
  } else {
    formMenu.style.display = "none";
  }

//   var name = document.getElementById("pName").innerHTML;
//   var role = document.getElementById("pRole").innerHTML;
//   var available = document.getElementById("pAvailable").innerHTML;
//   var usia = document.getElementById("pAge").innerHTML;
//   var lokasi = document.getElementById("pLocation").innerHTML;
//   var experience = document.getElementById("pExperience").innerHTML;
//   var email = document.getElementById("pEmail").innerHTML;

//   document.getElementById("inpName").value = name;
//   document.getElementById("inpRole").value = role;
//   document.getElementById("inpAvailability").value = available;
//   document.getElementById("inpUsia").value = usia;
//   document.getElementById("inpLokasi").value = lokasi;
//   document.getElementById("inpYears").value = experience;
//   document.getElementById("inpEmail").value = email;
}
// Kode yang saya ubah untuk menyimpan value form
function simpanForm() {
    var inpName = document.getElementById("inpName").value;
    var inpRole = document.getElementById("inpRole").value;
    var inpAvailability =  document.getElementById("inpAvailability").value;
    var inpUsia = document.getElementById("inpUsia").value;
    var inpLokasi = document.getElementById("inpLokasi").value;
    var inpYears = document.getElementById("inpYears").value;
    var inpEmail = document.getElementById("inpEmail").value;

    document.getElementById("pName").textContent = inpName;
    document.getElementById("pRole").textContent = inpRole;
    document.getElementById("pAvailable").textContent = inpAvailability;
    document.getElementById("pAge").textContent = inpUsia;
    document.getElementById("pLocation").textContent = inpLokasi;
    document.getElementById("pExperience").textContent = inpYears;
    document.getElementById("pEmail").textContent = inpEmail;

}

function showMenu() {
  var menu = document.getElementById("menu");
  var box = document.getElementById("box-profile");

  if (menu.style.display === "block") {
    menu.style.display = "none";
    box.style.paddingTop = "0px";
  } else {
    menu.style.display = "block";
    box.style.paddingTop = "125px";
  }
}

