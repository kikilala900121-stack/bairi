(function(){
  let armed=false;
  const APP='https://kikilala900121-stack.github.io/bairi/';
  function arm(){
    armed=!armed;
    document.documentElement.dataset.bairiPicker=armed?'on':'off';
    if(armed) alert('百日繪一鍵選圖已開啟：點一下 Google 圖片中的目標圖片即可回百日繪。');
  }
  function pick(e){
    if(!armed)return;
    const img=e.target&&e.target.closest?e.target.closest('img'):null;
    if(!img)return;
    e.preventDefault();e.stopPropagation();
    const src=img.currentSrc||img.src;
    if(!src||!/^https?:/i.test(src))return;
    const w=window.open(APP+'?googleImage='+encodeURIComponent(src),'_blank');
    if(!w)location.href=APP+'?googleImage='+encodeURIComponent(src);
    armed=false;
    document.documentElement.dataset.bairiPicker='off';
  }
  document.addEventListener('click',pick,true);
  const b=document.createElement('button');
  b.textContent='⚡ 百日繪選圖';
  Object.assign(b.style,{position:'fixed',right:'14px',bottom:'18px',zIndex:2147483647,padding:'10px 14px',border:'0',borderRadius:'999px',background:'#111',color:'#fff',fontSize:'14px',fontWeight:'700',boxShadow:'0 3px 14px #0005',cursor:'pointer'});
  b.onclick=arm;
  document.documentElement.appendChild(b);
})();