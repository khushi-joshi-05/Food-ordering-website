// const applyFirstTimeDiscount = () => {
//     let isFirstTimeUser = localStorage.getItem('isFirstTimeUser');
//     if (!isFirstTimeUser) {
//         const couponCode = generateCouponCode();
//         localStorage.setItem('couponCode', couponCode);
//         localStorage.setItem('isFirstTimeUser', true);
//         document.getElementById('couponCode').innerText = `Use coupon code ${couponCode} for 30% off!`;
//         alert(`Congratulations! Your coupon code is ${couponCode}. You've received a 30% discount on your first order.`);
//     }
// }