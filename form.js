alert("welcome user here");

var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
var m=document.getElementById('toggle-btn1');
var n=document.getElementById('toggle-btn');
var loader = document.getElementById("loader");


function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
    m.style.color='black';
    n.style.color='#F3C693'; 
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
    n.style.color='black';
    m.style.color='#F3C693';
}
function password(){
    loader.style.opacity = '1';
    var check=document.getElementById('pass').value;
    check.length >=3 ?  loader.style.color = 'crimson':loader.style.opacity = '1'
    check.length >= 6 ? loader.style.color = '#be7312':loader.style.opacity = '1';

    check.length >= 10 ? loader.style.opacity = '0' : loader.style.opacity = '1';
   
    var tick =document.getElementById('tick');
    if(check.length ==0){
    loader.style.opacity = '0';
    }
    else if(check.length >=10)
    {
        tick.style.opacity = '1';
    }else{
        tick.style.opacity = '0';

    }
}
function pcheck(){
    var tick =document.getElementById('tick1');
    var check=document.getElementById('pass').value;
    var recheck = document.getElementById('confirmation').value;
    var load1=document.getElementById('loader1');
    load1.style.opacity = '1';
    if(recheck.length ==0){
        load1.style.opacity = '0';
    }
    else if(check==recheck){
        tick1.style.opacity = '1';
        load1.style.opacity = '0';
    }else{
        load1.style.opacity = '1';
        tick1.style.opacity = '0';
    }
}
function l1(){
    var a=document.getElementById('line1');
    var b=document.getElementById('line');
    b.style.borderBottom = ' 1px solid #be7312';
    a.style.borderBottom = ' 1px solid #999';
    b.style.transformOrigin='center';
    b.style.transition='all 0.1s ease';
  
}
function l2(){
 
    var a=document.getElementById('line1');
    var b=document.getElementById('line');
    a.style.borderBottom = ' 1px solid #be7312';
    b.style.borderBottom = ' 1px solid #999';
    a.style.transform='scalex(1)';
    a.style.transformOrigin='center';
    b.style.transition='all 0.1s ease';
  
}
// var modal = document.getElementById('login-form');
// window.onclick = function(event) 
// {
//     if (event.target == modal) 
//     {
//         modal.style.display = "block";
//     }
// }