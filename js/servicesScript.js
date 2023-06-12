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
