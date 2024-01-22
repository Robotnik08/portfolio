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
                    <div id="main" class="terminal-window w-[90%] h-5/6 md:w-3/4 md:h-[90%] terminal overflow-y-auto">
                        <h1 class="text-7xl text-center">My skillset</h1>
                        <div class="items">
                            <p class="text-4xl">I've got a wide range of skills, from webdevelopment to software engineering.</p>
                            <p class="text-4xl">I am also fluent in English and Dutch, and have experience in working in a team.</p>
                            

                            <div class="w-full flex flex-col">
                                <h2 class="text-7xl blue-glow">General skills:</h2>
                                <br>

                                <h3 class="text-6xl blue-glow">Perseverance</h3>
                                <p class="text-4xl">Perseverance is one of my best qualities, I never give up on a problem and always try to find a solution. In my eyes, no problem is too hard for me.</p>
                                <br>
                                
                                <h3 class="text-6xl blue-glow">Teamwork</h3>
                                <p class="text-4xl">I have experience working in a team, and know how to work together with other people. Communication and teamwork are two of the things I have experience with through team projects.</p>
                                <p class="text-4xl">When working in a team I prefer to be a team manager. A clean git repository and a well managed kanban board make any project as efficient and swift as possible.</p>
                                
                                <br>
                                <h2 class="text-7xl blue-glow">Web development:</h2>
                                <br>

                                <h3 class="text-6xl blue-glow">JavaScript</h3>
                                <p class="text-4xl">JavaScript is the language of the web. I have experience using JavaScript to create functional websites.
                                    Many projects of mine were created in JavaScript, because of that I can say that I am very experienced in using the language.</p>
                                <p class="text-4xl">A framework I know is React, and another favorite is Nodejs.</p>
                                <br>

                                <h3 class="text-6xl blue-glow">HTML and CSS</h3>
                                <p class="text-4xl">HTML and CSS are the building blocks of the web which is why I have a lot of experience using them to create quality frontend.
                                    I also have experience in using CSS frameworks like TailwindCSS and how to make good responsive websites</p>
                                </p>
                                <br>

                                <h3 class="text-6xl blue-glow">PHP and SQL</h3>
                                <p class="text-4xl">I have experience in using PHP and SQL to create functioning backends and CRUD systems.
                                    I have built many projects using PHP and have experience with managing and using a mysql database.</p>
                                <p class="text-4xl">I also have experience with frameworks such as Laravel and how to make good backend with PHP.</p>
                                <br>

                                <h3 class="text-6xl blue-glow">The internet.</h3>
                                <p class="text-4xl">I know mostly how things work on the internet, I understand the concept of a website on a server, and how to host a website. I know how to use API's and how to make secure API's.
                                    I also know how to use a linux server and how to administrate one.</p>
                                <p class="text-4xl">I understand what good SEO means and how to make a website SEO friendly. And I know what DNS records are, how IP addresses work and how to manually install https from scratch!</p>
        
                                <br>
                                <h2 class="text-7xl blue-glow">Software development:</h2>
                                <br>

                                <h3 class="text-6xl blue-glow">C</h3>
                                <p class="text-4xl">I can savely say C is one of my most fluent languages, I understand how C works with the CPU, and how a computer handles memory and other concepts.
                                    I've built some serious stuff in C, check out my projects page to see some of them.</p>
                                </p>
                                <br>

                                <h3 class="text-6xl blue-glow">C++</h3>
                                <p class="text-4xl">Even though I'm not as fluent in C++ as I am in C, I still know how to use C++ and how it works. I also know how to effectively use OOP in C++, without leaking memory.
                                    I've built some projects in C++, check out my projects page to see some of them.</p>
                                <br>

                                <h3 class="text-6xl blue-glow">C#</h3>
                                <p class="text-4xl">I have experience in using C# to create games in Unity, and other apps.
                                    Even though I mainly use it to develop games in Unity, I understand the language enough to say I'm almost fluent in the language.
                                    I know how Object Oriented Programming works and love using it and I know quite a bit about the .NET framework</p>
                                <br>

                                <h3 class="text-6xl blue-glow">Python</h3>
                                <p class="text-4xl">I have experience in using Python to create apps and scripts.
                                    I also know how to use the django framework to built backend systems.</p>
                                <br>

                                <h3 class="text-6xl blue-glow">Assembly</h3>
                                <p class="text-4xl">Although I'm not a master, I am learning assembly at the moment. My goal is to learn and understand on the hardware level how a Computer works, and how to program one on it's purest level.</p>
                                <p class="text-4xl">I have made some simple programs in assembly, and I hope to make more in the future.</p>

                                <br>
                                <h2 class="text-7xl blue-glow">Computer science:</h2>
                                <br>
                                
                                <h3 class="text-6xl blue-glow">Algorithms and data structures</h3>
                                <p class="text-4xl">I have experience in using algorithms and data structures to solve problems.
                                    I also have experience with using algorithms and data structures to make programs more efficient.
                                    I have also made some projects using this tech, mainly my chess robot, check out my projects page to see some of them.</p>
                                <br>

                                <h3 class="text-6xl blue-glow">Computer engineering</h3>
                                <p class="text-4xl">I know how to built a computer from scratch, and have made a few in multiple simulators. I understand how a computer works and hope to learn more in the future.
                                    I also some day in the near future want to built my own computer in real life from scratch.</p>
                                </p>
                                <br>

                                <h3 class="text-6xl blue-glow">Operating systems</h3>
                                <p class="text-4xl">
                                    My main operating system of choice is Windows, but I have experience with linux.
                                    I have and still am administrating a linux server, and have experience with using a linux server.
                                </p>
                                <br>
                                <a href="/" class="text-7xl text-green-400 hover:text-green-500">↩ Go back to the ship</a>
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