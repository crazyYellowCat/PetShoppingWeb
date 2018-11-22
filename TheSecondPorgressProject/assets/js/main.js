
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
    /*console.log(bookMark)
    console.log(parent,son);*/
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
    var objSale0={title:"特瑞仕-欧洲盛名宠物用品品牌",bgImg:"assets/img/pic_363.jpg",icon:"assets/img/pic_143.jpg",discount:"全场低至8.5折"}
    var objSale1={title:"特瑞仕-欧洲盛名宠物用品品牌",bgImg:"assets/img/pic_363.jpg",icon:"assets/img/pic_143.jpg",discount:"全场低至8.5折"}
    var objSale2={title:"特瑞仕-欧洲盛名宠物用品品牌",bgImg:"assets/img/pic_363.jpg",icon:"assets/img/pic_143.jpg",discount:"全场低至8.5折"}
    var objSale3={title:"特瑞仕-欧洲盛名宠物用品品牌",bgImg:"assets/img/pic_363.jpg",icon:"assets/img/pic_143.jpg",discount:"全场低至8.5折"}

    var forSaleGoods=[objSale0,objSale1,objSale2,objSale3]

 $("[class='category'] ul").on("mouseenter mouseleave mouseover",asideHoverHandler)
 $("[class='category'] ul p").on("mouseenter mouseleave",pMouseHandler);

function pMouseHandler(e) {
    var box;
    console.log(this.parentNode)
    if(e.type==="mouseenter"){
        if($(".asideHide")){
            $(".asideHide").remove()
        }
        box=$("<div class='pBox'></div>").css({
            width:"6rem",
            height:"4rem",
            background:"#fff",
            border:"0.01rem solid #e74085",
            position:"relative",
            top:"-3.53rem",
            left:"2.28rem",
        }).appendTo(catagory)

        for(var i=0;i<forSaleGoods.length;i++){
            $("<div></div>").css({
                width: "2.5rem",
                height:"1.3rem",
                background:"url("+forSaleGoods[i].bgImg+") no-repeat",
                backgroundSize:"2.5rem 1.3rem",
                margin:"0.2rem 0.2rem",
                display:"inline-block"
            }).appendTo(box);
        }

        console.log(box);
        this.parentNode.setAttribute("box",box);
    }else if(e.type==="mouseleave"){

    }
}
var catagory=$("[class='category'] ul");

    for(var i=0;i<catagory.children().length;i++){
        catagory.children().eq(i).attr("index",i);
        //console.log(catagory.children().eq(i))
    }


var asideHide,asideHideTop,asideHideBot;
        //创建隐藏的大DIV


        function createAsideHideDiv(topKindName,topKinds,topImgs,titleTop,imgTitleTop,botkindName,botKinds,botImgs,titleBot,imgTitleBot){
            console.log("createAsideHideDiv")
         var   asideHide= $("<div class='asideHide'></div>").css({
                width:"6rem",
                height:"5rem",
                border:"0.01rem solid #e74085",
                boxShadow:"0.02rem 0.03rem 0.03rem #000",
                background:"#fff",
                position:"relative",
                top:"-3.53rem",
                left:"2.28rem",
                zIndex:"1002",

               /*  display:"none"*/
            }).appendTo(catagory)

           asideHideTop= $("<div></div>").css({
                width:"6rem",
               /* background:"orange",*/
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
               /* backgroundColor:"green",*/

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
                background:"url('assets/img/bg.png') -4.74rem -2.45rem no-repeat"
            }).appendTo(firstLine)



        }


//添加装扮的列表内容
    function createDressUpTable(dressUp,ulParent,imgs,dressUpKindName) {
      var dressUpContent=  $("<ul></ul>").css({
            width:"5.8rem",
            overflow:"hidden",
          margin:"0 0.1rem"
           /* background:"red"*/
        }).appendTo(ulParent)
       // console.log(Object.keys(dressUp).length)
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

           // console.log(dressUp[i])
            for(var j=0;j<dressUp[i].length;j++){
                $("<span></span>").text("|").css({
                    marginLeft:"0.15rem",
                    marginRight:"0.14rem"
                }).appendTo(dressUpLi)
                $("<a ></a >").attr("href","#").text(dressUp[i][j]).appendTo(dressUpLi);
            }

        }
    }
