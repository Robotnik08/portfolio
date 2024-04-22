let selected = 0;

const options = document.getElementsByClassName("option");

const mainText = document.getElementById("main-desc");

const confirmationText = document.getElementById("confirmation");

confirmationText.style.display = "none";

window.addEventListener( "pageshow", function ( event ) {
    const historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type === 2);
    if (historyTraversal) {
        // Handle page restore.
        window.location.reload();
    }
});

const optionText = [
    "About",
    "Skills",
    "Projects",
    "Contact"
];

function selectOption(index) {
    for (let i = 0; i < options.length; i++) {
        if (i == index) {
            continue;
        }
        options[i].innerHTML = "&nbsp;";
        options[i].parentElement.classList.remove("menu-sel-highlight");
    }
    options[index].innerHTML = ">";
    selected = index;
    options[index].parentElement.classList.add("menu-sel-highlight");
}


function trueSelectOption(index) {
    selectOption(index);

    
    // terminal closes
    document.getElementById('main').classList.add('main-disappear');

    // turn on warpspace
    setTimeout(() => {
        document.getElementById('main').style.display = 'none';
        window.warpspace = true;
    }, 400);

    // fade out warpspace
    setTimeout(() => {
        document.getElementById('main-canvas').parentElement.classList.add('background-disappear');
    }, 2000);

    // go to page
    setTimeout(() => {
        window.location.href = optionText[index].toLowerCase();
    }, 3100);

}

for (let i = 0; i < options.length; i++) {
    options[i].parentElement.addEventListener("mouseover", () => {
        selectOption(i);
    });
    options[i].parentElement.addEventListener("click", () => {
        trueSelectOption(i);
    });
}

selectOption(selected);

document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        if (selected > 0) {
            selectOption(selected - 1);
        }
    } else if (event.key == "ArrowDown") {
        if (selected < options.length - 1) {
            selectOption(selected + 1);
        }
    } else if (event.key == "Enter") {
        trueSelectOption(selected);
    }
});