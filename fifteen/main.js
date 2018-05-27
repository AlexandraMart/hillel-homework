window.onload = function() {
    person = document.querySelector(".person");

    personWidth = person.clientWidth;
    personHeight = person.clientHeight;

    personX = person.getBoundingClientRect().left;
    personY = person.getBoundingClientRect().top;
    screenWidth = screen.width;
    screenHeight = screen.height;

    step = 5;
    h = 100;
    ctrlFlag = false;

    document.addEventListener("keyup", function(event) {
        if (event.keyCode == 17) {
            getUp();
        }

    });

    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey) {
            sit();
        }

        switch (event.keyCode) {
            case 37:
            if (personX >= step) {
                moveLeft();
            }

            break;

            case 38:

            if (personY >= step && !ctrlFlag) {
                moveTop();
            }

            break;
            
            case 39:

            if (personX <= screenWidth - personWidth - step) {
                moveRight();
            }

            break;
            case 40:

            if (personY <= screenHeight - 2 * personHeight - 2 * step && !ctrlFlag) {
                moveBottom();
            }
            break;

            case 32:
            if (personY - h >= 0 && !ctrlFlag) {
                jump();

            } else {
                console.log('Can\'t jump');
            }

            break;
        }

    });

    var sit = function() {
        sitHeight = personHeight * 0.4;
        sitWidth = personWidth * 1.15;

        person.style.width = sitWidth + 'px';
        person.style.height = sitHeight + 'px';

        ctrlFlag = true;
    }

    var getUp = function() {
        person.style.width = personWidth + 'px';
        person.style.height = personHeight + 'px';

        ctrlFlag = false;
    }

    var moveLeft = function() {
        personX = personX - step;
        person.style.left = personX + 'px';
    }

    var moveRight = function() {
        personX = personX + step;
        person.style.left = personX + 'px';
    }

    var moveTop = function() {
        personY = personY - step;
        person.style.top = personY + 'px';
    }

    var moveBottom = function() {
        personY = personY + step;
        person.style.top = personY + 'px';
    }

    var jump = function () {
        person.style.top = personY - h + 'px';
        setTimeout(function() {
            person.style.top = personY + 'px';
        }, 700)
    }
}