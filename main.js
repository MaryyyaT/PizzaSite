const createElem = (tag, attr) => {
    const elem = document.createElement(tag);

    return Object.assign(elem,{ ...attr});
};

const productTitle = document.querySelectorAll('.product__title');
const productText = document.querySelectorAll('.product__text');
const productBtn = document.querySelectorAll('.product__btn');

for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener('click', () =>{
        const title = producTitle [i].textContent;

    })
}