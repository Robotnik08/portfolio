<!DOCTYPE html>
<html lang="en">
    <head>
<?php include_once 'assets/html/header.php'; ?>
        <script src="assets/js/warp-speed.js" type="module" defer></script>

    </head>
    <body class="bg-black">
        <main class="w-screen h-screen">
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
                    <div id="titles">
                        <h1 class="font-bold text-green-700 text-9xl">Sebastiaan Heins</h1>
                        <h2 class="font-bold text-green-400 text-5xl blink">Click anywhere to start the engines</h2>
                    </div>
                    <div id="main" class="block-wrapper">
                        <h2 class="text-white text-8xl block-title w-full">Select planet</h2>
                        <div class="w-full h-full block-area">
                            <h3 class="text-5xl mt-6">
                                Welcome to my spaceship! It's called the <span class="highlight">Portfol-io</span>.
                                <br><br>
                                Check out these planets I've created. They're all handcrafted by me, with a little help from the <span class="highlight">HTML, CSS and JS</span>.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>
</html>