window.onload = function() {
    addToCard = document.querySelectorAll('.add-to-card');
    removeFromCard = document.querySelectorAll('.remove');


    trash = document.querySelector('.trash');

    this.addToCard.forEach(function(item, i, arr){
        item.addEventListener("click", addProductToCard);

    });

    var cartData = {};

    function addProductToCard(){
        t = this;
        console.log(t);
        productName = this.parentElement.querySelector('.product-name').innerText;
        idValue = this.parentElement.id;
        quantity = this.parentElement.dataset.quantity;

        console.log(quantity);
        
        
        
        if(!cartData[idValue]){
         cartData[idValue] = idValue;

         product = {};
         product.name = productName;
         product.quantity = 1;
         
         
     } else {

        
         console.log("CCC");

         console.log(cartData[idValue].quantity);
         
         y = cartData[idValue].quantity;
         y++;
         cartData[idValue].quantity = y;

         
     }

     cartData[idValue] = product;

     console.log(cartData);
     
     var str = JSON.stringify(cartData);
     
     console.log(str);
     
     

 }
}
