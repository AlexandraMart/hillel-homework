window.onload = function() {


   //basket = document.querySelector('.basket-elements');

   doAjax("GET", "/goods.json")
   .then(function(value) {
    createProduct(value);
}, function(error) {
    console.log(error);
});



   if(localStorage.getItem("myProduct")){
    var cartData = JSON.parse(localStorage.myProduct);
    showBasket();
} 


}
function doAjax(getParam, fileName) {
    var xhr = new XMLHttpRequest();
    xhr.open(getParam, fileName);
    xhr.send();
    return new Promise(function(resolve, reject) {

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status != 200) {
                reject(xhr);
            }
            resolve(JSON.parse(xhr.responseText));
        }
    });
}



function createProduct(goods) {
    addToCard = document.querySelector('.online-store .wrapper');

    if (addToCard != null) {
        addToCard.innerHTML = '';

        for (var key in goods) {

            var productWrapper = document.createElement('div');
            productWrapper.classList.add("product");

            var productNameAdd = document.createElement('div');
            productNameAdd.classList.add("product-name");
            productNameAdd.innerHTML = goods[key].name;
            productWrapper.appendChild(productNameAdd);

            var AddToCard = document.createElement('div');
            AddToCard.classList.add("add-to-card", "button");
            AddToCard.setAttribute('data-product-name', goods[key].name);
            AddToCard.innerHTML = "Add to cart";
            productWrapper.appendChild(AddToCard);

            var removeFromCard = document.createElement('div');
            removeFromCard.classList.add("remove", "button");
            removeFromCard.innerHTML = "Remove";
            productWrapper.appendChild(removeFromCard);

            addToCard.appendChild(productWrapper);
        }
    }


    addToCard = document.querySelectorAll('.add-to-card');
    removeFromCard = document.querySelectorAll('.remove');

    addToCard.forEach(function(item, i, arr) {
        item.addEventListener("click", function() {
            addProductToCard.call(this, i);
        });
    });

    removeFromCard.forEach(function(item, i, arr) {
        item.addEventListener("click", function() {
            removeProductFromCard.call(this, i);
        });
    });

    clearBasket = document.querySelector('.remove-all');
    clearBasket.addEventListener("click", removeAll);
}


if(localStorage.getItem("myProduct")){
    var cartData = JSON.parse(localStorage.myProduct);
    showBasket();
} else {
 var cartData = {};
}

function addProductToCard(id) {
    productName = this.dataset.productName;

    idValue = id;


    if (!cartData[idValue]) {
        cartData[idValue] = idValue;

        product = {};
        product.name = productName;
        product.quantity = 1;
        cartData[idValue] = product;
    } else {
        cartData[idValue].quantity++;
    }

    showBasket();
}


function showBasket() {
    basket = document.querySelector('.basket-elements');
    console.log(basket);
    var serialObj = JSON.stringify(cartData);
    localStorage.setItem("myProduct", serialObj);
    var showInfo = JSON.parse(localStorage.getItem("myProduct"));

    if (showInfo != null) {
        basket.innerHTML = '';

        for (var key in showInfo) {

            var productNameAdd = document.createElement('div');
            productNameAdd.innerHTML = cartData[key].name;
            basket.appendChild(productNameAdd);

            var productQuantityAdd = document.createElement('div');
            productQuantityAdd.innerHTML = cartData[key].quantity;
            basket.appendChild(productQuantityAdd);
        }
    }
}


function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function removeProductFromCard(id) {
    if (!isEmpty(cartData) && cartData[idValue] != null) {
        if (cartData[idValue].quantity > 1) {
            cartData[idValue].quantity--;
        } else {
            delete cartData[idValue];
        }
        showBasket();
    }
}

function removeAll() {
    cartData = {};

    showBasket();
}



