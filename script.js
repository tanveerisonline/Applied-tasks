function applyTheme(id) {
  var element = document.getElementById("container");
  element.className='';
  element.classList.add('main');
  element.classList.add(id);
}
