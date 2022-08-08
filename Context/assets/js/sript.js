let back=document.querySelector(".back")
let body=document.querySelector("body") 
back.addEventListener("click", ()=>{ 
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
     body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
})   
let font=document.querySelector(".font")
let lifont=document.querySelectorAll(".lifont") 
lifont.forEach((fontt)=>font.addEventListener("click",()=>{ 
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    fontt.style.color="rgb(" + x + "," + y + "," + z + ")";
   }))   
  
     
   



  let links=document.querySelectorAll('.links')
 let active= document.querySelectorAll('.active')
 links.forEach((link)=>link.addEventListener('mouseleave',function(){
    this.classList.add("links")
 })) 

 active.forEach((activs)=>activs.addEventListener('mouseleave',function(){
    this.classList.remove("active")
 }))


 links.forEach((link)=>link.addEventListener('mouseenter',function(){
    this.classList.remove("links")
 })) 

 active.forEach((activs)=>activs.addEventListener('mouseenter',function(){
    this.classList.add("active")
 }))

   
    

   
   
   let contextMenu=document.querySelector(".context")
   document.addEventListener("contextmenu", e=>{
   e.preventDefault();
   let x=e.offsetX, y=e.offsetY,
   winWidth=window.innerWidth,
   winHeight=window.innerHeight,
   cmWidth=contextMenu.offsetWidth;
   cmHeight=contextMenu.offsetHeight;
   x=x>winWidth-cmWidth ? winWidth-cmWidth : x;
   y=y>winHeight-cmHeight ? winHeight-cmHeight : y;

  contextMenu.style.left=`${x}px`;
  contextMenu.style.right=`${x}px`;
    
    contextMenu.style.top =`${y}px`;

   contextMenu.style.visibility="visible"
   });
   