var preDiv=null;
var index=0
var targetIndex=0;
var asideHide;
$("[class=category] ul li").on("mouseenter mouseleave",liMouseenterHandler);

function liMouseenterHandler(e) {

    if(e.type==="mouseenter") {
        if($(".pBox")){
            $(".pBox").remove();
        }
        if(preDiv){
            preDiv.remove();
        }
        $(this).css({
            height:"0.48rem",
            borderTop:"0.01rem solid #e74085",
            borderBottom:"0.01rem solid #e74085",
            width: "2.28rem",
            background: "url('assets/img/menuLine1.png') 50% bottom no-repeat",
            display: "block"
        })
        switch (e.currentTarget.getAttribute("index")) {
            case "0":
                var topKindName = ["棉服外套", "时尚卫衣", "装饰项圈", "变装配饰", "清仓处理"]
                var topKind1 = ["乖巧圣诞装", "猫咪外套", "时尚夹克"]
                var topKind2 = ["恐龙卫衣", "条纹衫", "猪猪卫衣", "拼色卫衣", "断码清仓"]
                var topKind3 = ["花朵项圈", "蝴蝶结项圈", "蕾丝项圈"]
                var topKind4 = ["猫眼睛", "小丑领花", "绅士领结", "变身帽"]
                var topKind5 = ["精选棉服", "超值卫衣", "温暖毛衣"]
                var topKinds = [topKind1, topKind2, topKind3, topKind4, topKind5]
                var titleTop = "猫咪装扮"
                var imgTitleTop = "assets/img/pic_314.jpg"
                var topImgs = ["assets/img/img_1.jpg", "assets/img/img_5.jpg", "assets/img/img_8.jpg", "assets/img/img_6.jpg", "assets/img/img_7.jpg"]

                var botkindName = ["深睡眠窝", "舒适睡垫", "逗猫帐篷", "猫咪床具"]
                var botKind1 = ["园窝", "方窝", "智能窝", "封闭窝"]
                var botKind2 = ["舒适垫子", "猫头鹰垫", "面包垫"]
                var botKind3 = ["帐篷窝", "方块帐篷", "水晶皇宫"]
                var botKind4 = ["实用猫床", "三用猫床", "圆形猫床"]
                var botKinds = [botKind1, botKind2, botKind3, botKind4]
                var botImgs = ["assets/img/img_9.jpg", "assets/img/img_10.jpg", "assets/img/img_11.jpg", "assets/img/img_12.jpg", "assets/img/img_13.jpg"]
                var imgTitleBot = "assets/img/pic_79.jpg"
                var titleBot = "猫猫窝垫"
                console.log()
                asideHide = createAsideHideDiv(topKindName, topKinds, topImgs, titleTop, imgTitleTop, botkindName, botKinds, botImgs, titleBot, imgTitleBot)
                this.parentNode.asideHide = asideHide;
                preDiv = asideHide
                break;
            case "1":
                var topKindName = ["进口猫粮", "国产猫粮", "处方猫粮"]
                var topKind1 = ["全猫粮", "成猫粮", "幼猫粮", "老猫粮"]
                var topKind2 = ["全猫粮", "成猫粮", "幼猫粮", "老猫粮", "离乳/怀孕/哺乳"]
                var topKind3 = ["泌尿护理", "体重控制", "心肾保护", "肠胃处方", "特护营养"]
                var topKinds = [topKind1, topKind2, topKind3]
                var titleTop = "猫咪主粮"
                var imgTitleTop = "assets/img/pic_93.jpg"
                var topImgs = ["assets/img/img_1.jpg", "assets/img/img_5.jpg", "assets/img/img_8.jpg"]

                var botkindName = ["罐头湿粮 ", "美味零食", "猫草薄荷", "肉制零食"]
                var botKind1 = ["罐头", "餐盒", "鲜封包", "封闭窝"]
                var botKind2 = ["饼干", " 肉类零食", "美毛化毛"]
                var botKind3 = ["猫草", "猫薄荷", "木天蓼"]
                var botKind4 = ["鸡肉", "鱼肉", "鸭肉", "牛肉", "羊肉"]
                var botKinds = [botKind1, botKind2, botKind3, botKind4]
                var botImgs = ["assets/img/img_9.jpg", "assets/img/img_10.jpg", "assets/img/img_11.jpg", "assets/img/img_12.jpg"]
                var imgTitleBot = "assets/img/pic_67.jpg"
                var titleBot = "猫猫零食"
                asideHide = createAsideHideDiv(topKindName, topKinds, topImgs, titleTop, imgTitleTop, botkindName, botKinds, botImgs, titleBot, imgTitleBot)
                this.parentNode.asideHide  = asideHide;
                preDiv = asideHide
                break;
            case "2":
                var topKindName = ["猫咪猫砂", "猫咪厕所", "清洁除臭"]
                var topKind1 = ["豆腐砂", "木砂", "膨润土", "水晶砂", "植物砂", "猫砂除臭"]
                var topKind2 = ["单层厕所", "双层厕所", "半封闭厕所", "全封闭厕所", "开放式厕所"]
                var topKind3 = ["尿片", "湿巾", "禁区喷", "粘毛器", "清洁剂"]
                var topKinds = [topKind1, topKind2, topKind3]
                var titleTop = "猫咪清洁"
                var imgTitleTop = "assets/img/pic_93.jpg"
                var topImgs = ["assets/img/img_1.jpg", "assets/img/img_5.jpg", "assets/img/img_8.jpg"]

                var botkindName = ["猫碗专区 ", "猫咪餐具", "猫咪住所", "智能黑科技","主人专享"]
                var botKind1 = ["单碗", "双碗", "倾斜碗", "碗桌/碗架", "浅口碗"]
                var botKind2 = ["奶瓶", " 自动喂食器", "饮水头"]
                var botKind3 = ["猫笼", "房子", "帐篷", "四季窝"]
                var botKind4 = ["称重碗", "GPS", "杀菌消毒仪"]
                var botKind5 = ["手机壳/配件", "抱枕", "车贴"]
                var botKinds = [botKind1, botKind2, botKind3, botKind4,botKind5]
                var botImgs = ["assets/img/img_9.jpg", "assets/img/img_10.jpg", "assets/img/img_11.jpg", "assets/img/img_12.jpg","assets/img/img_13.jpg"]
                var imgTitleBot = "assets/img/pic_67.jpg"
                var titleBot = "猫咪日用"
                asideHide = createAsideHideDiv(topKindName, topKinds, topImgs, titleTop, imgTitleTop, botkindName, botKinds, botImgs, titleBot, imgTitleBot)
                this.parentNode.asideHide = asideHide;
                preDiv = asideHide
                break;
            case "3":
                var topKindName = ["体内驱虫", "体外驱虫", "耳部护理", "口腔护理","眼部护理"]
                var topKind1 = ["肠道寄生虫","驱弓形虫", "驱心丝虫"]
                var topKind2 = ["滴剂"," 喷剂","内外驱虫","环境驱虫"]
                var topKind3 = ["日常护理","去除泪痕","角膜溃疡"]
                var topKind4 = ["漱口水","牙膏牙刷","除牙石牙垢"]
                var topKind5 = ["日常护理","去除泪痕","角膜溃疡"]
                var topKinds = [topKind1, topKind2, topKind3, topKind4, topKind5]
                var titleTop = "猫咪护理"
                var imgTitleTop = "assets/img/pic_93.jpg"
                var topImgs = ["assets/img/img_1.jpg", "assets/img/img_5.jpg", "assets/img/img_8.jpg", "assets/img/img_50.jpg", "assets/img/img_51.jpg"]

                var botkindName = ["磨爪玩具","爬架/家具","休闲玩具","逗猫棒/杆"]
                var botKind1 = ["猫抓柱","绒布猫抓板","剑麻猫抓板","创意猫抓板","瓦楞纸"]
                var botKind2 = ["1米以下","三层以上爬架","1.4米以上","瓦楞纸家具"]
                var botKind3 = ["猫隧道","木天蓼玩具","电子类玩具"," 球类玩具"]
                var botKind4 = ["兔毛逗猫棒","含吊绳逗猫棒","羽毛逗猫棒","毛绒逗猫棒"]
                var botKinds = [botKind1, botKind2, botKind3, botKind4]
                var botImgs = ["assets/img/img_9.jpg", "assets/img/img_10.jpg", "assets/img/img_11.jpg", "assets/img/img_12.jpg"]
                var imgTitleBot = "assets/img/pic_67.jpg"
                var titleBot = "猫咪玩具"
                asideHide = createAsideHideDiv(topKindName, topKinds, topImgs, titleTop, imgTitleTop, botkindName, botKinds, botImgs, titleBot, imgTitleBot)
                this.parentNode.asideHide = asideHide;
                preDiv = asideHide
                break;
            case "4":
                var topKindName = ["强化免疫", "补钙强骨", "微量元素", "美毛化毛","肠胃调理"]
                var topKind1 = ["奶粉", "营养膏", "牛磺酸", "补血护肝"]
                var topKind2 = ["钙片","钙粉", " 钙膏", "液体钙"]
                var topKind3 = ["微量元素"," 维生素 ","膏状"]
                var topKind4 = ["海藻"," 鱼油","卵磷脂","美毛"]
                var topKind5 = ["益生菌","消食片","酵素水"]
                var topKinds = [topKind1, topKind2, topKind3, topKind4, topKind5]
                var titleTop = "猫咪保健"
                var imgTitleTop = "assets/img/pic_93.jpg"
                var topImgs = ["assets/img/img_1.jpg", "assets/img/img_5.jpg", "assets/img/img_8.jpg", "assets/img/img_50.jpg", "assets/img/img_51.jpg"]

                var botkindName = ["指甲剪","梳剪工具"]
                var botKind1 = ["指甲剪"," 指甲锉","磨甲器"]
                var botKind2 = ["贝壳梳","电推剪","按摩梳","亮毛梳"]
                var botKinds = [botKind1, botKind2]
                var botImgs = ["assets/img/img_9.jpg", "assets/img/img_10.jpg"]
                var imgTitleBot = "assets/img/pic_67.jpg"
                var titleBot = "猫咪美容"
                asideHide = createAsideHideDiv(topKindName, topKinds, topImgs, titleTop, imgTitleTop, botkindName, botKinds, botImgs, titleBot, imgTitleBot)
                this.parentNode.asideHide  = asideHide;
                preDiv = asideHide
                break;
            case "5":
                var topKindName = ["专用配方", "日常洗护", "护毛美毛", "免洗干洗","洗澡工具"]
                var topKind1 = ["幼猫专用", "成猫专用", "老年猫专用"]
                var topKind2 = ["滋养柔顺", "除臭添香 ","亮白美毛", "超强去污"]
                var topKind3 = ["护毛素", "精油", "手工皂", "浴盐"]
                var topKind4 = ["干洗粉", "干洗泡沫", "干洗喷剂"]
                var topKind5 = ["洗猫袋", "洗澡刷 ", "吸水毛巾 ", "吹风机"]
                var topKinds = [topKind1, topKind2, topKind3, topKind4, topKind5]
                var titleTop = "猫咪洗浴"
                var imgTitleTop = "assets/img/pic_93.jpg"
                var topImgs = ["assets/img/img_1.jpg", "assets/img/img_5.jpg", "assets/img/img_8.jpg", "assets/img/img_50.jpg", "assets/img/img_51.jpg"]

                var botkindName = ["外出餐具","猫咪牵引","外出用品","防走丢"]
                var botKind1 = [" 饮水器"," 喂食器 ","旅行套装"]
                var botKind2 = ["棉质项圈 ","皮革项圈","  日常拉带","伸缩拉带"]
                var botKind3 = ["航空箱","提篮/猫包"]
                var botKind4 = ["平面雕","电镀铝 ","立面雕"]
                var botKinds = [botKind1, botKind2, botKind3, botKind4]
                var botImgs = ["assets/img/img_9.jpg", "assets/img/img_10.jpg", "assets/img/img_11.jpg", "assets/img/img_12.jpg"]
                var imgTitleBot = "assets/img/pic_67.jpg"
                var titleBot = "猫咪出行"
                asideHide = createAsideHideDiv(topKindName, topKinds, topImgs, titleTop, imgTitleTop, botkindName, botKinds, botImgs, titleBot, imgTitleBot)
                this.parentNode.asideHide  = asideHide;
                preDiv = asideHide
                break;
        }
    }else if(e.type==="mouseleave"){

        $(this).css({
           /* borderTop:"1px solid #e74085",
            borderBottom:"1px solid #e74085"*/
           border:"none",
            height:"0.5rem",
            width: "2.28rem",
            background: "url(../img/menuLine1.png) 50% bottom no-repeat",
            display: "block"
        })
    }
}
function asideHoverHandler(e) {
  // console.log(e.target.parentNode.getAttribute("index"))
    var asideHide;
    //console.log(e.target.tagName)

    console.log(index ,targetIndex)

    if(e.type==="mouseleave"){
        if( this.asideHide){
            this.asideHide.remove();
        }

        console.log($(".pBox"))
        if( $(".pBox")){
            $($(".pBox")).remove()
            console.log("remove")
        }

    }

}
//轮播图
var carouselImgs=["assets/img/pic_95.jpg","assets/img/pic_120.jpg","assets/img/pic_175.jpg","assets/img/pic_316.jpg",]
var carousel=new Carousel($(".nav")[0],carouselImgs,["assets/img/left.png","assets/img/right.png"]);
animation();
function animation() {
    requestAnimationFrame(animation)
    carousel.update();
}
//内容切换

