var Carousel=(function () {

//            所有li的样式
    var liStyle={
        width: "20px",
        height: "20px",
        borderRadius:"20px",
        backgroundColor:"rgba(255,0,0,0.6)",
        border: "1px solid #FF0000",
        float: "left",
        lineHeight: "20px",
        textAlign: "center",
        marginLeft: "20px",
        color:"white"
    };
//            ul的样式
    var ulStyle={
        margin:0,
        padding:0,
        listStyle: "none",
        position: "absolute",
        bottom: "20px"
    };
//            轮播图片的容器样式
    var imgConStyle={
        position: "absolute",
        left:"0px",
        background:"red"
    };
//            最大容器的样式
    var maskDivStyle={

        overflow: "hidden",
        position:"relative" ,
       /* margin: "auto",*/
        backgroundColor: "antiquewhite"
    };

    function Carousel(parent,list,bnList) {
        this.source=list;
        console.log(parent)
        this.initCarousel(parent,bnList);
    }
    Carousel.prototype={
        imageList:[],
        carousel:null,
        _width:0,
        _height:0,
        _source:null,
        img:null,
        position:0,
        direction:"",
        bool:false,
        autoBool:false,
        time:270,
        set source(value){
            if(!value)return;
            this._source=value;
            this.width=0;
            this.height=0;
            this.direction="";
            this.position=0;
            if(this.img){
                this.img.removeEventListener("load",this.loadHandler);
            }
            this.imageList.length=0;
            this.loadImg(value);
        },
        get source(){
            return this._source;
        },
        set width(value){
            this._width=value;
            if(value>0){
                this.carousel.style.width=value+"px";
                for(var i=0;i<this.carousel.firstElementChild.children.length;i++){
                    this.carousel.firstElementChild.children[i].style.width=value+"px";
                }
            }
        },
        get width(){
            return this._width
        },
        set height(value){
            this._height=value;
            if(value>0){
                this.carousel.firstElementChild.style.height=this.carousel.style.height=value+"px";
                for(var i=0;i<this.carousel.firstElementChild.children.length;i++){
                    this.carousel.firstElementChild.children[i].style.height=value+"px";
                }
                this.resetBnPosition();
            }
        },
        get height(){
            return this._height
        },
        loadImg:function (list) {
            this.img=new Image();
            this.img.self=this;
            this.img.num=0;
            this.img.list=list;
            this.img.addEventListener("load",this.loadHandler);
            this.img.src=list[this.img.num];
        },
        loadHandler:function (e) {
            this.self.imageList.push(this.cloneNode(false));
            this.num++;
            if(this.num>this.list.length-1){
                this.self.finishLoad();
                return;
            }
            this.src=this.list[this.num];
        },
        finishLoad:function () {
            var imgCon=this.carousel.firstElementChild;
            var ul=this.carousel.lastElementChild;

            this.clearCon(imgCon);
            this.clearCon(ul);
            imgCon.appendChild(this.imageList[0]);
            if(this.width===0){
                this.carousel.style.width=this.imageList[0].width+"px";
                this._width=this.imageList[0].width;
            }else{
                this.carousel.style.width=this.width+"px";
                for(var j=0;j<imgCon.children.length;j++){
                    imgCon.children[j].style.width=this.width+"px";
                }
            }
            if(this.height===0){
                imgCon.style.height=this.carousel.style.height=this.imageList[0].height+"px";
                this._height=this.imageList[0].height;
            }else{
                imgCon.style.height=this.carousel.style.width=this.height+"px";
                for(var s=0;s<imgCon.children.length;s++){
                    imgCon.children[s].style.height=this.height+"px";
                }
            }
            for(var i=0;i<this.imageList.length;i++){
                var li=document.createElement("li");
                Object.assign(li.style,liStyle);
                ul.appendChild(li);
            }
            ul.addEventListener("click",this.ulClickHandler);
            ul.style.left=( this.carousel.offsetWidth-ul.offsetWidth)/2+"px";

            this.resetBnPosition();
        },
        clearCon:function (con) {
            var len=con.children.length;
            for(var i=0;i<len;i++){
                con.firstElementChild.remove();
            }
        },
        initCarousel:function (parent,bnList) {
            if(!this.carousel){
                this.carousel=document.createElement("div");
                Object.assign(this.carousel.style,maskDivStyle);
                var imgCon=document.createElement("div");
                Object.assign(imgCon.style,imgConStyle);
                this.carousel.appendChild(imgCon);
                for(var i=0;i<bnList.length;i++){
                    var img=new Image();
                    img.self=this;
                    img.addEventListener("load",this.bnLoadHandler);
                    img.src=bnList[i];
                    img.addEventListener("click",this.bnClickHandler);
                    var bnStyle={
                        position: "absolute"
                    };
                    if(i===0){
                        bnStyle.left="10px";
                    }else{
                        bnStyle.right="10px";
                    }
                    Object.assign(img.style,bnStyle);
                    this.carousel.appendChild(img);
                }
                var ul=document.createElement("ul");
                ul.self=this;
                Object.assign(ul.style,ulStyle);
                this.carousel.appendChild(ul);
                parent.appendChild(this.carousel);
            }
            return this.carousel;
        },
        bnLoadHandler:function (e) {
            this.self.resetBnPosition();
        },
        resetBnPosition:function () {
            //轮播图第一个子元素的top（左边的箭头按钮）等于轮播图第二个子元素的top都等于轮播图的高度减去箭头本身的高度除以2
            this.carousel.children[1].style.top=this.carousel.children[2].style.top=(this.height-this.carousel.children[1].offsetHeight)/2+"px";
            console.log(this)
        },
        bnClickHandler:function (e) {

            this.self.bool
            if(this.self.bool) return;
            console.log(this.self.carousel.children[1])
            if(this===this.self.carousel.children[1]){
                console.log("children[1]")
                this.self.direction="right";
                this.self.position--;
                if(this.self.position<0) this.self.position=this.self.imageList.length-1;
            }else{
                console.log("left")
                this.self.direction="left";
                this.self.position++;
                if(this.self.position===this.self.imageList.length) this.self.position=0;
            }
            this.self.createNextImg();
        },
        ulClickHandler:function (e) {
            if(!e.target instanceof HTMLLIElement) return;
            var arr=Array.from(this.children);
            var index=arr.indexOf(e.target);
            if(index===this.self.position) return;
            this.self.direction=index>this.self.position ? "left" : "right";
            this.self.position=index;
            this.self.createNextImg();
        },
        createNextImg:function () {
            var imgCon= this.carousel.firstElementChild;

            imgCon.style.width=this.carousel.offsetWidth*2+"px";
            console.log(imgCon.style.width)
            if(this.direction==="left"){
                console.log(this.imageList[this.position])
                imgCon.appendChild(this.imageList[this.position]);
                imgCon.style.left="0px";
            }else if(this.direction==="right"){
                console.log(this.imageList[this.position])
                console.log(imgCon.firstElementChild)
                imgCon.insertBefore(this.imageList[this.position],imgCon.firstElementChild);
                imgCon.style.left=-this.carousel.offsetWidth+"px";
                console.log( imgCon.style.left)
            }
            console.log("createNextImg")
            this.bool=true;
        },
        update:function () {
            if(!this.bool) return;
            var imgCon= this.carousel.firstElementChild;
            if(this.direction==="left"){
                imgCon.style.left=imgCon.offsetLeft-20+"px";
                if(imgCon.offsetLeft<-this.carousel.offsetWidth){
                    imgCon.style.left=-this.carousel.offsetWidth+"px";
                    this.bool=false;
                    this.direction="";
                    imgCon.firstElementChild.remove();
                    imgCon.style.left="0px";
                }
            }else if(this.direction==="right"){
                imgCon.style.left=imgCon.offsetLeft+20+"px";
                if(imgCon.offsetLeft>=0){
                    imgCon.style.left="0px";
                    this.bool=false;
                    this.direction="";
                    imgCon.lastElementChild.remove();
                }
            }
        }
    };
    Carousel.prototype.constructor=Carousel;
    return Carousel;
})();