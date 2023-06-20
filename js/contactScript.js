// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     var nameInput = document.getElementById('name');
//     var emailInput = document.getElementById('email');
//     var messageInput = document.getElementById('message');
//     var nameRegex = /^[a-zA-Z\s]+$/;
//     if (!nameRegex.test(nameInput.value)) {
//         alert('Please enter a valid name.');
//         nameInput.focus();
//         return;
//     }
//     var emailRegex = /^\S+@\S+\.\S+$/;
//     if (!emailRegex.test(emailInput.value)) {
//         alert('Please enter a valid email address.');
//         emailInput.focus();
//         return;
//     }
//     if (messageInput.value.length < 5 || messageInput.value.length > 1000) {
//         alert('Please enter a message between 5 and 1000 characters.');
//         messageInput.focus();
//         return;
//     }
//     alert('Form submitted successfully!');
//     document.getElementById('contact-form').reset();
// });
function onClickSubmit() {
    event.preventDefault();
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");
    var select = document.getElementById("selectName");
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();
    if (name === "") {
      alert("Please enter your name.");
      nameInput.focus();
      return false;
    }
    if (email === "") {
      alert("Please enter your email.");
      emailInput.focus();
      return false;
    }
    if (select.value == "") {
      alert("Please select operator.");
      select.focus();
      return false;
    }
    if (message === "") {
      alert("Please enter your message.");
      messageInput.focus();
      return false;
    }
    alert("Form submitted successfully!");
    return true;
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};
TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  var that = this;
  var delta = 300 - Math.random() * 100;
  if (this.isDeleting) { delta /= 2; }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function() {
    that.tick();
  }, delta);
};
window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
