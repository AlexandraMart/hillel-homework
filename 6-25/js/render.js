function render(response){
    console.log(response);
    return response.map((item, i, arr)=>{
       let FirstGo = true;    
       return item.map(item2=>{

        let productName = `<div>${item2.name}</div>`;
        if(FirstGo) {
            productUniqueName = productName;
            FirstGo = false;
        } else {
            productUniqueName = '';
        }


        let goodsForm = productUniqueName + `<div>${item2.forks_url}</div>`;
        console.log(goodsForm);
        return goodsForm;
    }).join('')
   }).join('');

}

module.exports = { 
    render: render
};