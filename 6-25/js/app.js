var data = require('./data.js');
var render = require('./render.js');

data
.doAjax('GET', 'https://api.github.com/orgs/hillel-front-end/repos')

.then(function(value){
	return Promise.all(data.executeReports(value));
})

.then(function(value){
	let str = render.render(value);
	let container = document.querySelector('.container-product');
	container.innerHTML = str;
});