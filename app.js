$(document).ready(function(){
      var firebaseConfig = {
        apiKey: "AIzaSyDiJ7xOsblIDpC9qBH-adpx1gqRYefuwD0",
        authDomain: "barkod-deposu.firebaseapp.com",
        databaseURL: "https://barkod-deposu.firebaseio.com",
        projectId: "barkod-deposu",
        storageBucket: "barkod-deposu.appspot.com",
        messagingSenderId: "269922773597",
        appId: "1:269922773597:web:4cef4928c636f3fa45fbb4",
        measurementId: "G-DY4Q35PN2J"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
$("#gonder").click(function(){
var isim=$("#isim").val();
var istek = $("#istek").val();
var mesaj = $("#mesaj").val();

firebase.database().ref().child("istek").push(
    {
        isim : isim,
        istek : istek,
        mesaj : mesaj
    }
);

});
});