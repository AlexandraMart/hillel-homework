function render(response){
    return response.map((item, i, arr)=>{
       let FirstGo = true;    
       return item.map((item2, i2, arr2)=>{

        let productName = `<li class="menuHeader">${item2.name}
        <ul class="menuWrapper">`;
        if(FirstGo) {
            productUniqueName = productName;
            FirstGo = false;
        } else {
            productUniqueName = '';
        }


        let goodsForm = productUniqueName + `<li><a href="#">${item2.forks_url}</a></li>`;

        if (arr2.length - 1 === i2) {
            goodsForm = goodsForm + '</ul></li>'
        }
        return goodsForm;
    }).join('')


   }).join('');

}

module.exports = { 
    render: render
};