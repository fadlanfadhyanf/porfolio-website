var coll = document.querySelectorAll(".tombol");

coll.forEach(function(tombol) {
  tombol.addEventListener("click", function() {
    var keteranganElements = document.querySelectorAll(".body-bio");
    
    keteranganElements.forEach(function(keteranganElement) {
      keteranganElement.style.display = "none";
    });

    this.classList.toggle("active");
    var keterangan = this.parentElement.nextElementSibling;
    if (keterangan.style.display === "block") {
      keterangan.style.display = "none";
    } else {
      keterangan.style.display = "block";
    }
  });
});
