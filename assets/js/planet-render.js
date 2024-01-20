const planet = document.getElementById("planet");

const slices = 9, angle = 360 / slices;

for (let i = 0; i < slices; i++) {
    const slice = document.createElement('div');
    slice.style.transform = 'rotateY(' + angle * i + 'deg)';
    planet.appendChild(slice);
}