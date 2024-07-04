const menuCover = document.querySelector('.mobile-bg')
const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.icon-menu').addEventListener('click', function() {
    document.body.style.overflow = 'hidden'
    menuCover.classList.add('show-mobile-bg')
    // menu.classList.remove('hide-me')
    menu.classList.add('show-me')
})

const menuClose = document.querySelector('.mobile-menu-close').addEventListener('click', function() { 
    document.body.style.overflow = 'auto'
    menu.classList.remove('show-me')
    // menu.classList.add('hide-me')
    setTimeout(() => {
        menuCover.classList.remove('show-mobile-bg')
    }, 1000);
})

let bigImg = document.querySelector('.big-image')
const thumbNailImg = document.querySelectorAll('.thumbnail-image')

thumbNailImg.forEach(img => {
    img.addEventListener('click', function() {
        const thumbImg = img.getAttribute('src')
        if (thumbImg === 'images/image-product-1-thumbnail.jpg') {
            bigImg.setAttribute('src', 'images/image-product-1.jpg')
        } else if (thumbImg === 'images/image-product-2-thumbnail.jpg'){
            bigImg.setAttribute('src', 'images/image-product-2.jpg')
        } else if (thumbImg === 'images/image-product-3-thumbnail.jpg'){
            bigImg.setAttribute('src', 'images/image-product-3.jpg')
        } else if (thumbImg === 'images/image-product-4-thumbnail.jpg'){
            bigImg.setAttribute('src', 'images/image-product-4.jpg')
        }
    })
})


let number = 1;
const plus = document.querySelector('.plus').addEventListener('click', () => {
    number++
    const quantity = document.querySelector('.quantity')
    quantity.innerHTML = number
})

const minus = document.querySelector('.minus').addEventListener('click', () => {
    if (number > 1) {
        number--
    }
    const quantity = document.querySelector('.quantity')
    quantity.innerHTML = number
})

const productDetails = {
    productName: 'Fall Limited Edition Sneakers',
    productImg: 'images/image-product-1.jpg',
    productPrice: 125
}

const cartContent = document.querySelector('.cart-content')
const cartTemplate = function() {
    const cartHtml = `
       <div class="cart-product">
        <div class="cart-inner-content">
            <img src="${productDetails.productImg}" alt="" width="50px" class="cart-prod-img">
            <div>
            <p class="roduct-name">${productDetails.productName}</p>
            <span class="cart-price">$${productDetails.productPrice}</span> x 
            <span class="cart-pieces">${number}</span>
            <span class="cart-total">$${productDetails.productPrice * number}</span>
            </div>
            <img src="images/icon-delete.svg" alt="" class="cart-delete-btn">
        </div>
        <button class="cart-checkout-btn">Checkout</button>
        </div>
    `
    cartContent.insertAdjacentHTML('beforeend', cartHtml)
}

const empty = document.querySelector('.empty')
const addToCartBtn = document.querySelector('.add_to_cart').addEventListener('click', () => {
    console.log('yeah');
    cartTemplate()
    empty.style.display = 'none';
    const cartIt = document.querySelector('.cart-product')
    const deleteCartItem = document.querySelector('.cart-delete-btn')
    deleteCartItem.addEventListener('click', function() {
        cartIt.remove()
        empty.style.display = 'block';
    })
})

const cartIcon = document.querySelector('.cart-icon').addEventListener('click', () => {
    const cartBox = document.querySelector('.carty')
    cartBox.classList.toggle('show-my-cart')
})

const padLeft = document.querySelector('.pad-left')
const padRight = document.querySelector('.pad-right')
const mobileProImgSLide = document.querySelectorAll('.mobile-pro-img')



let counter = 0
padRight.addEventListener('click', slideRightFunc)
function slideRightFunc() {
    if (counter >= mobileProImgSLide.length-1) {
        counter = 0
    } else {
        counter++
    }
    mobileProImgSLide.forEach(imgSlide => {
        imgSlide.classList.remove('active')
    })
    mobileProImgSLide[counter].classList.add('active')
}

padLeft.addEventListener('click', slideRightFunc)
function slideRightFunc() {
    if (counter <= 0 ) {
        counter = mobileProImgSLide.length-1
    } else {
        counter--
    }
    mobileProImgSLide.forEach(imgSlide => {
        imgSlide.classList.remove('active')
    })
    mobileProImgSLide[counter].classList.add('active')
    mobileProImgSLide[counter].style.transition = '200ms ease-in-out'
}