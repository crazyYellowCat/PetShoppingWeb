
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

 var left= $("[class='leftBox'] a:nth-of-type(1)")
     $("[class='leftBox'] a:nth-of-type(1)").on("mouseenter",mouseenterHandler)
  var right=$("[class='leftBox'] a:nth-of-type(2)")
      $("[class='leftBox'] a:nth-of-type(2)").on("mouseenter",mouseenterHandler)

function mouseenterHandler(e) {
    //console.log(this)
    if(this===left[0]){
        $("[class='asideRight']").css("display","block");
        $("[class='category']").css("display","none")
    }else{
        $("[class='asideRight']").css("display","none");
        $("[class='category']").css("display","block")
    }

}
