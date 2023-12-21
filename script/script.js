let moveLens=(e)=>{
let source=document.querySelector(".zoomContainer .source");
let result=document.querySelector(".zoomContainer .result");
let mouseX=e.clientX-(source.offsetLeft);
let mouseY=e.clientY-(source.offsetTop);
let lens=document.querySelector(".zoomContainer .source .lens")
lens.style.left=mouseX-lens.offsetWidth/2+"px";
lens.style.top=mouseY-lens.offsetHeight/2+"px";
if(lens.offsetLeft<0)
lens.style.left="0px";
if(lens.offsetTop<0)
lens.style.top="0px";
if(lens.offsetLeft>source.offsetWidth-lens.offsetWidth)
lens.style.left=source.offsetWidth-lens.offsetWidth+"px";
if(lens.offsetTop>source.offsetHeight-lens.offsetHeight)
lens.style.top=source.offsetHeight-lens.offsetHeight+"px";
 
let cx=result.offsetWidth/lens.offsetWidth;
let cy=result.offsetHeight/lens.offsetHeight;
result.style.backgroundImage=getComputedStyle(source).backgroundImage;
result.style.backgroundSize=source.offsetWidth*cx+"px "+source.offsetHeight*cy+"px";
result.style.backgroundPosition="-"+(lens.offsetLeft*cx)+"px "+"-"+(lens.offsetTop*cy)+"px";
}
