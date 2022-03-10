
var elList = document.querySelector("#pokemon_list")
elList.setAttribute("class", "row w-100 d-flex")

function renderPokemons(array, place) {
    elList.innerHTML = null

    for (var item of array) {
        //  <li> element yaratildi
        var newLi = document.createElement("LI")
        newLi.setAttribute("class", "w-25 p-3")
        
        //  <div> element yaratildi
        var  newDiv =  document.createElement("DIV")
        newDiv.setAttribute("class", "itemm bg-white")
        
        // <img> eliment yaratildi
        var newImg = document.createElement("img")
        newImg.setAttribute("src", `${item.img}`)
      
        newImg.setAttribute("alt", "img");
        newImg.setAttribute("width", "200px");
        newImg.setAttribute("height", "180px")
        // content <div> yaratildi
        var newInnerDiv = document.createElement("DIV")
        newInnerDiv.classList.add("card-body")
         // name yaratildi
        var newHeading = document.createElement("h3")
        newHeading.setAttribute("class", " m-0 text-center")
        newHeading.textContent = item.name;
        // type yaratildi
        var newP = document.createElement("p")
        newP.setAttribute("class", "m-1 fs-5  text-center")
        newP.textContent = item.type;
         // weight yaratildi
        var newP2 = document.createElement("p")
        
        newP2.setAttribute("class", "m-1 fs-5 text-center")
        newP2.textContent = item.weight;
        // height yaratildi
        var newP3 = document.createElement("p");
        newP3.setAttribute("class", "m-1 fs-5 text-center")
      
        newP3.textContent=item.height;
       
        
        newInnerDiv.appendChild(newHeading);
        newInnerDiv.appendChild(newP);
        newInnerDiv.appendChild(newP2);
        newInnerDiv.appendChild(newP3);
        
        
        
        
        newDiv.appendChild(newImg);
        newDiv.appendChild(newInnerDiv);
        
        newLi.appendChild(newDiv)
        
        place.appendChild(newLi)
    }
}
renderPokemons(pokemons, elList)

