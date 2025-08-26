// // console.log('js linked');

// //* ------------------------------❌❌-------------------- traditional way ------ 01 ------

// //------ get id function---এই ফাংশন সমস্ত id এর জন্য ব্যবহার করবে।
// function getId(id) {
//   const element = document.getElementById(id);
//   return element;
// }
// //----------------------------------------------------------------------------------
// document.getElementById('k-btn-1').addEventListener('click', function () {
//   const cardTitle = getId('card-title-1').innerText;
//   const cardPrice = getId('card-price-1').innerText;
//   const cardImg = getId('card-img-1').src;

//   const totalPrice = parseFloat(getId('total-price').innerText);

//   let currentTotal = parseFloat(cardPrice) + totalPrice; // এটা cardPrice এর সাথে totalPrice কে যোগ করলো

//   getId('total-price').innerText = currentTotal.toFixed(2); // এটা currentTotal এর যোগ ফলটাকে = সমান সমান করে পাঠাই দিছে

//   //   card-add কে ধরো
//   const cardAdd = getId('card-add');

//   //   card-add ডিভ এর মাঝে js দ্বারা নতুন div বানাও
//   const newCard = document.createElement('div');
//   newCard.innerHTML = `
//         <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-5">
//             <img src="${cardImg}" alt="" class="w-12">
//             <div class="">
//                 <h5 class="font-bold">${cardTitle}</h5>
//                 <p>${cardPrice} </p>
//             </div>
//         </div>
//   `;
//   cardAdd.appendChild(newCard);

//   //  total quantity বৃদ্ধি করতে
//   let quantity = parseFloat(getId('total-quantity').innerText);
//   quantity = quantity + 1;
//   getId('total-quantity').innerText = quantity;
// });

// //*---------------------------------❌❌-------------------- traverse technique---- 02------

// //------ get id function---এই ফাংশন সমস্ত id এর জন্য ব্যবহার করবে।
// function getId(id) {
//   const element = document.getElementById(id);
//   return element;
// }

// // calss দ্বারা সমস্ত button ধরে কাজ করতে
// const cardBtns = document.getElementsByClassName('k-button');

// for (let cardButton of cardBtns) {
//   cardButton.addEventListener('click', function () {
//     // প্রথমে img কে বের করলাম
//     const productImg =
//       cardButton.parentNode.parentNode.children[0].children[0].src;

//     // দ্বিতীয় title কে বের করলাম
//     const productTitle = cardButton.parentNode.children[1].innerText;

//     // তৃতীয় price কে বের করলাম
//     const productPrice = cardButton.parentNode.children[2].innerText;

//     // Aside এর Total-price কে বের করলাম
//     const totalPrice = getId('total-price').innerText;

//     // productPrice এর সাথে  totalPrice কে যোগ  করে --- তারপর নাম্বারে convert করলাম। এখন Add to Cart কাজ করবে।
//     const currentTotal = parseFloat(productPrice) + parseFloat(totalPrice);
//     getId('total-price').innerText = currentTotal.toFixed(2);

//     //---------  Add to Cart ক্লিক করলে সাথে প্রতিটি কার্ড Aside দেখাবে ------

//     // প্রথমে  card-add কে ধরো
//     const cardAdd = getId('card-add');

//     //  card-add ডিভ এর মধ্যে, js দ্বারা নতুন div বানাও
//     const newCard = document.createElement('div');
//     newCard.innerHTML = `
//         <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-5">
//             <img src="${productImg} " alt="" class="w-12">
//             <div class="">
//                 <h5 class="font-bold">${productTitle} </h5>
//                 <p>${productPrice} </p>
//             </div>
//         </div>
//     `;
//     cardAdd.appendChild(newCard);

//     // Quantity যুক্ত করতে
//     let quantity = parseFloat(getId('total-quantity').innerText);
//     quantity = quantity + 1;
//     getId('total-quantity').innerText = quantity;
//   });
// }

// //*-----------------------------❌❌------------------------ delegation technique---- 03------

//------ get id function---এই ফাংশন সমস্ত id এর জন্য ব্যবহার করবে।
function getId(id) {
  const element = document.getElementById(id);
  return element;
}

// calss দ্বারা সমস্ত button ধরে কাজ করতে
getId('product-box').addEventListener('click', function (e) {
  if (e.target.className.includes('k-button')) {
    const cardButton = e.target;

    // প্রথমে img কে বের করলাম
    const productImg =
      cardButton.parentNode.parentNode.children[0].children[0].src;

    // দ্বিতীয় title কে বের করলাম
    const productTitle = cardButton.parentNode.children[1].innerText;

    // তৃতীয় price কে বের করলাম
    const productPrice = cardButton.parentNode.children[2].innerText;
    console.log(productPrice);

    // Aside এর Total-price কে বের করলাম
    const totalPrice = getId('total-price').innerText;
    const currentTotal = parseFloat(productPrice) + parseFloat(totalPrice);
    getId('total-price').innerText = currentTotal.toFixed(2);

    // প্রথমে  card-add কে ধরো
    const cardAdd = getId('card-add');

    //  card-add ডিভ এর মধ্যে, js দ্বারা নতুন div বানাও
    const newCard = document.createElement('div');
    newCard.innerHTML = `
        <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-5">
            <img src="${productImg} " alt="" class="w-12">
            <div class="">
                <h5 class="font-bold">${productTitle} </h5>
                <p>${productPrice} </p>
            </div>
        </div>
    `;
    cardAdd.appendChild(newCard);

    // Quantity যুক্ত করতে
    let quantity = parseFloat(getId('total-quantity').innerText);
    quantity = quantity + 1;
    getId('total-quantity').innerText = quantity;
  }
});

// //*-----------------------------❌❌------------------------ clear button---

document.getElementById('clear-btn').addEventListener('click', function () {
  const cardAdd = getId('card-add');
  cardAdd.innerHTML = '';
  getId('total-price').innerText = 0;
  getId('total-quantity').innerText = 0;
});
