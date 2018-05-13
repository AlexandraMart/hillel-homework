window.onload = function() {
    var elements = document.getElementsByTagName('input');
    var tag = document.getElementsByName('text');
    var result = "";

    getValue = function(){
        for(var i=0;i<elements.length;i++){
            var element = elements[i].value;
            result = result + ' ' + element;
            tag[0].innerHTML = '' + result;
        }
    }
    

    setInterval(getValue, 2000);
}