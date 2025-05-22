window.addEventListener('scroll', function (){
    const header = this.document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

function selectItem(imgSrc, length, width, height) {
    localStorage.setItem("tileImage", imgSrc);
    localStorage.setItem("tileLength", length);
    localStorage.setItem("tileWidth", width);
    localStorage.setItem("tileHeight", height);


    window.location.href = "index-sec.html"

}