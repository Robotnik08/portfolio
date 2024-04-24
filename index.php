<?php
    $path = $_SERVER['REQUEST_URI'];
    $path = explode('/', $path);
    array_shift($path);

    if (empty($path[0])) {
        include_once 'assets/php/main.php';
    } else {
        // check if page exists
        if (!file_exists('assets/php/' . $path[0] . '.php')) {
            if (!file_exists('project_assets/' . $path[0] . '.php')) {
                include_once 'assets/php/404.php';
                exit();
            }

            include_once 'project_assets/' . $path[0] . '.php';
            exit();
        }

        include_once 'assets/php/' . $path[0] . '.php';
    }