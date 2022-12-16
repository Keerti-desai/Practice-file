/*Light & dark mode*/
const clormode=()=>{
    let mybody =document.body;
   mybody.classList.toggle('mydark')
}
/*coupon code*/
let popupCloseButton = document.querySelector("#popupClose");
popupCloseButton.addEventListener("click",() => {
    document.querySelector("#coupon-div").style.display = "none";
});

