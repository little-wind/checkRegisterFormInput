//等待网页加载完毕再执行
window.onload = function() {
  var faceImg = document.getElementById('faceImg');
  faceImg.onclick = function() {
    window.open('face.php', 'face', 'width=430, height=400, top=0, left=0, scrollbars=1');
  }
}