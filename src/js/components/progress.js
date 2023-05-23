const circles = document.querySelector(".progress");

const progressAnimation = () => {
    let percentegeProgress = Math.floor(70);

    let radius = circles.getAttribute("r");
    console.log("radius");
    let circleLength = 2 * Math.PI * radius;
    console.log(circleLength);
    circles.setAttribute("stroke-dasharray", circleLength);
    circles.setAttribute(
        "stroke-dashoffset",
        circleLength - (circleLength * percentegeProgress) / 100
    );
};
progressAnimation();
/* const circles = document.querySelectorAll('.facts-element__circle');
circles.forEach(el => {

  if (el.dataset.percentage == 'true') {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.facts-element__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let full = el.dataset.full;
    let value = el.dataset.value;
    let percentageProgress = Math.floor(value / full * 100);
    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  } else {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.facts-element__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let percent = el.dataset.percent;
    let percentageProgress = Math.floor(percent);
    valueBlock.textContent = percent + '%';
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }


}); */
