// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

// $(document).ready(function() {
//     $(".chat-btn").click(function() {
//         $("#myDIV").hide("slow");
//     });

//     $(".chat-btn").click(function() {
//         $("#myDIV").show("slow");
//     });
// });

// $(".chat-btn").click(function() {
//     var x = $("#myDIV");
//     if (x.hasClass('hide')) {
//         x.removeClass('hide').hide("slow");
//     } else {
//         x.addClass('hide').show("slow");
//     }
// });

const listContacts = document.querySelector('#myContact');
const myMessage = () => {
    listContacts.classList.toggle('show');
};