var dataArr=[
    {pic:"assets/img/pic_329.jpg",des:"皇家royal canin H33功能型 美毛成猫粮 2kg",usedPrice:55,currentPrice:32},
    {pic:"assets/img/pic_164.jpg",des:"皇家royal canin H33功能型 美毛成猫粮 2kg",usedPrice:55,currentPrice:32},
    {pic:"assets/img/pic_44.jpg",des:"皇家royal canin H33功能型 美毛成猫粮 2kg",usedPrice:55,currentPrice:32},
    {pic:"assets/img/pic_293.jpg",des:"皇家royal canin H33功能型 美毛成猫粮 2kg",usedPrice:55,currentPrice:32},
    {pic:"assets/img/pic_12.jpg",des:"皇家royal canin H33功能型 美毛成猫粮 2kg",usedPrice:55,currentPrice:32},
    {pic:"assets/img/pic_276.jpg",des:"皇家royal canin H33功能型 美毛成猫粮 2kg",usedPrice:55,currentPrice:32},
    {pic:"assets/img/pic_69.jpg",des:"皇家royal canin H33功能型 美毛成猫粮 2kg",usedPrice:55,currentPrice:32},
    {pic:"assets/img/pic_152.jpg",des:"皇家royal canin H33功能型 美毛成猫粮 2kg",usedPrice:55,currentPrice:32}
]
    var selArr=$(".content2 .selector ul li")
