function myFunction() {
    location.replace("http://127.0.0.1:5500/blogs.html")
  }
function blogFunction(){
    location.replace("http://127.0.0.1:5500/index.html")
}
// Theme Color

const colors=['gray','red','blue','green','yellow','violet','cyan','brown','white','black'];
let colorIndex = 0;

document.getElementById("themeColor").addEventListener("click",function(){
   document.body.style.backgroundColor=colors[colorIndex];
   colorIndex=(colorIndex+1) % colors.length;
})
