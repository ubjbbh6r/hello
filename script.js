const product = [
    {
        id: 0,
        image: ' zxd.png',
        title: 'Z Flip Foldable Mobile',  
        price: 300,
    },
    {
        id: 1,
        image: ' zxljhgg.png',
        title: 'Ari Pods Pro', 
        price: 60,   
    },
    {
        id: 2,
        image: ' f.png ',
        title:  '250 DSLR Camera',  
        price:  230,
    },
    {
        id: 3,
        image: ' yhcggyg.png',
        title: 'Head Phones',
        price:100, 
    } 
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title,price} = item;
        return(
            `<div class='box'>
                  <div class='img-box'>
                   <img class='images' src=${image}></img>
                   </div>
                   <div class='botton'> 
                   <p>${title}</p>
                   <h2>$ ${price}.00</h2>`+        
          "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
          `</div>
          </div>`     
        )
    }).join('')
    var cart =[];
    
    function addtocart(a){
        cart.push({...categories[a]});
        displaycart9();  
    }
    function delElment(a){
        cart.splice(a,1);
        displaycart9();
    }

    function displaycart9(a){
        let j = 0, total=0; 
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty"; 
            document.getElementById("total").innerHTML = "$ "+0+".00"; 
        } 
         
         else{
           document.getElementById("cartItem").innerHTML = cart.map((items)=>
           {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'> 
                <div class='row-img'>
                            <img class='rowimg' src=${image}>
                            </div>
                            <p style='font-size:12px; '>${title}</p>
                            <h2 style='font-size:15px; '>$ ${price}.00</h2>`+
                            "<i class='fa-solid fa-trash' onclick='delElment("+(j++) +")'></i></div>"     
            ); 
           }).join(''); 
        } 
    }       
                 
            
     