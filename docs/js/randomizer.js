window.addEventListener("load",function(){const e=navigator.userAgent.match(/Chrome|Opera/)?".webp":"-min.png",t=["pic/FEDcre"+e,"pic/FEDknw"+e,"pic/FEDore"+e,"pic/FEDpwt"+e,"pic/FEDqic"+e,"pic/FEDvps"+e],i=["pic/RNDfed"+e,"pic/RNDgai3"+e,"pic/RNDgai4"+e,"pic/RNDmin"+e,"pic/RNDpia"+e,"pic/RNDstp"+e,"pic/RNDter"+e,"pic/RNDtrs3"+e,"pic/RNDtrs4"+e],c=["pic/TECcre"+e,"pic/TECgai"+e,"pic/TECknw"+e,"pic/TECore"+e,"pic/TECpia"+e,"pic/TECpow"+e,"pic/TECqic"+e,"pic/TECtyp"+e,"pic/TECvps"+e],n=["pic/ADVfedP"+e,"pic/ADVfedV"+e,"pic/ADVgai"+e,"pic/ADVknw"+e,"pic/ADVlab"+e,"pic/ADVminB"+e,"pic/ADVminV"+e,"pic/ADVore"+e,"pic/ADVqic"+e,"pic/ADVsecO"+e,"pic/ADVsecV"+e,"pic/ADVstp"+e,"pic/ADVtrsB"+e,"pic/ADVtrsV"+e,"pic/ADVtyp"+e],p=["pic/BOOgai"+e,"pic/BOOknw"+e,"pic/BOOlab"+e,"pic/BOOmin"+e,"pic/BOOnav"+e,"pic/BOOpia"+e,"pic/BOOpwt"+e,"pic/BOOqic"+e,"pic/BOOter"+e,"pic/BOOtrs"+e],r=["pic/FINbld"+e,"pic/FINfed"+e,"pic/FINgai"+e,"pic/FINsat"+e,"pic/FINsec"+e,"pic/FINtyp"+e],o={4:["pic/1"+e,"pic/2"+e,"pic/3"+e,"pic/4"+e,"pic/5"+e,"pic/6"+e,"pic/7"+e,"pic/8"+e,"pic/9"+e,"pic/10"+e],3:["pic/1"+e,"pic/2"+e,"pic/3"+e,"pic/4"+e,"pic/5"+e,"pic/6"+e,"pic/7"+e,"pic/8"+e],2:["pic/1"+e,"pic/2"+e,"pic/3"+e,"pic/4"+e,"pic/5_"+e,"pic/6_"+e,"pic/7_"+e]},a=6,l=9,m=6,s=2;function d(e){for(var t,i,c=e.length;c;)i=Math.floor(Math.random()*c--),t=e[c],e[c]=e[i],e[i]=t;return e}function u(){let e=window.innerWidth/20/2;document.getElementById("map").style.gridTemplateRows=(e+"px ").repeat(30)}function E(e){var o,u,E={};1==e&&function(){const e=window.location.href;e.indexOf("#!")>=0&&(E=function(e){for(var t=e.split("&"),i={},c=0;c<t.length;c++){var n=t[c].split("=");n.length>1?i[n[0]]=n[1]:i[n[0]]=null}return i}(e.slice(e.indexOf("#!")+2)))}(),o=E.FED,u=0,u=o||Math.floor(Math.random()*t.length),document.getElementById("FED").setAttribute("src",t[u]),function(e){for(var t=d(n),i=0;i<a;i++)document.getElementById("ADV"+i).setAttribute("src",t[i])}(),function(e){for(var t=d(c),i=0;i<l;i++)document.getElementById("BAS"+i).setAttribute("src",t[i])}(),function(e){for(var t=d(i),c=0;c<m;c++)document.getElementById("RND"+c).setAttribute("src",t[c])}(),function(e){for(var t=d(r),i=0;i<s;i++)document.getElementById("FIN"+i).setAttribute("src",t[i])}(),function(e){let t=document.getElementById("booster"),i=document.getElementById("pNumbers").value,c=Number(i)+3,n=d(p);t.childElementCount!=c&&Array.prototype.forEach.call(document.getElementsByClassName("booster"),function(e){e.style.display="none"}),t.style.setProperty("grid-template-columns","1fr ".repeat(c));for(var r=0;r<c;r++){let e=document.getElementById("BST"+r);e.setAttribute("src",n[r]),e.parentElement.style.display="block",Array.prototype.forEach.call(e.parentElement.classList,function(t){5<t.lastIndexOf("er")&&e.parentElement.classList.remove(t)}),e.parentElement.classList.add("booster"+i+"er")}}()}document.getElementById("setup").addEventListener("click",function(){E()}),document.getElementById("hide").addEventListener("click",function(){document.getElementsByTagName("menu")[0].style.setProperty("display","none");var e=document.getElementsByTagName("main")[0].addEventListener("click",function(){document.getElementsByTagName("menu")[0].style.setProperty("display","block"),document.getElementsByTagName("main")[0].removeEventListener("click",e)})}),document.getElementById("mapGen").addEventListener("click",function(){!function(e){u(),2==Number(e)&&(document.getElementById("mapTile9").style.display="none");let t=d(o[e]),i=0;Array.prototype.forEach.call(t,t=>{(3!=e||2!=i&&6!=i)&&(2!=e||2!=i&&6!=i)||(document.getElementById("mapTile"+i).style.display="none",i++);let c=60*Math.floor(6*Math.random());document.getElementById("map"+i).setAttribute("src",t),document.getElementById("map"+i).style.transform="rotate("+c+"deg)",i++})}(document.getElementById("pNumbers").value)});let y=null;window.addEventListener("resize",function(){clearTimeout(y),y=setTimeout(function(){u()},300)}),E(!0)});