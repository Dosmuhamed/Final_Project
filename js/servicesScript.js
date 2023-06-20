const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('tourAnimation');
      }
    });
});
const tourElements = document.querySelectorAll('.tour');
    tourElements.forEach(element => {
    observer.observe(element);
});
function onClickTourOrder() {
  $("#tourOrder").attr("style", "display: block;");
  $("#tourOrderBg").attr("style", "display: block;");
}
function onClickLeaveFeedback() {
  $("#LeaveFeedback").attr("style", "display: block;");
  $("#LeaveFeedbackBg").attr("style", "display: block;");
}

function validateOrderTour() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var tour = document.getElementById('tour').value;
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert('Name should only contain letters and spaces');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Invalid email format');
      return false;
    }
    if (!/^8\d{10}$/.test(phone)) {
      alert('Phone number should start with 8 and contain 11 digits');
      return false;
    }
    if (tour === '') {
      alert('Please select a tour');
      return false;
    }
    return true;
}
function closeOrderTour() {
  $("#tourOrder").attr("style", "display: none;");
  $("#tourOrderBg").attr("style", "display: none;");
}
function closeLeaveFeedback() {
  $("#LeaveFeedback").attr("style", "display: none;");
  $("#LeaveFeedbackBg").attr("style", "display: none;");
}
function validateLeaveFeedback() {
   var name = document.getElementById('name2').value;
   var email = document.getElementById('email2').value;
   var subject = document.getElementById('subject2').value;
   var message = document.getElementById('message2').value;
   if (name.trim() === '') {
     alert('Please enter your name.');
     return false;
   }
   if (email.trim() === '') {
     alert('Please enter your email.');
     return false;
   }
   if (subject.trim() === '') {
     alert('Please enter the subject.');
     return false;
   }
   if (message.trim() === '') {
     alert('Please enter your message.');
     return false;
   }
   document.getElementById('feedbackForm').submit();
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
