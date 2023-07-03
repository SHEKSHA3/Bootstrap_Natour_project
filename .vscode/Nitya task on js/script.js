let incress = document.getElementsByClassName("incress");
let decress = document.getElementsByClassName("decress");
let parent = document.getElementById("parent");
let children=document.getElementById('children');
////////////////////////////////////////////////////////////
function icrese(){
  let clone=children.cloneNode();
 
  parent.appendChild(clone);
}

////////////////////////////////////////////////////
for(let i=0;i<decress.length;i++){
    decress[i].addEventListener('click',()=>{
        
        parent.removeChild(children[i]);
        console.log(children[i]);
    })
}
