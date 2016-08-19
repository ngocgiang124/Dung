var author=["Lê-nin","A","B"];
var quote={
    "Lê-nin":"Học, học nữa, học mãi",
    "A":"Thời gian là vàng",
    "B":"Trên con đường thành công không có dấu chân của kẻ lười biếng"
};
$("button").click(function () {
    var a=Math.floor(Math.random()*3);
    var b=$("#2").html(author[a]);
    $("#1").html(quote[b]);
});
