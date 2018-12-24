
export function sortItems(items) {
   let itemsCopy = []
   if(items !== undefined){
     let i;
     for(i = 0; i < items.length; i++){
       itemsCopy[i]  = items[i].name;
     }
     return itemsCopy.sort();
   }else{
     return;
   }
  }