console.log(selArr)
        for(var i=0;i<selArr.length;i++){
            selArr[i].setAttribute("index",i);
            console.log($("selArr[i]"))
            $(selArr[i]).on("mouseenter",selectorMouseenterHandler)
        }
        var preSelector=null;
        function selectorMouseenterHandler(e) {
            if(preSelector){
                preSelector.remove()
            }
            $(".content2 .page4").css("display","none")
          var pageContentWrap=  $("<ul class='clearfix'></ul>").appendTo($(".page1"));
            for(var i=0;i<8;i++){
               var pageConentItem= $("<li></li>").css({
                    borderBottom: "0.01rem solid #e7e7e7",
                    borderRight: "0.01rem solid #e7e7e7",
                    width: "1.97rem",
                    padding:"0.1rem",
                    height: "2.17rem",
                    float: "left"
                }).appendTo(pageContentWrap)
              var itemWrap= $("<a></a>").css({
                    width:" 2rem",
                textAlign: "center",
                marginBottom: "0.15rem"
                }).appendTo(pageConentItem);
              var picWrap= $("<div></div>").css({
                   width: "2rem",
                textAlign: "center",
                marginBottom: "0.15rem"
               }).appendTo(itemWrap);
                $("<img></img>").css({
                    width: "1.36rem",
                height:" 1.36rem",
                marginTop: "0.05rem",
                transition:" all .5s ease",
                border: "1px solid #fff"
                }).attr("src",dataArr[i].pic).appendTo(picWrap);
                $("<h1></h1>").css({
                    height:"0.32rem",
                overflow: "hidden",
                color:"#666",
                fontWeight: "400"
                }).text(dataArr[i].des).appendTo(itemWrap);
                $("<div></div>").css({
                    color:"red",
                fontSize: "0.16rem",
                marginTop:"0.05rem",
                }).text(dataArr[i].currentPrice).appendTo(itemWrap);

            }

            preSelector=pageContentWrap;

        }