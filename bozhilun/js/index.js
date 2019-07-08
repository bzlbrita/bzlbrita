/*我的账户菜单开始*/
function menuFix() { 
var sfEls = document.getElementById("navrmenu").getElementsByTagName("li"); 
for (var i=0; i<sfEls.length; i++) { 
sfEls[i].onmouseover=function() { 
this.className+=(this.className.length>0? " ": "") + "sfhover"; 
} 
sfEls[i].onMouseDown=function() { 
this.className+=(this.className.length>0? " ": "") + "sfhover"; 
} 
sfEls[i].onMouseUp=function() { 
this.className+=(this.className.length>0? " ": "") + "sfhover"; 
} 
sfEls[i].onmouseout=function() { 
this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"), 
""); 
} 
} 
} 

/*我的账户菜单结束*/

/*banner开始*/
function SlideShow(c) {
    var a = document.getElementById("slideContainer"), f = document.getElementById("slidesImgs").getElementsByTagName("li"), h = document.getElementById("slideBar"), n = h.getElementsByTagName("li"), d = f.length, c = c || 3000, e = lastI = 0, j, m;
    function b() {
        m = setInterval(function () {
            e = e + 1 >= d ? e + 1 - d : e + 1;
            g()
        }, c)
    }
    function k() {
        clearInterval(m)
    }
    function g() {
        f[lastI].style.display = "none";
        n[lastI].className = "";
        f[e].style.display = "block";
        n[e].className = "on";
        lastI = e
    }
    f[e].style.display = "block";
    a.onmouseover = k;
    a.onmouseout = b;
    h.onmouseover = function (i) {
        j = i ? i.target : window.event.srcElement;
        if (j.nodeName === "LI") {
            e = parseInt(j.innerHTML, 7) - 1;
            g()
        }
    };
    b()
}
;
/*banner结束*/



/*门票 周边景区开始*/
function T(id){ return document.getElementById(id); }  
function Tbrita(o,brita){ return o.getElementsByTagName(brita); }  
function Tclass(o,c){ for(var i=0,r=[],t=o.getElementsByTagName("*");i<t.length;i++){ if(t[i].className==c){ r.push(t[i]); } } return r; }  
function britaChange(obj,id)  
{  
var arrayli= Tbrita(obj.parentNode,'li'); //获取li数组  
var arrayul = Tbrita(T(id),'ul'); //获取ul数组  
for(i=0;i<arrayul.length;i++)  
{   
if(obj==arrayli[i])
{obj.className = "cli"; arrayul[i].className = "brita_show";  
if(i==0){obj.className="cli0"}  
if(i==5){obj.className="cli5"}  
}else  
{arrayli[i].className = ""; arrayul[i].className = "brita_hide";}  
}  
}  
function dobritaCh(evt,navid,cnid)
{evt=evt||window.event;  
var cur=Tclass(T(navid),'cli0')[0]||Tclass(T(navid),'cli')[0]||Tclass(T(navid),'cli5')[0];  
if(evt.keyCode==37)
{    //37左  
for(var i=0,k=Tbrita(T(navid),'li'),u=Tbrita(T(cnid),'ul');i<k.length;i++){  //遍历#nav下li  
if(k[i]==cur){//如果是当前项,切换到下一个  
k[i].className='';  
k[i-1].className='cli';  
u[i].className='brita_hide';  
u[i-1].className='brita_show';  
if(k[0]){k[-1]=k[5];  
u[-1]=u[5];  
}  
}  
}         
}  
else if(evt.keyCode==39){   //39右  
for(var i=0,k=Tbrita(T(navid),'li'),u=Tbrita(T(cnid),'ul');i<k.length;i++){  //遍历#nav下li  
if(k[i]==cur){  //如果是当前项,切换到下一个  
k[i].className='';  
k[i+1].className='cli';  
u[i].className='brita_hide';  
u[i+1].className='brita_show';  
}if(k[5]){k[6]=k[0];  
u[6]=u[0];  
}  
}  
}  
}  
/*门票 周边景区结束*/

