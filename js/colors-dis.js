var cursorHover = function() {
    document.querySelector('.h2-yellow').style.color = '#ffffff';
    document.querySelector('.item-text-yellow').style.color = '#ffffff';
    document.querySelector('.map-link-yellow').style.color = '#ffffff';
    document.querySelector('.fa-map-marker-alt-yellow').style.color = '#ffffff';
    document.querySelector('.image-yellow').src = './img/icon-transport-white.svg';
  }
  var cursorhover = document.querySelector('.yellow-hover');
  cursorhover.addEventListener('mouseover', cursorHover, false);

  var cursorLeave = function() {
    document.querySelector('.h2-yellow').style.color = '#000000';
    document.querySelector('.item-text-yellow').style.color = '#000000';
    document.querySelector('.map-link-yellow').style.color = '#000000';
    document.querySelector('.fa-map-marker-alt-yellow').style.color = '#000000';
    document.querySelector('.image-yellow').src = './img/icon-transport.svg';
  }
  var cursorhover = document.querySelector('.yellow-hover');
  cursorhover.addEventListener('mouseleave', cursorLeave, false);


