window.onload = function() {
        var range = document.querySelector('.range');
        var inputNumber = document.querySelector('.inputNumber');
        var diagram = document.querySelector('.diagram');
        var diagramGreen = document.querySelector('.diagram-green');
        var diagramRed = document.querySelector('.diagram-red');

        getComission = function(rangeValue){
            var commission = compareCommission(rangeValue);
            diagramRed.style.height = commission + "px";
        }

        compareCommission = function (rangeValue){
            var commission;
            if(rangeValue < 20){
                commission = rangeValue * 0.02;
            } else if(rangeValue > 20 && rangeValue < 50){
                commission = rangeValue * 0.04;
            }  else if(rangeValue > 50 && rangeValue < 75){
                commission = rangeValue * 0.06;
            }  else if(rangeValue > 75 && rangeValue < 110){
                commission = rangeValue * 0.08;
            } 

            return commission;
        }

        var maxCommission = compareCommission(range.max);
        var diagramHeight = +range.max + maxCommission;
        diagram.style.height = diagramHeight + "px";

        changeHeight = function(){
            diagramGreen.style.height = inputNumber.value + "px";
            diagramRed.style.bottom = inputNumber.value + "px";
        }

        getComission(range.value);
        changeHeight();


        range.addEventListener('input', function(event){
            inputNumber.value = range.value;
            changeHeight();
            getComission(range.value);
        });

        inputNumber.addEventListener('change', function(event){
            if(inputNumber.value > 0 && inputNumber.value < 100){
                range.value = inputNumber.value;
                changeHeight();
                getComission(range.value);
            } else {
                inputNumber.style.background = "red";
            }
        });
    }