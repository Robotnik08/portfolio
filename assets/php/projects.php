<!DOCTYPE html>
<html lang="en">
    <head>
<?php include_once 'assets/html/header.php'; ?>
        <script src="assets/js/cell-background.js" type="module" defer></script>
        <script src="assets/js/hovertip.js" type="module" defer></script>

    </head>
    <body class="bg-black overflow-hidden">
        <main class="w-screen h-screen overflow-hidden">
            <noscript class="w-full h-full block">
                <dialog open>
                    <p class="font-bold text-9xl text-white text-center m-auto">Please enable JavaScript</p>
                </dialog>
            </noscript>
            <div class="background w-full h-full absolute overflow-hidden">
                <canvas id="main-canvas" class="">

                </canvas>
            </div>
            <div class="w-full h-full absolute content overflow-hidden">
                <div class="main-wrapper w-full h-full flex items-center center justify-center terminal flex-col text-white m-auto">
                    <div id="main" class="terminal-window w-[90%] h-[95%] md:w-3/4 md:h-[90%] terminal overflow-y-auto overflow-x-hidden">
                        <h1 class="text-5xl md:text-7xl text-center">My projects</h1>
                        <p class="text-2xl md:text-4xl">Here is a list of all my projects, sorted by what I am most proud of:</p>

                        <div class="slide-show-movable md:mx-3 w-full h-full overflow-x-hidden overflow-y-scroll">
                            <?php
                                include_once 'assets/php/projects_block.php';
                            ?>
                        </div>
                        <a href="/" class="text-3xl md:text-6xl text-green-400 hover:text-green-500">↩ Go back to the ship</a>
                    </div>
                </div>
            </div>

            <div class="absolute tip text-white text-3xl md:text-5xl bg-purple-900 rounded-md md:rounded-xl p-1 md:p-3 terminal tip-text drop-shadow-md md:drop-shadow-lg">
                
            </div>
        </main>
    </body>
</html>