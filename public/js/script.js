function checkBg() {
  let bgSwitch1 = document.getElementById("bg1").checked;
  let bgSwitch2 = document.getElementById("bg2").checked;
  let bgSwitch3 = document.getElementById("bg3").checked;

  if (bgSwitch1 == true) {
    document.getElementById("bgSwitch1").style.color = "#D4AF37";
    document.getElementById("hero").style.backgroundImage = 'url(../images/bg-1.webp)';
    
  } else{
    document.getElementById("bgSwitch1").style.color = "#F9F9F9";
  }
  if (bgSwitch2 == true) {
    document.getElementById("bgSwitch2").style.color = "#D4AF37";
    document.getElementById("hero").style.backgroundImage = 'url(../images/bg-2.jpg)';

  } else{
    document.getElementById("bgSwitch2").style.color = "#F9F9F9";
  }
  if (bgSwitch3 == true) {
    document.getElementById("bgSwitch3").style.color = "#D4AF37";
    document.getElementById("hero").style.backgroundImage = 'url(../images/bg-3.webp)';

  } else{
    document.getElementById("bgSwitch3").style.color = "#F9F9F9";
  }
}
function checkSlider(criteria) {
  const projects = document.getElementsByClassName("projectItem");

  for(let i =0;i < projects.length;i++){
    if(projects[i].classList.contains(criteria)){
      projects[i].style.display = "block";
    } else{
      projects[i].style.display = "none"
    }
  }
};
function imageSlider(){
  let filterSwitch1 = document.getElementById("filter1").checked;
  let filterSwitch2 = document.getElementById("filter2").checked;
  let filterSwitch3 = document.getElementById("filter3").checked;
  let filterSwitch4 = document.getElementById("filter4").checked;

  if (filterSwitch1 == true) {
    document.getElementById("allProjects").style.color = "#D4AF37";
    checkSlider("projectItem");
  } else{
    document.getElementById("allProjects").style.color = "#2f2f2f";
  }

  if (filterSwitch2 == true) {
    document.getElementById("building").style.color = "#D4AF37";
    checkSlider("building");
  } else{
    document.getElementById("building").style.color = "#2f2f2f";
  }

  if (filterSwitch3 == true) {
    document.getElementById("interior").style.color = "#D4AF37";
    checkSlider("interior");
  } else{
    document.getElementById("interior").style.color = "#2f2f2f";
  }

  if (filterSwitch4 == true) {
    document.getElementById("exterior").style.color = "#D4AF37";
    checkSlider("exterior");
  } else{
    document.getElementById("exterior").style.color = "#2f2f2f";
  }
}
document.getElementById("openMenu").addEventListener("click",() => {
  document.getElementById("mobileMenu").classList.remove("hidden");
})
document.getElementById("closeMenu").addEventListener("click",() => {
  document.getElementById("mobileMenu").classList.add("hidden");
})
window.addEventListener("scroll", () => {
  document.getElementById("mobileMenu").classList.add("hidden");
})

document.getElementById("prevBtn").addEventListener("click", () => {
  document.getElementById("slider").scrollBy({left:-135,behavior:"smooth"});
})
document.getElementById("nextBtn").addEventListener("click", () => {
  document.getElementById("slider").scrollBy({left:135,behavior:"smooth"});
})
setInterval(checkBg,100);
setInterval(imageSlider,100);
