
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

const volume = (length * width * height) / 1000000000;

document.getElementById("tileImage").src = img;
document.getElementById("Dimensions").textContent =
    `Length: ${length}mm, Width: ${width}mm, Height: ${height}mm`;

document.getElementById("volume").textContent = 
        `Volume: ${volume.toFixed(6)} m³`;


    window.addEventListener('scroll', function (){
    const header = this.document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

function calculateNettAmount(input) {
            // Get the current row
            const row = input.closest('tr');
            const qty = parseFloat(row.querySelector('td:nth-child(3)').textContent);
            const rate = parseFloat(input.value) || 0;
            
            // Calculate Nett Amount
            const nettAmount = qty * rate;
            row.querySelector('.nett-amount').textContent = nettAmount.toFixed(2);
            
            // Update Total
            updateTotal();
        }

        function updateTotal() {
            const amounts = document.querySelectorAll('.nett-amount');
            let total = 0;
            amounts.forEach(amt => {
                total += parseFloat(amt.textContent) || 0;
            });
            document.getElementById('total-amount').textContent = total.toFixed(2);
        }
