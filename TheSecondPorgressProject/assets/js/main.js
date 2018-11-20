
var cities=$("[class='cities']")
var placeHide=$("[class='place-hide']")

var myEPet=$("[class='myEPetWrap']")
var EPetList=$("[class='myEPet']")

var bookMark=$("[class='bookMark']")
var myBookMark=$("[class='myBookMark']")
var mobile=$("[class='mobile']")
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




 $("[class='category'] ul").on("mouseenter mouseleave mouseover",asideHoverHandler)

var catagory=$("[class='category'] ul");

    for(var i=0;i<catagory.children().length;i++){
        catagory.children().eq(i).attr("index",i);
        console.log(catagory.children().eq(i))
    }

console.log(catagory.children().eq(0)[0].index)
var asideHide,asideHideTop,asideHideBot;
        //创建隐藏的大DIV


        function createAsideHideDiv(topKindName,topKinds,topImgs,titleTop,imgTitleTop,botkindName,botKinds,botImgs,titleBot,imgTitleBot){
            console.log("createAsideHideDiv")
         var   asideHide= $("<div></div>").css({
                width:"6rem",
                height:"5rem",
                border:"0.01rem solid #e74085",
                boxShadow:"0.02rem 0.03rem 0.03rem #000",
                background:"#999999",
                position:"relative",
                top:"-3.53rem",
                left:"2.28rem",
                zIndex:"1002",
                overflow:"hidden",
               /*  display:"none"*/
            }).appendTo(catagory)

           asideHideTop= $("<div></div>").css({
                width:"6rem",
                background:"orange",
                position:"relative",
                top:0,
                left:0,
            }).appendTo(asideHide)
            createHideDivTitle(asideHideTop,imgTitleTop,titleTop)
            createDressUpTable(topKinds,asideHideTop,topImgs,topKindName)
           asideHideBot= $("<div></div>").css({
                width:"6rem",
                position:"relative",
                left:0,
               top:0
            }).appendTo(asideHide)


            createHideDivTitle(asideHideBot,imgTitleBot,titleBot)
            createDressUpTable(botKinds,asideHideBot,botImgs,botkindName)

            return asideHide;
        }



        function createHideDivTitle(parent,img,title) {
            var firstLine=  $("<div></div>").css({
                width:"100%",
                height:"0.5rem",
                position:"relative",
                top:0,
                left:0,
                backgroundColor:"green",

                background:"url('assets/img/menuLine1.png')  -0.1rem bottom repeat-x "
            }).appendTo(parent)

            $("<img/>").attr("src",img).css({
                width:"0.35rem",
                height:"0.35rem",
                marginLeft:"0.3rem",
                marginTop:"0.06rem"

            }).appendTo(firstLine);
            $("<a ></a >").attr("href","#").text(title).css({
                width:"0.75rem",
                height:"0.3rem",
                lineHeight:"0.3rem",
                fontSize:"0.16rem",
                display:"inline-block",
                textAlign:"center",
                marginLeft:"0.1rem",
                verticalAlign:"middle",
                /* marginTop:"0.05rem"*/
                marginBottom:"0.1rem"
            }).appendTo(firstLine)
            $("<i></i>").css({
                width:"0.15rem",
                height:"0.15rem",
                marginTop:"0.17rem",
                marginLeft:"0.1rem",
                display:"inline-block",
                background:"url(assets/img/bg.png) -4.74rem -2.45rem no-repeat"
            }).appendTo(firstLine)



        }


//添加装扮的列表内容
    function createDressUpTable(dressUp,ulParent,imgs,dressUpKindName) {
      var dressUpContent=  $("<ul></ul>").css({
            width:"5rem",
            overflow:"hidden",
            background:"red"
        }).appendTo(ulParent)
        console.log(Object.keys(dressUp).length)
        for(var i=0;i<dressUp.length;i++){
       var dressUpLi=$("<li></li>").css({
                height:"0.4rem",
                width:"6rem",
                 background:"url('assets/img/menuLine1.png')  -0.1rem bottom repeat-x ",
                lineHeight:"0.4rem"
            }).appendTo(dressUpContent)
           /* console.log(dressUp.Object.keys(dressUp)[i])*/
            $("<a ></a >").attr("href","#").css({
               display:"inline-block",
                color:"#e74085",
                fontWeight:700,
                marginLeft:"0.8rem"
            }).text(dressUpKindName[i]).appendTo(dressUpLi)
            $("<img/>").attr("src",imgs[i]).css({
                width:"0.2rem",
                height:"0.2rem",
                marginTop:"0.08rem",
                marginLeft:"0.15rem"
            }).appendTo(dressUpLi)

            console.log(dressUp[i])
            for(var j=0;j<dressUp[i].length;j++){
                $("<span></span>").text("|").css({
                    marginLeft:"0.15rem",
                    marginRight:"0.14rem"
                }).appendTo(dressUpLi)
                $("<a ></a >").attr("href","#").text(dressUp[i][j]).appendTo(dressUpLi);
            }

        }
    }
