function myFunction() {
  window.location.href = "blogs.html";

}

function blogFunction() {
  window.location.href = "index.html";

}
// Theme Color

const colors=['#97E7E1','#FFC96F','#C4D7FF','#FFDFEF','#B7B1F2','#6A9C89','#B4EBE6','#B6FFA1','white','#FBA1B7'];
let colorIndex = 0;

document.getElementById("themeColor").addEventListener("click",function(){
   document.body.style.backgroundColor=colors[colorIndex];
   colorIndex=(colorIndex+1) % colors.length;
})