/*当地特色开始*/
function L(id){ return document.getElementById(id); }  
function Lglasslock(o,glasslock){ return o.getElementsByTagName(glasslock); }  
function Lclass(o,c){ for(var i=0,r=[],t=o.getElementsByTagName("*");i<t.length;i++){ if(t[i].className==c){ r.push(t[i]); } } return r; }  
function glasslockChange(obj,id)  
{  
var arrayli= Lglasslock(obj.parentNode,'li'); //获取li数组  
var arrayul = Lglasslock(L(id),'ul'); //获取ul数组  
for(i=0;i<arrayul.length;i++)  
{   
if(obj==arrayli[i])
{obj.className = "cli"; arrayul[i].className = "glasslock_show";  
if(i==0){obj.className="cli0"}  
if(i==7){obj.className="cli7"}  
}else  
{arrayli[i].className = ""; arrayul[i].className = "glasslock_hide";}  
}  
}  
function doglasslockCh(evt,navid,cnid)
{evt=evt||window.event;  
var cur=Lclass(L(navid),'cli0')[0]||Lclass(L(navid),'cli')[0]||Lclass(L(navid),'cli7')[0];  
if(evt.keyCode==37)
{    //37左  
for(var i=0,k=Lglasslock(L(navid),'li'),u=Lglasslock(L(cnid),'ul');i<k.length;i++){  //遍历#nav下li  
if(k[i]==cur){//如果是当前项,切换到下一个  
k[i].className='';  
k[i-1].className='cli';  
u[i].className='glasslock_hide';  
u[i-1].className='glasslock_show';  
if(k[0]){k[-1]=k[7];  
u[-1]=u[7];  
}  
}  
}         
}  
else if(evt.keyCode==39){   //39右  
for(var i=0,k=Lglasslock(L(navid),'li'),u=Lglasslock(L(cnid),'ul');i<k.length;i++){  //遍历#nav下li  
if(k[i]==cur){  //如果是当前项,切换到下一个  
k[i].className='';  
k[i+1].className='cli';  
u[i].className='glasslock_hide';  
u[i+1].className='glasslock_show';  
}if(k[7]){k[8]=k[0];  
u[8]=u[0];  
}  
}  
}  
} 
/*当地特色结束*/

/*侠游视频开始*/
function V(id){ return document.getElementById(id); }  
function Vseverin(o,severin){ return o.getElementsByTagName(severin); }  
function Vclass(o,c){ for(var i=0,r=[],t=o.getElementsByTagName("*");i<t.length;i++){ if(t[i].className==c){ r.push(t[i]); } } return r; }  
function severinChange(obj,id)  
{  
var arrayli= Vseverin(obj.parentNode,'li'); //获取li数组  
var arrayul = Vseverin(V(id),'ul'); //获取ul数组  
for(i=0;i<arrayul.length;i++)  
{   
if(obj==arrayli[i])
{obj.className = "cli"; arrayul[i].className = "severin_show";  
if(i==0){obj.className="cli0"}  
if(i==6){obj.className="cli6"}  
}else  
{arrayli[i].className = ""; arrayul[i].className = "severin_hide";}  
}  
}  
function doseverinCh(evt,navid,cnid)
{evt=evt||window.event;  
var cur=Vclass(V(navid),'cli0')[0]||Vclass(V(navid),'cli')[0]||Vclass(V(navid),'cli6')[0];  
if(evt.keyCode==37)
{    //37左  
for(var i=0,k=Vseverin(V(navid),'li'),u=Vseverin(V(cnid),'ul');i<k.length;i++){  //遍历#nav下li  
if(k[i]==cur){//如果是当前项,切换到下一个  
k[i].className='';  
k[i-1].className='cli';  
u[i].className='severin_hide';  
u[i-1].className='severin_show';  
if(k[0]){k[-1]=k[6];  
u[-1]=u[6];  
}  
}  
}         
}  
else if(evt.keyCode==39){   //39右  
for(var i=0,k=Vseverin(V(navid),'li'),u=Vseverin(V(cnid),'ul');i<k.length;i++){  //遍历#nav下li  
if(k[i]==cur){  //如果是当前项,切换到下一个  
k[i].className='';  
k[i+1].className='cli';  
u[i].className='severin_hide';  
u[i+1].className='severin_show';  
}if(k[6]){k[7]=k[0];  
u[7]=u[0];  
}  
}  
}  
} 
/*侠游视频结束*/

