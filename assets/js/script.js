/*	gallery */
$(document).ready(function() {
  console.log('coming here');
  $(".filter-button").click(function() {
    var value = $(this).attr('data-filter');

    if (value == "all") {
      $('.filter').show('1000');
    } else {
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');

    }

    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
    }
    $(this).addClass("active");
  });
});
/*	end gallery */

$(document).ready(function() {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
  });
});

function scrollOff() {
  console.log("clicked");
}

$(document).ready(function() {
  $(document).click(function(event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("collapse show");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      $("button.navbar-toggler").click();
    }
  });
});

function reduce() {
  var ele = document.getElementById('header-btn');
  if (screen.width <= 568) {
    ele.className = "btn btn-primary btn-lg text-uppercase js-scroll-trigger";
    console.log('reduced');
  }
}

$(window).on('resize', function() {
  if ($(window).width() <= 568 || screen.width <= 568) {
    var ele = document.getElementById('slider-builder slider-desktop');
    ele.style.display = "none";
    var ele = document.getElementById('slider-builder slider-mobile');
    ele.style.display = "block";
  }
  if ($(window).width() >= 772 || screen.width >= 772) {
    var ele = document.getElementById('slider-builder slider-desktop');
    ele.style.display = "block";
    var ele = document.getElementById('slider-builder slider-mobile');
    ele.style.display = "none";
  }
});

$(window).on('load', function() {
  if ($(window).width() <= 568 || screen.width <= 568) {
    var ele = document.getElementById('slider-builder slider-desktop');
    ele.style.display = "none";
    var ele = document.getElementById('slider-builder slider-mobile');
    ele.style.display = "block";
  }
  if ($(window).width() >= 768 || screen.width >= 768) {
    var ele = document.getElementById('slider-builder slider-desktop');
    ele.style.display = "block";
    var ele = document.getElementById('slider-builder slider-mobile');
    ele.style.display = "none";
  }
});
window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("contactForm");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    //button.style = "display: none ";
    status.classList.add("success");
    status.innerHTML = "Thanks for submitting the form";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

$(document).ready(function() {
  if (screen.width >= 768)
    document.getElementById('space') = "&nbsp;&nbsp;";
  else {
    document.getElementById('space') = "";
  }
});
