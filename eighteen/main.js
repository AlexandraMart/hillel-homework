window.onload = function() {
    addToCard = document.querySelectorAll('.add-to-card');
    removeFromCard = document.querySelectorAll('.remove');

    clearBasket = document.querySelector('.remove-all');
    clearBasket.addEventListener("click", removeAll)

    basket = document.querySelector('.basket-elements');

    addToCard.forEach(function(item, i, arr){
        item.addEventListener("click", function(){
            addProductToCard.call(this, i);
        });
    });

    removeFromCard.forEach(function(item, i, arr){
        item.addEventListener("click", function(){
            removeProductFromCard.call(this, i);
        });
    });

    if(localStorage.getItem("myProduct")){
        var cartData = JSON.parse(localStorage.myProduct);
        showBasket();
    } else {
         var cartData = {};
    }

    function addProductToCard(id){
        productName = this.dataset.productName;

        idValue = id;

        
        if(!cartData[idValue]){
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

    function showBasket(){
        var serialObj = JSON.stringify(cartData);
        localStorage.setItem("myProduct", serialObj);
        var showInfo = JSON.parse(localStorage.getItem("myProduct"));

        if(showInfo != null){
            basket.innerHTML = '';

            for(var key in showInfo){

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
        if(!isEmpty(cartData) && cartData[idValue] != null){
            if(cartData[idValue].quantity > 1){
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
}