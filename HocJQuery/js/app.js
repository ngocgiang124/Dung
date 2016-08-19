/* đổi thẻ p thành h1
$("#id1").html("<h1>ảnh</h1>")
 */

/* click hoặc di chuột vào button sẽ đổi thành click you
$("#btn").hover/click(function () {
    $("#btn").text("click you!");
})*/

/* lấy các giá trị trong thẻ mở (name, class, id...)
var id = $("#id1").attr('id');
alert(id); */

/* lấy thuộc tính của thẻ nào đó
var src = $("script").attr('src');
alert(src);*/

/*var src = $("script").attr('fuck');
alert(src);*/

/* hover vào ảnh này sẽ đổi sang ảnh khác
$("#anh1").hover(function () {
    $("#anh1").attr('src','img/success_kid_has_grown_up_640_03_1_2kk8g0o6k08o9.jpg');
})
*/
/* di chuột vào ảnh này đổi sang ảnh khác, di chuột ra thì quay lại ảnh ban đầu
$("#anh1").mouseenter(function () {
    $("#anh1").attr('src','img/success_kid_has_grown_up_640_03_1_2kk8g0o6k08o9.jpg');
})
$("#anh1").mouseleave(function () {
    $("#anh1").attr('src','img/1434180134-xdmvde_thuong_20_ixzv.jpg');
}) */

/* $('doituong').css('style','value');
eg: ('#btn').click(function(){
$('body').css('textAlign','center')
 */
/*bật tắt đèn*/
$("#bat").click(function () {
    $("body").css('backgroundColor','white');
})
$("#tat").click(function () {
    $("body").css('backgroundColor','black')
})


/*  setTimeout(function, 6000); (function chạy 1 lần sau 6s)
    setInterval(function,1000); (chạy liên tục sau 1s)

 eg: *//* khi click tắt đèn, sẽ tắt sau 5s
$("#tat").click(function () {
 setTimeout(function(){
 $("body").css('backgroundColor','black')
 },5000);
})
*/
 /* mỗi giây tăng h1 lên 1 đơn vị
var time=0;
$("h1").text(time);
setInterval(function () {
            time++;
            $("h1").text(time);
        },1000);
*/

 /*clearInterval(demlui); (dừng hàm đang chạy) demlui=setInterval.....
   clearTimeout();
  */

/* Phao hoa
var time=10;
$("h1").css('color','blue');
$("h1").text(time);
demlui=setInterval(function () {
 time--;
 $("h1").text(time);
 if(time==0)
 {
  clearInterval(demlui);
  $("h1").html('<img src="img/feuerwerk-0062.gif" style="width:400px;height: 400px">')
 }
},1000)
$("img").css('width','500px');
$("img").css('height','300px');
*/

/*
var time=0;
var minute=0;
$("#2").text(time + "giây");
setInterval(function () {
    time++;
    $("#2").text(time + "giây");
    if(time==60){
        time=0;
        $("#2").text(time+"giây");
        for(time=-1;time==60;time++)
        {
            $("#2").text(time + "giây");
        }
        minute++;
        $("#1").text(minute+"phút");
    }
},1000);
*/


