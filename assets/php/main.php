<!DOCTYPE html>
<html lang="en">
    <head>
<?php include_once 'assets/html/header.php'; ?>
        <script src="assets/js/warp-speed.js" type="module" defer></script>
        <script src="assets/js/hovertip.js" type="module" defer></script>
        <script src="assets/js/planet-render.js" defer></script>

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
                        <h1 class="font-bold text-green-700 text-9xl">Sebastiaan Heins</h1>
                        <h2 class="font-bold text-green-400 text-5xl blink">Click anywhere to start the engines</h2>
                    </div>
                    <div id="main" class="block-wrapper">
                        <h2 class="text-white text-8xl block-title w-full">Select planet</h2>
                        <div class="text-white w-full block-area">
                            <h3 class="text-5xl mt-6">
                                Welcome to my spaceship! It's called the <span id="porttip" class="highlight">Portfol-io</span>.
                                <br>
                                Check out these planets I've created. They're all handcrafted by me, with a little help from <span id="langs" class="highlight">HTML, CSS and JS</span>.
                            </h3>
                        </div>
                        <div class="text-white w-full h-full flex">
                            <div id="planet-select" class="h-full aspect-square bg-red-200 mr-auto">

                            </div>
                            <div id="planet-render" class="h-full aspect-square ml-auto">
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