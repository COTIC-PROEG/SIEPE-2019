const areaLink = document.getElementById('area_img');

function onResize() {
  const screenWidth = document.documentElement.clientWidth;
  const screenHeight = document.documentElement.clientHeight;

  const rectX1 = screenWidth * 0.6;
  const rectY1 = screenHeight * 0.66;

  const rectX2 = rectX1 + screenWidth * 0.2878;
  const rectY2 = rectY1 + screenHeight * 0.3231;

  areaLink.setAttribute('coords', `${rectX1},${rectY1},${rectX2},${rectY2}`);
}

window.addEventListener('resize', onResize);
onResize();
