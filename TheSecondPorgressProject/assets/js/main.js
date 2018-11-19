
var cities=$("[class='cities']")
var placeHide=$("[class='place-hide']")

var myEPet=$("[class='myEPetWrap']")
var EPetList=$("[class='myEPet']")

var bookMark=$("[class='bookMark']")
var myBookMark=$("[class='myBookMark']")
console.log(bookMark)
var mobile=$("[class='mobile']")
console.log(mobile)
var QRCode=$("[class='QRCode']")
hideAndDisplay(cities,placeHide);
hideAndDisplay(myEPet,EPetList);
hideAndDisplay(bookMark,myBookMark);
hideAndDisplay(mobile,QRCode);


function hideAndDisplay(parent,son) {
    console.log(bookMark)
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


