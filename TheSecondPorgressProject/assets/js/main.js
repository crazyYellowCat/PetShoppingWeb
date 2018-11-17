
var cities=$("[class='cities']")
var placeHide=$("[class='place-hide']")

var myEPet=$("[class='myEPetWrap']")
var EPetList=$("[class='myEPet']")

var bookMark=$("[class='bookMark']")
var myBookMark=$("[class='myBookMark']")

hideAndDisplay(cities,placeHide);
hideAndDisplay(myEPet,EPetList);
hideAndDisplay(bookMark,myBookMark);
function hideAndDisplay(parent,son) {
    console.log(parent,son);
   parent.on("mouseenter mouseleave",clickHandler);

    function clickHandler(e) {

        if(e.type==="mouseenter"){
            son.css("display","block")
        }else{
           son.css("display","none")

        }
    }
}


