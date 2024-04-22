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
                <canvas id="main-canvas" class="">

                </canvas>
            </div>
            <div class="w-full h-full absolute content overflow-hidden">
                <div class="main-wrapper w-full h-full flex items-center center justify-center terminal flex-col text-white m-auto">
                    <div id="main" class="terminal-window w-[90%] h-[95%] md:w-3/4 md:h-[90%] terminal overflow-y-scroll md:overflow-hidden">
                        <h1 class="text-5xl md:text-7xl text-center">About me.</h1>
                        <div class="items">
                            <p class="text-2xl md:text-4xl inline md:block">Hello! I'm Sebastiaan Heins, I'm 18 years old and love programming/learning new stuff.</p>
                            <p class="text-2xl md:text-4xl inline md:block">I'm currently studying <span id="web-dev-tip" class="highlight">Web development</span> at <span id="GLU-tip" class="highlight">GLU</span> in <span id="Utrecht-tip" class="highlight">Utrecht</span>.</p>
                            <p class="text-2xl md:text-4xl inline md:block">I live in Wassenaar, the Netherlands, a town near The Hague.</p>

                            <div class="block md:hidden w-full md:w-1/3 aspect-square mx-auto my-3 md:my-10">
                                <img src="assets/img/me.jpg" alt="Sebastiaan Heins" class="w-full aspect-square">
                            </div>

                            <div class="w-full flex flex-col md:flex-row">
                                <div class="w-full md:w-1/2 aspect-square my-2 md:my-10">
                                    <p class="text-2xl md:text-4xl">I have a passion for programming and computer science and I have a talent for anything programming related. I also love to play games with friends and creating stuff for people to enjoy. I also love building communities, and a little live streaming on the side.</p>
                                    <p class="text-2xl md:text-4xl">I'm always looking for new things to learn and new people to meet!</p>
                                    <br>
                                    <a href="/" class="text-7xl text-green-400 hover:text-green-500">↩ Go back to the ship</a>
                                </div>
                                <div class="hidden md:block w-full md:w-1/3 aspect-square mx-auto my-10">
                                    <img src="assets/img/me.jpg" alt="Sebastiaan Heins" class="w-full aspect-square">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute tip text-white text-3xl md:text-5xl bg-purple-900 rounded-md md:rounded-xl p-1 md:p-3 terminal tip-text drop-shadow-md md:drop-shadow-lg">
                
            </div>
        </main>
    </body>
</html>