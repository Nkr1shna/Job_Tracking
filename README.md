#Steps to run this app
1. Make sure you have mysql server installed or install it and set it up by
        $ sudo apt install mysql-server
2. Git clone this repo to a convinient directory by
        $ git clone http://github.com/nkr1shna/Job_Tracking
3. Create a new file .env then copy the code in .env.example and paste it into .env, enter your mysql database details
4. Move into the directory by
        $ cd Job_Tracking
5. Install node modules required for this app
        $ npm i
6. Install Voyager cli by
        $ npm i -g voyager-cli
7. Make migrations to the database by
        $ knex migrate:latest
8. Start the app by
        $ voyager start
9. Start Webpack, open another terminal and run
        $ npx webpack
10. The website will open in your default browser
11. Click on Apply in the top bar and enter your application details.