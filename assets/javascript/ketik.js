function typeAnimation(element, text, initialDelay) {
    const speed = 40;
    let i = 1;
  
    element.textContent = text.charAt(0);
  
    function type() {
        if (i <= text.length) {
        element.textContent = text.substring(0, i);
        i++;
        if (i <= text.length) {
            setTimeout(type, speed);
        } else {
            setTimeout(reset, initialDelay);
        }
        }
    }
  
    function reset() {
        i = 1;
        setTimeout(type, 0);
    }
  
    setTimeout(type, initialDelay);
    }
    document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("meledak");
    const text = element.textContent.trim();
    typeAnimation(element, text, 1000);
    });