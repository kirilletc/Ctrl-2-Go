// CUSTOM DROPDOWN BELOW
var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom__select ": */
x = document.getElementsByClassName("custom__select ");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
// SOME OTHER SCRIPTS FOR SELECTORS BEHAVIOUR
// popup pref
document.querySelector(".icon_container-preferences").addEventListener('click', function(event) {
    this.classList.toggle("icon_container-preferences-active");
    document.querySelector(".icon_container-preferences .preferences").classList.toggle("blue");
    document.querySelector(".icon_container-preferences .arrow_pref").classList.toggle("blue");
    document.querySelector(".popup-pref").classList.toggle("active-flex");
});
document.querySelector(".popup-pref .popup-pref-in-closer").addEventListener('click', function(event) {
    document.querySelector(".icon_container-preferences").classList.remove("icon_container-preferences-active");
    document.querySelector(".icon_container-preferences .preferences").classList.remove("blue");
    document.querySelector(".icon_container-preferences .arrow_pref").classList.remove("blue");
    document.querySelector(".popup-pref").classList.remove("active-flex");
});
// popup ndvi
document.querySelector("button.left-sidebar__right-bottom__row3_right_button").addEventListener('click', function(event) {
    document.querySelector("button.left-sidebar__right-bottom__row3_right_button .ndvi").classList.toggle("blue");
    document.querySelector("button.left-sidebar__right-bottom__row3_right_button .arrow_pref").classList.toggle("blue");
    document.querySelector("button.left-sidebar__right-bottom__row3_right_button .arrow_pref").classList.toggle("any-skale-x");
    document.querySelector("button.left-sidebar__right-bottom__row3_right_button").classList.toggle("text-blue");
    document.querySelector(".popup-ndvi").classList.toggle("active-flex");
});
document.querySelector(".popup-ndvi .popup-ndvi-in-closer").addEventListener('click', function(event) {
    document.querySelector("button.left-sidebar__right-bottom__row3_right_button .ndvi").classList.remove("blue");
    document.querySelector("button.left-sidebar__right-bottom__row3_right_button .arrow_pref").classList.remove("blue");
    document.querySelector("button.left-sidebar__right-bottom__row3_right_button .arrow_pref").classList.remove("any-skale-x");
    document.querySelector("button.left-sidebar__right-bottom__row3_right_button").classList.remove("text-blue");
    document.querySelector(".popup-ndvi").classList.remove("active-flex");
});
// popup compass
document.querySelector(".compass_right_sidebar").parentNode.addEventListener('click', function(event) {
    this.children[0].classList.toggle("blue");
    document.querySelector(".popup-compass").classList.toggle("active-flex");
});
// popup stack
document.querySelector(".stack_right_sidebar").parentNode.addEventListener('click', function(event) {
    this.children[0].classList.toggle("blue");
    document.querySelector(".popup-stack").classList.toggle("active-flex");
});
// popup login
document.querySelector(".user_right_sidebar").parentNode.addEventListener('click', function(event) {
    this.classList.toggle("login-border");
    document.querySelector(".popup-login").classList.toggle("active-flex");
});
// top search input
document.querySelector(".search").addEventListener('click', function(event) {
    this.classList.toggle("search-active");
    document.querySelector("input.header-input").classList.toggle("active-flex");
});
// fullscreen change
document.querySelector(".fullscreen").parentNode.addEventListener('click', function(event) {
    this.classList.toggle("fullscreen-active");
    document.querySelector(".left-sidebar").classList.toggle("toggle-any-sidebar-bg");
    document.querySelector(".right-sidebar").classList.toggle("toggle-any-sidebar-bg");
    document.querySelector("#map").classList.toggle("toggle-map");
    document.querySelector(".left-sidebar__left-top").classList.toggle("display-none");
    document.querySelector(".left-sidebar__right").classList.toggle("display-none");
    document.querySelector(".right-sidebar__top").classList.toggle("display-none");
    document.querySelector(".copyright").classList.toggle("copyright-full");
    document.querySelector(".right-sidebar__bottom").classList.toggle("right-sidebar__bottom-full");
});
// left sidebar select listener
document.querySelector(".select_left_sidebar").parentNode.addEventListener('click', function(event) {
    this.children[0].classList.add("blue");
    document.querySelector(".star_left_sidebar").classList.remove("blue");
    if (document.querySelector(".opacity-0-display-none#select")) {
        document.querySelector("div#select").classList.remove("opacity-0-display-none");
    }
    document.querySelector("div#favorites").classList.add("opacity-0-display-none");
    document.querySelector("span.visibility").style.opacity = '0';
});
// left sidebar favorites listener
document.querySelector(".star_left_sidebar").parentNode.addEventListener('click', function(event) {
    this.children[0].classList.add("blue");
    document.querySelector(".select_left_sidebar").classList.remove("blue");
    if (document.querySelector(".opacity-0-display-none#favorites")) {
        document.querySelector("div#favorites").classList.remove("opacity-0-display-none");
    }
    document.querySelector("div#select").classList.add("opacity-0-display-none");
    document.querySelector("span.visibility").style.opacity = '1';
});
// favorite tab checkboxes
var checkboxesMap = document.querySelectorAll("#favorites .map-checkbox-pas");
for (i = 0; i < checkboxesMap.length; i++) {
    checkboxesMap[i].addEventListener('click', function(event) {
        this.classList.toggle("map-checkbox-act");
    });
}