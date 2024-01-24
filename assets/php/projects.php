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
                        <div class="items w-full h-[80%]">
                            <h1 class="text-7xl text-center">My projects</h1>
                            <p class="text-4xl">Here is a list of all my projects, sorted by date:</p>

                            <div class="slide-show-movable mx-3 w-full aspect-[200/95] bg-pink-500 overflow-y-auto snap-mandatory snap-y">
                                <div class="even project-spot flex snap-start">
                                    <div class="text-block w-full">
                                        <h2 class="text-7xl">Project name</h2>
                                        <p class="text-5xl">Project description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eius nesciunt vero perferendis repellat sint, corporis architecto ducimus debitis rem, modi fugit pariatur aperiam? Saepe quos suscipit maxime molestiae sed?</p>

                                        <div class="flex flex-row">
                                            <button class="git-button bg-white mx-auto text-6xl w-1/2 h-full text-green-800">
                                                Github
                                            </button>
    
                                            <button class="more-button bg-white mx-auto text-4xl w-1/2 h-full text-green-800">
                                                Learn more
                                            </button>
                                        </div>
                                    </div>
                                    <div class="image-block w-full">
                                        <img class="w-full h-full object-contain" src="assets/img/template.png" alt="Project image">
                                    </div>
                                </div>
                                <div class="uneven project-spot flex flex-row-reverse snap-start">
                                    <div class="text-block w-full aspect-square">

                                    </div>
                                    <div class="image-block w-full aspect-square">
                                        <img class="w-full h-full object-contain" src="assets/img/template.png" alt="Project image">
                                    </div>
                                </div>
                                <div class="even project-spot flex snap-start">
                                    <div class="text-block w-full">

                                    </div>
                                    <div class="image-block w-full">
                                        <img class="w-full h-full object-contain" src="assets/img/template.png" alt="Project image">
                                    </div>
                                </div>
                                <div class="uneven project-spot flex flex-row-reverse snap-start">
                                    <div class="text-block w-full aspect-square">
                                    </div>
                                    <div class="image-block w-full aspect-square">
                                        <img class="w-full h-full object-contain" src="assets/img/template.png" alt="Project image">
                                    </div>
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