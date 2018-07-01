var data = require('./data.js');
var render = require('./render.js');

data
.doAjax('GET', 'https://api.github.com/orgs/hillel-front-end/repos')
//.then(list => Promise.all(list.map(item => data.doAjax('GET', item.forks_url))))

.then(function(value){
	return Promise.all(data.executeReports(value));
})

/*.then(function(res){
  console.log(res);
  res.forEach(function(item, i, arr) {
    console.log(item);
    item.forEach(function(item2, i2, arr2) {
      console.log(item2.name);
    });  
  });
})*/

.then(function(value){
var str = render.render(value);
//document.body.innerHTML = str;

//console.log('aaaaa');
let container = document.querySelector('.container-product');
container.innerHTML = str;

});
  //.then(res => console.log(res))



