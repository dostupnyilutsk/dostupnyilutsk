var cursorHover = function() {
    document.querySelector('.h2-black').style.color = '#ffffff';
    document.querySelector('.item-text-black').style.color = '#ffffff';
    document.querySelector('.map-link-black').style.color = '#ffffff';
    document.querySelector('.fa-map-marker-alt-black').style.color = '#ffffff';
    document.querySelector('.image-black').src = './img/icon-braille-white.svg';
  }
  var cursorhover = document.querySelector('.black-hover');
  cursorhover.addEventListener('mouseover', cursorHover, false);

  var cursorLeave = function() {
    document.querySelector('.h2-black').style.color = '#000000';
    document.querySelector('.item-text-black').style.color = '#000000';
    document.querySelector('.map-link-black').style.color = '#000000';
    document.querySelector('.fa-map-marker-alt-black').style.color = '#000000';
    document.querySelector('.image-black').src = './img/icon-braille.svg';
  }
  var cursorhover = document.querySelector('.black-hover');
  cursorhover.addEventListener('mouseleave', cursorLeave, false);


  var cursorHover2 = function() {
    document.querySelector('.h2-violet').style.color = '#ffffff';
    document.querySelector('.item-text-violet').style.color = '#ffffff';
    document.querySelector('.map-link-violet').style.color = '#ffffff';
    document.querySelector('.fa-map-marker-alt-violet').style.color = '#ffffff';
    document.querySelector('.image-violet').src = './img/icon-wheelchair-white.svg';
  }
  var cursorhover = document.querySelector('.violet-hover');
  cursorhover.addEventListener('mouseover', cursorHover2, false);

  var cursorLeave2 = function() {
    document.querySelector('.h2-violet').style.color = '#000000';
    document.querySelector('.item-text-violet').style.color = '#000000';
    document.querySelector('.map-link-violet').style.color = '#000000';
    document.querySelector('.fa-map-marker-alt-violet').style.color = '#000000';
    document.querySelector('.image-violet').src = './img/icon-wheelchair.svg';
  }
  var cursorhover2 = document.querySelector('.violet-hover');
  cursorhover2.addEventListener('mouseleave', cursorLeave2, false);
  
  var cursorHover3 = function() {
    document.querySelector('.h2-blue').style.color = '#ffffff';
    document.querySelector('.item-text-blue').style.color = '#ffffff';
    document.querySelector('.map-link-blue').style.color = '#ffffff';
    document.querySelector('.fa-map-marker-alt-blue').style.color = '#ffffff';
    document.querySelector('.image-blue').src = './img/icon-movedefect-white.svg';
  }
  var cursorhover = document.querySelector('.blue-hover');
  cursorhover.addEventListener('mouseover', cursorHover3, false);

  var cursorLeave3 = function() {
    document.querySelector('.h2-blue').style.color = '#000000';
    document.querySelector('.item-text-blue').style.color = '#000000';
    document.querySelector('.map-link-blue').style.color = '#000000';
    document.querySelector('.fa-map-marker-alt-blue').style.color = '#000000';
    document.querySelector('.image-blue').src = './img/icon-movedefect.svg';
  }
  var cursorhover2 = document.querySelector('.blue-hover');
  cursorhover2.addEventListener('mouseleave', cursorLeave3, false);