/*飞机票 火车票开始*/
function F(id){ return document.getElementById(id); }  
function Fwmf(o,wmf){ return o.getElementsByTagName(wmf); }  
function Fclass(o,c){ for(var i=0,r=[],t=o.getElementsByTagName("*");i<t.length;i++){ if(t[i].className==c){ r.push(t[i]); } } return r; }  
function wmfChange(obj,id)  
{  
var arrayli= Fwmf(obj.parentNode,'li'); //获取li数组  
var arrayul = Fwmf(F(id),'ul'); //获取ul数组  
for(i=0;i<arrayul.length;i++)  
{   
if(obj==arrayli[i])
{obj.className = "cli"; arrayul[i].className = "wmf_show";  
if(i==0){obj.className="cli0"}  
if(i==6){obj.className="cli6"}  
}else  
{arrayli[i].className = ""; arrayul[i].className = "wmf_hide";}  
}  
}  
function dowmfCh(evt,navid,cnid)
{evt=evt||window.event;  
var cur=Fclass(F(navid),'cli0')[0]||Fclass(F(navid),'cli')[0]||Fclass(F(navid),'cli6')[0];  
if(evt.keyCode==37)
{    //37左  
for(var i=0,k=Fwmf(F(navid),'li'),u=Fwmf(F(cnid),'ul');i<k.length;i++){  //遍历#nav下li  
if(k[i]==cur){//如果是当前项,切换到下一个  
k[i].className='';  
k[i-1].className='cli';  
u[i].className='wmf_hide';  
u[i-1].className='wmf_show';  
if(k[0]){k[-1]=k[6];  
u[-1]=u[6];  
}  
}  
}         
}  
else if(evt.keyCode==39){   //39右  
for(var i=0,k=Fwmf(F(navid),'li'),u=Fwmf(F(cnid),'ul');i<k.length;i++){  //遍历#nav下li  
if(k[i]==cur){  //如果是当前项,切换到下一个  
k[i].className='';  
k[i+1].className='cli';  
u[i].className='wmf_hide';  
u[i+1].className='wmf_show';  
}if(k[6]){k[7]=k[0];  
u[7]=u[0];  
}  
}  
}  
} 
/*飞机票 火车票结束*/

/*精品酒店开始*/
function F(id){ return document.getElementById(id); }  
function Fother(o,other){ return o.getElementsByTagName(other); }  
function Fclass(o,c){ for(var i=0,r=[],t=o.getElementsByTagName("*");i<t.length;i++){ if(t[i].className==c){ r.push(t[i]); } } return r; }  
function otherChange(obj,id)  
{  
var arrayli= Fother(obj.parentNode,'li'); //获取li数组  
var arrayul = Fother(F(id),'ul'); //获取ul数组  
for(i=0;i<arrayul.length;i++)  
{   
if(obj==arrayli[i])
{obj.className = "cli"; arrayul[i].className = "other_show";  
if(i==0){obj.className="cli0"}  
if(i==6){obj.className="cli6"}  
}else  
{arrayli[i].className = ""; arrayul[i].className = "other_hide";}  
}  
}  
function dootherCh(evt,navid,cnid)
{evt=evt||window.event;  
var cur=Fclass(F(navid),'cli0')[0]||Fclass(F(navid),'cli')[0]||Fclass(F(navid),'cli6')[0];  
if(evt.keyCode==37)
{    //37左  
for(var i=0,k=Fother(F(navid),'li'),u=Fother(F(cnid),'ul');i<k.length;i++){  //遍历#nav下li  
if(k[i]==cur){//如果是当前项,切换到下一个  
k[i].className='';  
k[i-1].className='cli';  
u[i].className='other_hide';  
u[i-1].className='other_show';  
if(k[0]){k[-1]=k[6];  
u[-1]=u[6];  
}  
}  
}         
}  
else if(evt.keyCode==39){   //39右  
for(var i=0,k=Fother(F(navid),'li'),u=Fother(F(cnid),'ul');i<k.length;i++){  //遍历#nav下li  
if(k[i]==cur){  //如果是当前项,切换到下一个  
k[i].className='';  
k[i+1].className='cli';  
u[i].className='other_hide';  
u[i+1].className='other_show';  
}if(k[6]){k[7]=k[0];  
u[7]=u[0];  
}  
}  
}  
} 