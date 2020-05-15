/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
hourIndicator = $("#hour");
minIndicator  = $("#min");
secIndicator  = $("#sec");

days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
clockTime = {
    sec :0,
    min:0,
    hour:0,
    start:function(){
        d = new Date();
        this.hour = d.getHours();
        if(this.hour > 12){
            this.hour = this.hour%12;
        }
        this.min = d.getMinutes();
        this.sec = d.getSeconds();
        this.rotate();
    },
    rotate : function(){
        minIndicator.css({'transform' : 'rotate('+ (this.min*6) +'deg)'});
        secIndicator.css({'transform' : 'rotate('+ (this.sec*6) +'deg)'});
        hourIndicator.css({'transform' : 'rotate('+ (this.hour*30 + (this.min/2)) +'deg)'});
//        console.log('H:'+this.hour+' === G:'+this.hour*30);
//        console.log('M:'+this.min+' === G:'+this.min*6);
    }
};
t = setInterval(function(){
    clockTime.start();
},1000);

date = new Date();
$(".day-num").html(date.getDate());
$(".day").html(days[date.getDay()]);
console.log(date.getDay());


