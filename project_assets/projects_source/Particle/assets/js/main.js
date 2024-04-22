let can = document.getElementById('main');
let con = can.getContext('2d');
const scale = 1;
const node = '<div class="box" id="select" onclick="selectPart(this)"><p class="particlename">red</p><div class="particledisplay"></div></div>';
const addButton = document.querySelector('.addNewParticle');
const elems = document.getElementsByClassName('box');
const input = document.getElementById('lawsection');
let paused = false;
let stopped = true;
let selectedParticle = 0;
function draw (x, y, color) {
    con.fillStyle = color;
    con.fillRect((x - 3) |0, (y - 3) |0, 6, 6);
}
can.width = 2000;
can.height = 2000;

let particlesEditing = [];
let particles = [
    {
        group: addParticles(1),
        name:'black',
        color:'green'
    },{
        group: addParticles(200),
        name:'red',
        color:'white'
    },{
        group: addParticles(200),
        name:'blue',
        color:'orange'
    },{
        group: addParticles(200),
        name:'moon',
        color:'green'
    }
];

class Result {
    name = null;
    mass = 0.5;
    hl = Infinity;
    constructor (n, m = 0.5, halflife = Infinity) {
        this.name = n;
        this.mass = m;
        this.hl = halflife
    }
}

function update () {
    if (!paused) {
        behaviour('black', 'black', -1, Infinity);
        behaviour('red', 'red', -1.2, Infinity);
        behaviour('red', 'black', -6, Infinity);
        behaviour('blue', 'black', 5, Infinity);
        behaviour('black', 'red', 2, 160);
        behaviour('blue', 'blue', -1, Infinity);
        behaviour('blue', 'black', -0.5, 160);
        behaviour('black', 'blue', 2, 160);
        behaviour('red', 'blue', 1);
        behaviour('moon', 'black', -60, Infinity);
        behaviour('moon', 'moon', 1, 20);
        chem('red', 'red', 2, [new Result('blue', 0.5, 10), new Result('blue', 0.5, 10), new Result('red', 0.5, Infinity), new Result('red', 0.5, Infinity)]);
        decay('blue');
    }
    con.clearRect(0, 0, can.width, can.height);
    for (let i in particles) {
        for (let j in particles[i].group) {
            draw(particles[i].group[j].x, particles[i].group[j].y, particles[i].color);
        }
    }
    if (!stopped) {
        requestAnimationFrame(update);
    } else {
        con.clearRect(0, 0, can.width, can.height);
        particles = [];
    }
}
htmlUpdate();
function htmlUpdate () {
    if (elems.length > particlesEditing.length) {
        for (let i = particlesEditing.length; i < elems.length; i++) {
            elems[i].parentNode.removeChild(elems[i]);
        }
    } else if (elems.length < particlesEditing.length) {
        for (let i = elems.length; i < particlesEditing.length; i++) {
            addButton.insertAdjacentHTML('beforebegin', node);
        }
    }
    for (let i = 0; i < elems.length; i++) {
        elems[i].childNodes[0].innerHTML = particlesEditing[i].name;
        elems[i].childNodes[1].style.background = particlesEditing[i].color;
    } 
    requestAnimationFrame(htmlUpdate)
}
start();
function start () {
    stopped = false;
    update();
}
function pause () {
    paused = !paused;
}
function stop () {
    stopped = true;
}
function saveSettings() {
    console.log('save!');
}
function addParticles (count, mass = 0.5, life = 20000) {
    let part = [];
    for (let i = 0; i < count; i++) {
        part.push({
            x: Math.random()*can.width|0,
            y: Math.random()*can.height|0,
            vx: 0,
            vy: 0,
            m: mass,
            l: life
        });
    }
    return part;
} 

function behaviour (n1, n2, g, d = 80) {
    let par1 = getList(n1);
    let par2 = getList(n2);
    if (par2.length < 1) {
        return;
    }
    for (let i = 0; i < par1.length; i++) {
        let fx = 0;
        let fy = 0;
        let a = null;
        let b = null;
        for (let j=0; j < par2.length; j++) {
            a = par1[i];
            b = par2[j];
            let distancex = a.x-b.x;
            let distancey = a.y-b.y;
            if (Math.abs(distancex) < d || Math.abs(distancey) < d) {
                let distance = Math.sqrt(distancex*distancex + distancey*distancey);
                if (distance > 0 && distance < d) {
                    let force = g * (a.m+b.m)/distance;
                    fx += force*distancex;
                    fy += force*distancey;
                }
            }
            
        }
        a.vx = (a.vx + fx)*0.5;
        a.vy = (a.vy + fy)*0.5;
        a.x += a.vx;
        a.y += a.vy;
        if (a.x <= 0) {
            a.vx *= -1;
            a.x = 0;
        } else if (a.x >= can.width) {
            a.vx *= -1;
            a.x = can.width;
        }
        if (a.y <= 0) {
            a.vy *= -1;
            a.y = 0;
        } else if (a.y >= can.height) {
            a.vy *= -1;
            a.y = can.height;
        }
    }
}

function chem (n1, n2, d = 5, result = [], destroyFirst = true, destroySecond = true) {
    let par1 = getList(n1);
    let par2 = getList(n2);
    for (let i in par1) {
        let a = par1[i];
        for (let j in par2) {
            let b = par2[j];
            let distancex = a.x-b.x;
            let distancey = a.y-b.y;
            if (Math.abs(distancex) < d || Math.abs(distancey) < d) {
                let distance = Math.sqrt(distancex*distancex + distancey*distancey);
                if (distance > 0 && distance < d) {
                    console.log()
                    let boost = 0;
                    for (let k = 0; k < result.length; k++) {
                        let par = getList(result[k].name); 
                        par.push({x: a.x,y: a.y,vx: 0, vy: boost/100,m: result[k].mass , l: result[k].hl});
                        boost++;
                    }
                    if (destroyFirst) {
                        par1.splice(i, 1);
                    }
                    if (destroySecond) {
                        par2.splice(j, 1);
                    }
                    break;
                }
            }
        }
    }
}

function decay (name) {
    let par = getList(name);
    for(let i in par) {
        par[i].l--;
        if (par[i].l <= 0) {
            par.splice(i, 1);
        }
    }
}
function getList (name) {
    for (let i in particles) {
        if (particles[i].name == name) {
            return particles[i].group;
        }
    }
}



//html handle

function selectPart (e) {
    let allElements = document.getElementsByClassName('box');
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i] == e) {
            selectedParticle = i;
            switchTo(selectedParticle)
            allElements[i].style.background = 'green';
        } else {
            allElements[i].style.background = 'lightgray';
        }
    }
}
function switchTo (sel) {
    document.getElementById('name').value = particlesEditing[sel].name;
    document.getElementById('color').value = particlesEditing[sel].color;
    document.getElementById('numberofParticle').value = particlesEditing[sel].group.length;
}
function addpartbutton() {
    particlesEditing.push({
        group: addParticles(100),
        name:'NewParticle#' + particlesEditing.length,
        color:'#FFFFFF',
        mass: 0.5,
        halflife: 1000,
        doesdecay: false
    });
}