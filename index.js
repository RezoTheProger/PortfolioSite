const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
document.addEventListener('contextmenu', event => event.preventDefault());
const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


document.addEventListener('click' ,() =>{
    circles.forEach(function (circle) {
        circle.classList.add("expand");
        setTimeout(()=>{
            circle.classList.remove("expand");
    
        },(500))
      });
 
})
const handleOnMouseMove = e => {
    // Get the current target element from the event object.
    const target = e.currentTarget;
  
    // Get the boundingClientRect of the target element.
    const rect = target.getBoundingClientRect();
  
    // Get the top and left coordinates of the mouse cursor relative to the target element.
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    // Set the `--mouse-x` and `--mouse-y` CSS custom properties on the target element.
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
for(const column of document.querySelector('.column')){
    column.onmousemove = e =>handleOnMouseMove(e);
}
