let cart=[];
let total=0;
function addtocart(){
    let item = event.target;
    let nm=item.dataset.name;
    let pr=parseInt(item.dataset.price);
    let qt=parseInt(item.dataset.qnt);
    let flaf=1
    for (let i=0; i<cart.length; i++){
        if(cart[i].name==nm){
            cart[i].quantity+=1;
            cart[i].price+=pr;
            total+=cart[i].price;
            flaf=0;
            break;  
        }
    }
    if(flaf==1){
        cart.push({name:nm, price:pr, quantity:qt});
        total+=pr;
    }
    console.log(cart);
}
function viewcart(){
    let container = document.getElementById("table");
    container.innerHTML="";
    let table = document.createElement("table");
    table.setAttribute("border", "7");
    table.setAttribute("cellpadding", "20");
    table.setAttribute("align", "center");
    table.setAttribute("width", "70%");
    table.setAttribute("bordercolor", "black");
    let header = table.insertRow();
    header.innerHTML ="<tr> <th>Item</th> <th>Quantity</th> <th>Price</th> <th>Action</th> </tr>";
    for (let i = 0; i < cart.length; i++){
        let row = table.insertRow();
        row.insertCell(0).innerHTML = cart[i].name;
        row.insertCell(1).innerHTML = cart[i].quantity;
        row.insertCell(2).innerHTML = cart[i].price;
        let rm_btm = document.createElement("button");
        rm_btm.innerHTML = "Remove";
        rm_btm.onclick = function(){
            remove(i);
        }
        row.insertCell(3).appendChild(rm_btm);
    }
    container.appendChild(table);
    let tot = document.getElementById("tlt");
    tot.innerHTML = "Total : " +total; 

    let div = document.getElementById("div");
    div.setAttribute("align", "center");    
    let buy = document.createElement("button");
    buy.innerHTML = "Place Order";
    buy.setAttribute("id", "buy");
    // buy.setAttribute("style", "background-color:green; color:white; padding:10px; border-radius:5px; font-size:20px;");
    buy.addEventListener("click", function () {
    print();
    });
    div.appendChild(buy); 

}
function remove(i){
    cart.splice(i,1);
    viewcart();
}
function print(){
    
    let container = document.getElementById("table");
    container.setAttribute("id","table1");
    container.innerHTML="<b>"+"Thank you"+" for your order"+"</b>";
    container.innerHTML="AutoGaer Assccessories ans Services"+"<br>";
     
    let table = document.createElement("table");
    table.setAttribute("align", "center");
    table.setAttribute("cellpadding", "30");    

    let header = table.insertRow();
    header.innerHTML ="<tr> <th>Item</th> <th>Quantity</th> <th>Price</th>   </tr>";
    for (let i = 0; i < cart.length; i++){
        let row = table.insertRow();
        row.insertCell(0).innerHTML = cart[i].name;
        row.insertCell(1).innerHTML = cart[i].quantity;
        row.insertCell(2).innerHTML = cart[i].price;
    }
    container.appendChild(table);
    let tot = document.getElementById("tlt");
    tot.innerHTML = "Total : " +total; 

}

