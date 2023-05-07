function login(){
    var username=document.getElementById("username").value;
    var pass=document.getElementById("pass1").value;
    if(username===""){
        alert("请输入用户名");
    }else if(pass===""){
        alert("请输入密码");
    }else if(username==="17885378825"&&pass==="pjg"){
        alert("登录成功!");
        window.location.href='zyIndex.html';
    }else{
        alert("请输入正确的用户名和密码");
    }
}