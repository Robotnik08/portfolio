<!DOCTYPE html>
<html lang="en">
    <head>
<?php include_once 'assets/html/header.php'; ?>
        <script src="assets/js/warp-speed.js" type="module" defer></script>
        <script src="assets/js/hovertip.js" type="module" defer></script>
        <script src="assets/js/planet-render.js" defer></script>
        <script src="assets/js/option-select.js" defer></script>

    </head>
    <body class="bg-black overflow-hidden">
        <main class="w-screen h-screen overflow-hidden">
            <noscript class="w-full h-full block">
                <dialog open>
                    <p class="font-bold text-9xl text-white text-center m-auto">Please enable JavaScript</p>
                </dialog>
            </noscript>
            <div class="background w-full h-full absolute">
                <canvas id="main-canvas">

                </canvas>
            </div>
            <div class="w-full h-full absolute content overflow-hidden">
                <div class="main-wrapper w-full h-full flex items-center center justify-center terminal flex-col">
                    <div id="titles" class="text-center">
                        <h1 class="font-bold text-green-700 text-4xl md:text-9xl">Sebastiaan Heins</h1>
                        <h2 class="font-bold text-green-400 text-2xl md:text-5xl blink">Click anywhere to start the engines</h2>
                    </div>
                    <div id="main" class="block-wrapper hidden">
                        <h2 class="text-white text-4xl md:text-9xl block-title w-full">Select destination</h2>
                        <div class="text-white w-full block-area">
                            <h3 id="main-desc" class="text-lg md:text-4xl mt-3 md:mt-6">
                                Welcome to my spaceship! It's called the <span id="porttip" class="highlight">Portfol-io</span>.
                                <br>
                                Check out my planet! It contains all the information you need to know about me.
                            </h3>
                            <h3 id="confirmation" class="text-lg md:text-4xl mt-3 md:mt-6">
                                
                            </h3>
                        </div>
                        <div class="text-white w-full h-full flex flex-col md:flex-row">
                            <div id="planet-select" class="md:h-full md:aspect-square md:mr-auto text-2xl md:text-6xl p-4 md:p-32">
                                <h3 class="menu-sel"><span class="option blink">></span>&nbsp;About</h3>
                                <h3 class="menu-sel"><span class="option blink">></span>&nbsp;Skills</h3>
                                <h3 class="menu-sel"><span class="option blink">></span>&nbsp;Projects</h3>
                                <h3 class="menu-sel"><span class="option blink">></span>&nbsp;Experience</h3>
                                <h3 class="menu-sel"><span class="option blink">></span>&nbsp;Education</h3>
                                <h3 class="menu-sel"><span class="option blink">></span>&nbsp;Hobbies</h3>
                                <h3 class="menu-sel"><span class="option blink">></span>&nbsp;Contact</h3>
                            </div>
                            <div id="planet-render" class="md:h-full aspect-square md:ml-auto">
                                <div id="planet" class="sphere m-auto">
                                    <div class="equator"></div>
                                    <div class="tropic north"></div>
                                    <div class="tropic south"></div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div class="absolute tip text-white text-6xl bg-purple-900 rounded-xl p-3 terminal tip-text drop-shadow-lg">
                
            </div>
        </main>
    </body>
</html>