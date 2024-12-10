document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball(event) {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(function(eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(event.pageY - y, event.pageX - x);
        let rotation = (radian * (180 / Math.PI)) + 90; // Korrigierter Winkel
        eye.style.transform = "rotate(" + rotation + "deg)";
    });
}
