demo.onclick=function () {
    var usename=un.value;
    var password=pw.value;
    if (usename=="admin" && password=="12345")
      {
        document.getElementById("kq").innerHTML = "Logged in successfully!"
    }
    else{
        document.getElementById("kq").innerHTML="My Usename or My Password not true."
    }
}