function asideHoverHandler(e) {
    console.log(e.target.parentNode.getAttribute("index"))
    var asideHide;
    console.log(asideHide)
    if(e.type==="mouseenter"){

        switch(e.target.parentNode.getAttribute("index")){
            case "0":
                var topKindName=["棉服外套","时尚卫衣","装饰项圈","变装配饰","清仓处理"]
                var  topKind1=["乖巧圣诞装","猫咪外套","时尚夹克"]
                var  topKind2=["恐龙卫衣","条纹衫","猪猪卫衣","拼色卫衣","断码清仓"]
                var  topKind3=["花朵项圈","蝴蝶结项圈","蕾丝项圈"]
                var  topKind4=["猫眼睛","小丑领花","绅士领结","变身帽"]
                var  topKind5=["精选棉服","超值卫衣","温暖毛衣"]
                var topKinds=[topKind1,topKind2,topKind3,topKind4,topKind5]
                var titleTop="猫咪装扮"
                var imgTitleTop="assets/img/pic_314.jpg"
                var topImgs=["assets/img/img_1.jpg","assets/img/img_5.jpg","assets/img/img_8.jpg","assets/img/img_6.jpg","assets/img/img_7.jpg"]

                var botkindName=["深睡眠窝","舒适睡垫","逗猫帐篷","猫咪床具"]
                var  botKind1=["园窝","方窝","智能窝","封闭窝"]
                var   botKind2=["舒适垫子","猫头鹰垫","面包垫"]
                var   botKind3=["帐篷窝","方块帐篷","水晶皇宫"]
                var   botKind4=["实用猫床","三用猫床","圆形猫床"]
                var  botKinds=[botKind1,botKind2,botKind3,botKind4]
                var botImgs=["assets/img/img_9.jpg","assets/img/img_10.jpg","assets/img/img_11.jpg","assets/img/img_12.jpg","assets/img/img_13.jpg"]
                var imgTitleBot="assets/img/pic_79.jpg"
                var titleBot="猫猫窝垫"
                console.log()
                asideHide= createAsideHideDiv(topKindName,topKinds,topImgs,titleTop,imgTitleTop,botkindName,botKinds,botImgs,titleBot,imgTitleBot)
                this.asideHide=asideHide;
                break;
            case "1":
                var topKindName=["进口猫粮","国产猫粮","处方猫粮"]
                var  topKind1=["全猫粮","成猫粮","幼猫粮","老猫粮"]
                var  topKind2=["全猫粮","成猫粮","幼猫粮","老猫粮","离乳/怀孕/哺乳"]
                var  topKind3=["花朵项圈","蝴蝶结项圈","蕾丝项圈"]
                var  topKind4=["泌尿护理","体重控制","心肾保护","肠胃处方","特护营养"]
                var topKinds=[topKind1,topKind2,topKind3,topKind4,topKind5]
                var titleTop="猫咪主粮"
                var imgTitleTop="assets/img/pic_93.jpg"
                var topImgs=["assets/img/img_1.jpg","assets/img/img_5.jpg","assets/img/img_8.jpg","assets/img/img_6.jpg","assets/img/img_7.jpg"]

                var botkindName=["罐头湿粮 ","美味零食","猫草薄荷","肉制零食"]
                var  botKind1=["罐头","餐盒","鲜封包","封闭窝"]
                var   botKind2=["饼干"," 肉类零食","美毛化毛"]
                var   botKind3=["猫草","猫薄荷","木天蓼"]
                var   botKind4=["鸡肉","鱼肉","鸭肉","牛肉","羊肉"]
                var  botKinds=[botKind1,botKind2,botKind3,botKind4]
                var botImgs=["assets/img/img_9.jpg","assets/img/img_10.jpg","assets/img/img_11.jpg","assets/img/img_12.jpg","assets/img/img_13.jpg"]
                var imgTitleBot="assets/img/pic_67.jpg"
                var titleBot="猫猫零食"
                createAsideHideDiv(-3)
                break;
            case "2":
                createAsideHideDiv(-3)
                break;
            case "3":
                createAsideHideDiv(-3)
                break;
            case "4":
                createAsideHideDiv(-3)
                break;
            case "5":
                createAsideHideDiv(-3)
                break;
        }
    }else if(e.type==="mouseleave"){
        console.log("remove")
        this.asideHide.remove();
    }

}