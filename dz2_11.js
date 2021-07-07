let tablex1 = 0;
let tablex2 = 2;
let clients = [2, 2, 2, 1];
let unserved = 0;

tablex2 *= 2;

for(let i=0;i<clients.length;i++){
	if(clients[i] == 1){
  	if(tablex1 >= 1){
    	tablex1--;      
    } else if(tablex2 >= 1){
    	tablex2--;     
    } else{
    	unserved++;      
    }
  }else if(clients[i] == 2){
    if(tablex2 >= 2){
				tablex2 -= 2;        
    }else{
        unserved += 2;        
    }
  }
}
console.log("Количество необслуженных клиентов: " + unserved);