window.onload = function() {
    product = document.querySelectorAll('.product');
    product.addEventListener("click", function(){
        var t = this.innerHTML;
        console.log(t);
    });
}
