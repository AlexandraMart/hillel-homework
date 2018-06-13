window.onload = function() {
    var elem = new Elem('.selector');
    elem.html('hello').append('!');
    elem.prepend('!');
    elem.attr('class', 'www');

}


class Elem {
    constructor(item) {
        this.target = document.querySelector(item);
        
    }
    
    html(x) {
        this.target.textContent = x;
        return this;
    }
    
    append(x) {
       this.target.insertAdjacentHTML('afterBegin', x);
       return this;
   }
   
   prepend(x) {
       this.target.insertAdjacentHTML('beforeEnd', x);
       return this;
   }
   
   attr(attrName, attrValue) {
       this.target.setAttribute(attrName, attrValue);
       return this;
   }
}