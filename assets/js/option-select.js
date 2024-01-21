let selected = 0;

const options = document.getElementsByClassName("option");

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
    "Experience",
    "Education",
    "Hobbies",
    "Contact"
];

function selectOption(index) {
    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = "&nbsp;";
    }
    options[index].innerHTML = ">";
    selected = index;
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