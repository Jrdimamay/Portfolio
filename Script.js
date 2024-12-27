//Tabist//
  document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (event) {
        event.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        showTab(targetId);
        setActiveTab(tab);
      });
    });

    function showTab(tabId) {
      var allTabs = document.querySelectorAll('.tab-pane');
      allTabs.forEach(function (tab) {
        tab.classList.remove('active');
      });

      var targetTab = document.getElementById(tabId);
      if (targetTab) {
        targetTab.classList.add('active');
      }
    }

    function setActiveTab(selectedTab) {
      tabs.forEach(function (tab) {
        tab.classList.remove('active');
      });

      selectedTab.classList.add('active');
    }
  });
//color slector//
let selectedColor = "#0c20cf";
function paint(color){
  const circle = document.getElementById("circleID");
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(navLink) {
    navLink.style.color = color;
  });
  circle.style =`color:${color}`;  
}
