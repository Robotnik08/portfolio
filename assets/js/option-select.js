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
    "Experience",
    "Education",
    "Hobbies",
    "Contact"
];

const aboutText = [
    "I'm a software developer living in South Holland, Netherlands. I'm currently studying Web development at GLU.",
    "I have a wide range of skills, from web development to software engineering. I'm always looking to learn new things.",
    "I've worked on many projects, ranging from small to large. I'm always looking for new projects to work on.",
    "I've worked for a few people and have experience working in a team. I'm always looking for new opportunities.",
    "I've studied at GLU for 2 years and have learned a lot. In the future I'm looking to study at a university.",
    "I have many hobbies, ranging from programming to gaming.",
    "My contact information is listed below. Feel free to contact me."
];

let confirmation = -1;

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

function cancelConfirmation() {
    confirmation = false;
    confirmationText.style.display = "none";
    mainText.style.display = "block";
}

function trueSelectOption(index) {
    selectOption(index);

    if (confirmation != index) {
        confirmation = index;
        confirmationText.style.display = "block";
        confirmationText.innerHTML = aboutText[index];
        confirmationText.innerHTML += "<br>Select the option again to land here and learn more!";
        mainText.style.display = "none";

        return;
    }

    
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