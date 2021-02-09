// Burger
const burger = document.querySelector("div.burger");
const navMobile = document.querySelector("nav.mobile");
const main1 = document.querySelector(".start");
const main2 = document.querySelector(".projects");
const footer = document.querySelector(".footer");
showNavMobile = () => {
  burger.classList.toggle("on");
  navMobile.classList.toggle("on");
  main1.classList.toggle("on");
  main2.classList.toggle("on");
  footer.classList.toggle("on");
};
burger.addEventListener("click", showNavMobile);

// SCROLL
$(".link1 , .link2 , .link").on("click", function () {
  const goToSection = "#" + $(this).attr("class");
  $("body, html").animate(
    {
      scrollTop: $(goToSection).offset().top,
    },
    1000
  );
  burger.classList.remove("on");
  navMobile.classList.remove("on");
});

// FORM
$(document).ready(function () {
  $("html").on("submit", "#contact_form", function (e) {
    e.preventDefault();
    $("#send_form_status").html("").hide();
    var data = $("#contact_form").serialize();
    $.post("send_form.php", data, function (res) {
      $("#send_form_status").html(res.msg).show();
      if (res.status == 1) {
        $("#contact_form")[0].reset();
      }
    });
  });
});

// Scroll Nav
const navDesktop = document.querySelector(".desktop");
let width = 500;

var lastScroll = document.body.scrollTop;

window.addEventListener(
  "scroll",
  function () {
    var diff = window.scrollY - lastScroll;
    lastScroll = window.scrollY;
    if (diff > 0) {
      width -= 1;
      navDesktop.style.width = width + "px";
    } else {
      width += 1;
      navDesktop.style.width = width + "px";
    }
  },
  false
);

// Footer Tab
const arrow = document.querySelector(".arrow");
const infoTab = document.querySelector(".contact");
arrow.addEventListener("click", function () {
  arrow.classList.toggle("active");
  infoTab.classList.toggle("active");
});
