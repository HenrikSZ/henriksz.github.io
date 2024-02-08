function setup() {
    window.addEventListener('scroll', scrollUpdate)
    document.scrollAnimations = [];
    let animations = Array.from(document.getElementsByClassName("onscroll"));
    animations.forEach(a => addScollAnimationFor(a));
}

function addScollAnimationFor(element) {
    let classList = Array.from(element.classList)
        .filter(className => className.startsWith("scroll:"))
        .map(className => className.substring(className.indexOf(":") + 1));

    document.scrollAnimations.push({
        element,
        active: false,
        classList: classList,
    });
}

function scrollUpdate(event) {
    for (let item of document.scrollAnimations) {
        let bottom = item.element.getBoundingClientRect().bottom;
        let dist = window.innerHeight - bottom;
        if (dist > 10 && !item.active) {
            item.element.classList.add(...item.classList);
            item.active = true;
        } else if (dist < -10 && item.active) {
            item.element.classList.remove(...item.classList);
            item.active = false;
        }
    }
}

window.onload = setup;
