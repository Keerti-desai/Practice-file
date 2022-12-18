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

// {/* <div id="coupon-div">
//             <div class="inner-container">
//               <div class="coupon">
//                 <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1668159182299/nykaa-coupons.jpg" alt="nykaa">
//           <span id="popupClose"><i class="bi bi-x-square"></i></span>
//             */}