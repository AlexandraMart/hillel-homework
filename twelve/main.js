function doAjax(getParam, url, personalInfo){
    var xhr = new XMLHttpRequest();
    xhr.open(getParam, url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(function(resolve, reject){
        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
                //console.log('l');
            }
            
            if (xhr.status != 200) {
                reject(xhr);
            } 
            xhr.send(personalInfo);
        }
    });
} 

/*doAjax("POST", "/registration", params).then(function(value){

    console.log(value);
}, function(error) {
  console.log(error);
});*/




window.onload = function(){
    var form = document.querySelector('.personalInfo');
    var submit = document.querySelector('.submit');
    var name = form.elements.name;
    var age = form.elements.age;    

    form.addEventListener('change', function(event){
        name = this.elements.name.value;
        age = this.elements.age.value;
    });

    form.addEventListener('submit', function(evt){

        function validateNumber(value){
            var valAge = parseInt(value, 10);
            if(isNaN(valAge) || valAge < 1 || valAge > 150){
                return false;
            }
        }

        if(!validateNumber(age) || validateNumber(name)){
            var params = "name=" + name + "&age=" + age;
            console.log(params);
        }

    });
}