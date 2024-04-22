# Portfolio website

This is my main portfolio website, showcasing my work and projects. It is built using HTML, CSS, and JavaScript.<br>
I use tailwindcss for styling.

## Installation

Firstly, you must import the SQL database. You can do this by running the following command:

```bash
mysql -u username -p database_name < portfolio.sql
```

Then, go to the `config.php` file and change the database credentials to match your own.<br>

After you installed the database, make sure you have npm and php installed on your machine. Then, clone the repository and run the following commands:

```bash
# install dependencies
npm i 
# build the css
npm run build
# start the server (can differ, entry point is index.php)
php -S localhost:8000
```

## Note

All the projects are stored in the `project_assets` folder. Each project has different ways of being displayed, so they are different from their respective folders. <br>
This is the reason it's included in this repository.