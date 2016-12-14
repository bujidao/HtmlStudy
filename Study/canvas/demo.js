/**
 * Created by ZJing on 2017/4/15.
 */


<!--======================================================-->
<!--时钟...百分比-->
<!--======================================================-->
var c=document.getElementById("cav");
var cxt=c.getContext("2d");


//    刻度
var pointerDotted = function(x,y,radius){
    for (var i =0;i<60;i++){
        cxt.beginPath();
        cxt.moveTo(x + radius*Math.cos(i*6*Math.PI/180),y + radius*Math.sin(i*6*Math.PI/180));
        cxt.lineTo(x + (radius-12)*Math.cos(i*6*Math.PI/180),y + (radius-12)*Math.sin(i*6*Math.PI/180));
        cxt.lineWidth = 2;
        if(i%5 == 0){
            cxt.lineTo(x + (radius-20)*Math.cos(i*6*Math.PI/180),y + (radius-20)*Math.sin(i*6*Math.PI/180));
            cxt.lineWidth = 2.5;
        }
        cxt.stroke();
        cxt.closePath();
    }
}
var flag = true;
//    指针
var pointer = function(x,y,radius,lineWidth,nowTime,color,pointType){//per。。。分秒为6度，时为30度

    cxt.beginPath();
    cxt.lineWidth = lineWidth;
    var now = new Date();
    var nowSecond = now.getSeconds();
    var nowMinutes = Math.floor(now.getMinutes() + nowSecond/60);
    if(pointType == "sec"){
        if(nowTime == nowMinutes){
            flag = !flag;
            console.log(flag);
        }else{
            console.log(flag);
        }
        if(flag){
            cxt.arc(x,y,radius,(nowMinutes)*6*Math.PI/180 - .5*Math.PI,(nowTime)*6*Math.PI/180 - .5*Math.PI,false);
        }else{
            cxt.arc(x,y,radius,(nowTime)*6*Math.PI/180 - .5*Math.PI,(nowMinutes)*6*Math.PI/180 - .5*Math.PI,false);
        }
    }else if(pointType == "min"){
        cxt.arc(x,y,radius,1.5*Math.PI,(nowTime)*6*Math.PI/180 - .5*Math.PI,false);
    }else if(pointType == "hou"){
        cxt.arc(x,y,radius,1.5*Math.PI,(nowTime)*30*Math.PI/180 - .5*Math.PI,false);
    }

    // cxt.arc(x,y,radius,1.5*Math.PI,(nowTime)*per*Math.PI/180 - .5*Math.PI,false);
//            渐变
    var linGrad = cxt.createLinearGradient(
        x, y - radius - lineWidth, x, y + radius + lineWidth
    );
    linGrad.addColorStop(0.0, '#ec847a');
    linGrad.addColorStop(0.5, '#9bc4eb');
    linGrad.addColorStop(1.0, '#eccd23');
    cxt.strokeStyle = linGrad;

    cxt.lineJoin = "round";
    cxt.lineCap = "round";//两端圆弧形
    cxt.stroke();
    cxt.closePath();
}
//            封装
var timer = function(){
    var now = new Date();
    var nowSecond = now.getSeconds();
    var nowMinutes = now.getMinutes() + nowSecond/60;
    var nowHouse = now.getHours()%12 + nowMinutes/60;
    var house = now.getHours()%12;
    var min = now.getMinutes();
    cxt.clearRect(0,0,1000,600);//清空clearReact(x,y,width,height);
    pointerDotted(500,300,200);
    pointer(500,300,170,13,nowSecond,"#adff2f","sec");
    pointer(500,300,135,14,nowMinutes,"#f00","min");
    pointer(500,300,95,15,nowHouse,"#ee82ee","hou");
    console.log(house +":"+ min+":"+nowSecond);
}

//    每0.1s刷新
    setInterval(function(){
        timer();
    },1000);