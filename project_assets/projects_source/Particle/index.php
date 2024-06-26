<!DOCTYPE html>
<html>
    <head>
        <title>simulation</title>
        <link rel="stylesheet" href="project_assets/projects_source/Particle/assets/css/style.css">
    </head>
    <body>
        <div id="container">
            <h1>Your Own Universe</h1>
            <div id="laws">
                <div id="particlelist">
                    <div id="particlesbox">
                        <div class="addNewParticle" id="select" onclick="addpartbutton()">

                        </div>
                    </div>
                </div>
                <div id="lawsection">
                    <div class="generalinfo">
                        <h2>Properties of particle</h2>
                        <div class="flex">
                            <div class="right margp">
                                <p>Name:</p>
                                <p>Color:</p>
                                <p>Amount of particles on startup:</p>
                                <p>Amount of mass:</p>
                                <p>Amount of halflife:</p>
                            </div>
                            <div class="left">
                                <input type="name" min="0" id="name" placeholder="Name of the particle" onchange="saveSettings()"/><br>
                                <input type="color" min="0" id="color" onchange="saveSettings()"/><br>
                                <input type="number" min="0" id="numberofParticle" placeholder="Amount particles on start" onchange="saveSettings()"/><br>
                                <input type="number" min="0" id="massofParticle" step="0.01" placeholder="Default = 0.5" onchange="saveSettings()"/><br>
                                <input type="number" min="0" id="halflife" step="0.001" placeholder="Leave blank for Infinity" onchange="saveSettings()"/><br>
                                <input type="number" min="0" id="halflife" step="0.001" placeholder="Leave blank for Infinity" onchange="saveSettings()"/><br>
                            </div>
                        </div>
                    </div>
                    <div class="laws">
                        <h2>Laws of physics</h2>
                        <h3>Gravitational laws</h3>
                        <div class="flexcol">
                            <div class="law">
                                <p>Law: </p>
                                <input class="b">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p id="debug"></p>
        </div>
        <canvas id="main"></canvas>
        <script src="project_assets/projects_source/Particle/assets/js/main.js"></script>
    </body>
</html>