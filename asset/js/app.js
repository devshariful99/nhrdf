window.setInterval(ut, 1000);
function ut() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = d.toLocaleDateString();
}


document.addEventListener('click', function(event) {
  if (event.target.classList.contains('faq-title') ) {
    // Remove 'angle-active' class from all spans
    document.querySelectorAll('span.angle-active').forEach(function(span) {
      span.classList.remove('angle-active');
    });

    // Remove 'faq-desc' class from all elements
    document.querySelectorAll('.faq-desc').forEach(function(desc) {
      desc.classList.remove('faq-desc-active');
    });

    // Add 'angle-active' class to span inside clicked .faq-title
    event.target.querySelector('span').classList.add('angle-active');

    // Add 'faq-desc' class to next .faq-desc after clicked .faq-title
    var nextDesc = event.target.nextElementSibling;
    if (nextDesc && nextDesc.classList.contains('faq-desc')) {
      nextDesc.classList.add('faq-desc-active');
    }
  }
});









