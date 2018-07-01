function doAjax(getParam, fileName) {
    var xhr = new XMLHttpRequest();
    xhr.open(getParam, fileName);
    xhr.send();
    return new Promise(function(resolve, reject) {

        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status != 200) {
                reject(xhr);
            }
            var responseData = JSON.parse(xhr.responseText);
            resolve(responseData);
        }
    });
}

function executeReports(value) {
    return value.map(item => doAjax('GET', item.forks_url))
}

/*function executeReports(value) {
    var res = [];

    value.forEach(function(item) {
      console.log(item);

      //res.push(item.forks_url);
      res.push(doAjax('GET', item.forks_url));
  });
    return res;
}*/


module.exports = { 
    doAjax: doAjax,
    executeReports: executeReports
};