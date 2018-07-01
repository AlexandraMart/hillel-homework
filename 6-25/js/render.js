function render(response){
    console.log(response);
    return response.map((item, i, arr)=>{
       let FirstGo = true;    
       return item.map(item2=>{

        let productName = `<ul><li>${item2.name}<li><ul>`;
        if(FirstGo) {
            productUniqueName = productName;
            FirstGo = false;
        } else {
            productUniqueName = '';
        }


        let goodsForm = productUniqueName + `<li>${item2.forks_url}</li>`;
        console.log(goodsForm);
        return goodsForm;
    }).join('')
   }).join('');

}

module.exports = { 
    render: render
};