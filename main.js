const itemIcon1 = document.getElementById("item1");
const bigItem1 = document.getElementById("bigitem1");

const itemIcon2 = document.getElementById("item2");
const bigItem2 = document.getElementById("bigitem2");

const itemIcon3 = document.getElementById("item3");
const bigItem3 = document.getElementById("bigitem3");

const itemIcon4 = document.getElementById("item4");
const bigItem4 = document.getElementById("bigitem4");

const itemIcon5 = document.getElementById("item5");
const bigItem5 = document.getElementById("bigitem5");

const itemIcon6 = document.getElementById("item6");
const bigItem6 = document.getElementById("bigitem6");

const botonCerrar = document.getElementById("cerrar");
const buttonChart = document.getElementById("buttonChart");
const imageChart = document.getElementById("priceChart");
const closeChart = document.getElementById("cerrarChart");

itemIcon1.addEventListener("click", showImage1);
itemIcon2.addEventListener("click", showImage2);
itemIcon3.addEventListener("click", showImage3);
itemIcon4.addEventListener("click", showImage4);
itemIcon5.addEventListener("click", showImage5);
itemIcon6.addEventListener("click", showImage6);

botonCerrar.addEventListener("click", closeImage);
buttonChart.addEventListener("click", showChart);
closeChart.addEventListener("click", hideChart);

function showChart() {
    imageChart.style.display="block";
    closeChart.style.display="block";
}

function showImage1() {
    bigItem1.style.display="block";
    botonCerrar.style.display="block";
}

function showImage2() {
    bigItem2.style.display="block";
    botonCerrar.style.display="block";
}

function showImage3() {
    bigItem3.style.display="block";
    botonCerrar.style.display="block";
}

function showImage4() {
    bigItem4.style.display="block";
    botonCerrar.style.display="block";
}

function showImage5() {
    bigItem5.style.display="block";
    botonCerrar.style.display="block";
}

function showImage6() {
    bigItem6.style.display="block";
    botonCerrar.style.display="block";
}

function closeImage() {
    bigItem1.style.display="none";
    bigItem2.style.display="none";
    bigItem3.style.display="none";
    bigItem4.style.display="none";
    bigItem5.style.display="none";
    bigItem6.style.display="none";
    botonCerrar.style.display="none";
}

function hideChart() {
    imageChart.style.display="none";
    closeChart.style.display="none";
}