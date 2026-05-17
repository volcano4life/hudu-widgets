;(function(){
  function resizeIframe(id, h){
    var f = document.getElementById(id) || document.querySelector('iframe[src*="b4ldini.github.io/hudu-widgets"]');
    if(f){ f.style.height = (h + 20) + 'px'; f.removeAttribute('height'); }
  }
  window.addEventListener('message', function(e){
    if(e.data && e.data.type === 'a8-iframe-resize'){
      resizeIframe('a8-article', e.data.height);
    }
  });
})();
