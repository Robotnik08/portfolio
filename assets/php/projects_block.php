<?php
    // connect to database
    require_once 'db.php';

    for ($i = 0; $i < count($projects); $i++) { ?>
    <div class="<?php echo ($i % 2 == 0 ? 'even' : 'uneven'); ?> project-spot flex snap-start">
        <div class="text-block w-full">
            <h2 class="text-7xl m-5"><?php echo $projects[$i]['name']; ?></h2>
            <p class="text-2xl sm:text-4xl m-5"><?php echo $projects[$i]['description']; ?></p>

            <div class="buttons flex flex-row relative">
                <a href="<?php echo $projects[$i]['github_link']; ?>" class="git-button bg-white mx-auto text-7xl w-[40%] h-full text-green-800 m-1 text-center">
                    Github
                </a>
                <?php if ($projects[$i]['demo_link'] != 'none') { ?>
                <a href="<?php echo $projects[$i]['demo_link']; ?>"  class="demo-button bg-white mx-auto text-7xl w-[40%] h-full text-green-800 m-1 text-center">
                    Demo
                </a>
                <?php } ?>
            </div>

        </div>
        <div class="image-block aspect-square">
            <img class="object-cover" src="assets/img/<?php echo $projects[$i]['image_link']; ?>" alt="Project image">
        </div>
    </div>
<?php } ?>