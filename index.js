
function selectItem(imgSrc, length, width, height) {
    localStorage.setItem("tileImage", imgSrc);
    localStorage.setItem("tileLength", length);
    localStorage.setItem("tileWidth", width);
    localStorage.setItem("tileHeight", height);


    window.location.href = "index-sec.html"

}

const img = localStorage.getItem("tileImage");
const length = localStorage.getItem("tileLength");
const width = localStorage.getItem("tileWidth");
const height = localStorage.getItem("tileHeight");

document.getElementById("tileImage").src = img;
document.getElementById("Dimensions").textContent =
    `Length: ${length}, Width: ${width}, Height: ${height}`;


    window.addEventListener('scroll', function (){
    const header = this.document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})
