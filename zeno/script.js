document.addEventListener("DOMContentLoaded", function (event) {
    var cursor = document.createElement("div");
    cursor.className = "custom-cursor";

    var tomato = document.createElement("img");
    tomato.src = "tomato.png";

    document.body.appendChild(cursor);
    document.body.appendChild(tomato);

    document.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;

        cursor.style.left = (x - 256) + "px";
        cursor.style.top = (y - 256) + "px";
    });

    document.addEventListener("mousedown", function (e) {
        cursor.style.transform = "rotate(-45deg)";
        const audio = new Audio("sound_effect.mp3");
        audio.play();
    });

    document.addEventListener("mouseup", function (e) {
        cursor.style.transform = "rotate(0deg)";
    });

    tomato.addEventListener("click", function(event) {
        var image = document.createElement("img");
        
        image.style.width = "100px"
        image.src = "mau.png";
        
        document.body.appendChild(image);
        
        image.style.position = "absolute";
        image.style.left = (event.pageX - image.width / 2) + "px";
        image.style.top = (event.pageY - image.height / 2) + "px";
        
        setTimeout(function () {
            image.remove();
          }, 1000);
      });
});