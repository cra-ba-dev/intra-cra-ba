function iniciar(){
  new chat();
  return false;
}
function chat(){
  var form = document.forms[0];
  var newForm = this.createForm(form);//a
  newForm.target = this.abrirPopup();
  this.addChatClientForm(newForm);//FF/IE bug
  newForm.submit();
  return false;
}
chat.prototype.addChatClientForm = function(form) {
  form.style.display = "none";
  if (document.forms.length == 1) {
    document.body.appendChild(form);
  } else {
    // se o form já tiver sido adicionado anteriormente, substitui (verificar o índice)
    document.body.replaceChild(form, document.forms[1]);
  }
}
chat.prototype.createForm = function(form) {
  var els = form.elements;
  var el;
  var newForm = document.createElement("form");
  newForm.method = form.method;
  newForm.action = form.action;
  for (var i = 0; i < els.length; i++) {
    el = els[i];
    if(!el.disabled && el.value != "") {
      var element = document.createElement("input");
      element.name=el.name;
      element.value=encodeURIComponent(el.value);
      newForm.appendChild(element);
    }
  }
  return newForm;
}
chat.prototype.abrirPopup = function() {
  var popupName ="chatclient" + (new Date().getTime());
  var p = "width=405,height=486,status=no,resizable=yes,toolbar=no,location=yes,menubar=no,titlebar=no,directories=no";
  window.open("",popupName,p);
  return popupName;
}
chat.prototype.cloneForm = function(formBase) {
  var form = formBase.cloneNode(true);
  var elsBase = formBase.elements;
  var els = form.elements;
  var el;
  for (var i = 0; i < els.length; i++) {
    el = els[i];
    el.value = elsBase[i].value;
  }
  form.removeAttribute("onsubmit");
  return form;
}
function exibirFormulario(){
  var divForm =  document.getElementById('divForm');
  var formHeader =  document.getElementById('formHeader');
  if(divForm.className == 'form hidden'){
    divForm.className = 'form';
    formHeader.className = ' btn btn1 btn-danger open';
    formHeader.innerHTML = 'Clique aqui para fechar esta janela';

  }
  else{
    divForm.className = 'form hidden';
    formHeader.className = 'btn-float btn btn1 btn-danger fa fa-comments fa-3x';
    formHeader.innerHTML = '';
  }
}