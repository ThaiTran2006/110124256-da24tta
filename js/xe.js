// Nút thuê ngay
const rentBtn = document.getElementById("rentBtn");

rentBtn.addEventListener("click", () => {
    alert("Chào mừng bạn đến với XE MÁY 84!");
});


// Các nút đặt xe
const bookButtons = document.querySelectorAll(".bookBtn");

bookButtons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("Bạn đã đặt xe thành công!");
    });
});