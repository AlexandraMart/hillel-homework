
window.onload = function(){

    contextmenu = {
        actions: [
        {
            title: "Jump",
            handler: 'jump'
        },

        {
            title: "Remove",
            handler: 'remove'
        },

        {
            title: "Change color",
            handler: 'changeColor'
        },

        {
            title: "Show person(after remove)",
            handler: 'addPersonBack'
        }
        ]
    }


    var menu = document.querySelector('.my_menu');
    var person = document.querySelector('.person');

    for(var i =0; i<contextmenu.actions.length; i++) {
        var div = document.createElement('li');
        div.classList.add('block');
        div.innerHTML = contextmenu.actions[i].title;

        var functionName = window[contextmenu.actions[i].handler];
        div.addEventListener('mousedown', functionName.bind(null, person));

        menu.appendChild(div);
    }

    document.addEventListener('contextmenu', function(event){
       event.preventDefault();
       var x = event.pageX;
       var y = event.pageY;
       menu.style.top = y + 'px';
       menu.style.left = x + 'px';

       menu.classList.add("show");

       windowHeight = window.innerHeight;
       windowWidth = window.innerWidth;

       var menuWidth = menu.offsetWidth;
       var menuHeight = menu.offsetHeight;

       if((x + menuWidth) > windowWidth){
             menu.style.left = (x - menuWidth) + 'px';
       }

       if((y + menuHeight) > windowHeight){
            menu.style.top = (y - menuHeight) + 'px';
       }

   });

    document.addEventListener('mousedown', function(event){ 
        menu.classList.remove("show");
    });
}


function jump(person){
    personY = person.getBoundingClientRect().top;
    h = 100;

    if(personY - h >= 0){
       person.style.top = personY - h + 'px';
       setTimeout(function() {
        person.style.top = personY + 'px';
    }, 1000);
   }  
}

function remove(person){
    person.classList.add('hide');
}

function addPersonBack(person) {
    if(person.classList.contains('hide')){
        person.classList.remove('hide');
    }
}

function changeColor(person){
    var color = prompt('What color do you want to use?');
    console.log(color);
    person.style.backgroundColor = color;
}