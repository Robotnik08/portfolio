<?php
    require_once 'config.php';

    $db_name = 'portfolio';
    $table_name = 'projects';

    // PDO connection
    try {
        $pdo = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die("Could not connect to the database $db_name :" . $e->getMessage());
    }

    // Fetching data
    $stmt = $pdo->prepare("SELECT * FROM $table_name");
    $stmt->execute();
    $projects = $stmt->fetchAll();
    $stmt = null;
    $pdo = null;