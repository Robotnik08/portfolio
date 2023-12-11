<!DOCTYPE html>
<html lang="en">
    <head>
<?php include_once 'assets/html/header.php'; ?>
        <script src="assets/js/space-background.js" type="module" defer></script>
    </head>
    <body class="bg-black">
        <main class="w-screen h-screen">
            <noscript class="w-screen h-screen block">
                <dialog open>
                    <p class="font-bold text-9xl text-white text-center m-auto">Please enable JavaScript</p>
                </dialog>
            </noscript>
            <div class="background w-screen h-screen absolute">
                <canvas id="space-background">

                </canvas>
            </div>
            <div class="content">
                <div>
                    <h1 class="font-bold text-white text-center m-auto">Hello World!</h1>
                </div>
            </div>
        </main>
    </body>
</html>