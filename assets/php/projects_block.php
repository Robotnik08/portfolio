<?php
    // connect to database
    require_once 'db.php';

    for ($i = 0; $i < count($projects); $i++) { ?>
    <div class="flex flex-col <?php echo ($i % 2 == 0 ? 'even' : 'uneven'); ?> project-spot snap-start mb-5 rounded-md">
        <div class="text-block w-full">
            <h2 class="text-4xl md:text-7xl m-5"><?php echo $projects[$i]['name']; ?></h2>
            <p class="text-xl sm:text-4xl m-5"><?php echo $projects[$i]['description']; ?></p>

            <div class="buttons flex flex-row relative">
                <?php if ($projects[$i]['github_link'] != 'none') { ?>
                <a href="<?php echo $projects[$i]['github_link']; ?>" class="git-button bg-white mx-auto text-4xl md:text-7xl py-1 px-1 md:px-4 h-full text-green-800 m-1 text-center">
                    Github
                </a>
                <?php } ?>
                <?php if ($projects[$i]['demo_link'] != 'none') { ?>
                <a href="<?php echo $projects[$i]['demo_link']; ?>"  class="demo-button bg-white mx-auto text-4xl md:text-7xl py-1 px-2 md:px-4 h-full text-green-800 m-1 text-center">
                    Demo
                </a>
                <?php } ?>
            </div>

        </div>
        <?php if ($projects[$i]['image_link'] != 'none') { ?>
        <div class="image-block">
            <img class="object-cover h-auto w-full md:h-full md:w-auto" src="assets/img/<?php echo $projects[$i]['image_link']; ?>" alt="Project image">
        </div>
        <?php } ?>
    </div>
<?php } ?>
