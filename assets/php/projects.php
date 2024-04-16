<!DOCTYPE html>
<html lang="en">
    <head>
<?php include_once 'assets/html/header.php'; ?>
        <script src="assets/js/world-background.js" type="module" defer></script>
        <script src="assets/js/hovertip.js" type="module" defer></script>

    </head>
    <body class="bg-black overflow-hidden">
        <main class="w-screen h-screen overflow-hidden">
            <noscript class="w-full h-full block">
                <dialog open>
                    <p class="font-bold text-9xl text-white text-center m-auto">Please enable JavaScript</p>
                </dialog>
            </noscript>
            <div class="background w-full h-full absolute">
                <!-- <canvas id="main-canvas" class="">

                </canvas> -->
            </div>
            <div class="w-full h-full absolute content overflow-hidden">
                <div class="main-wrapper w-full h-full flex items-center center justify-center terminal flex-col text-white m-auto">
                    <div id="main" class="terminal-window w-[90%] h-5/6 md:w-3/4 md:h-[90%] terminal">
                        <h1 class="text-7xl text-center">My projects</h1>
                        <p class="text-4xl">Here is a list of all my projects, sorted by date:</p>

                        <div class="slide-show-movable mx-3 w-full h-full overflow-x-hidden overflow-y-scroll">
                            <?php
                                include_once 'assets/php/projects_block.php';
                            ?>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute tip text-white text-6xl bg-purple-900 rounded-xl p-3 terminal tip-text drop-shadow-lg">
                
            </div>
        </main>
    </body>
</html>