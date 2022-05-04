# Wad2 Gordon Mclaughlin S1713673

## How to run
### Option 1 - Heroku
1. Visit https://sleepy-harbor-19596.herokuapp.com/
2. Login can be accessed via https://sleepy-harbor-19596.herokuapp.com/login with the user: `Gordon` & Password of: `Password123`
### Option 2 - Clone Repository 
1. Install git (available at https://github.com/git-guides/install-git)
2. In visual studio terminal or operating system terminal enter `git clone https://github.com/Gmclau96/Wd2.git` (Will clone to the users current directory, use cd to change)
3. Type `npm install` in your terminal window for the module depandancies required
4. Create a file named `.env` in your root folder and enter the following:<br>
`PORT=3000 `<br>`
GordonPassword = Password123 `<br>`
SECRET = GordonMclaughlinWebApplicationDevelopment2JSONWEBTOKENSECRET`
5. On First time use enter `node seed` into the terminal window to populate the staff and menu databases
6. Enter `node index` in the terminal to launch server
7. Open browser and navigate to localhost:3000
8. Login at localhost:3000/login with the user: `Gordon` & Password of: `Password123`

## Features
1. Login to get full functionality (login expires after 1 hour) at https://sleepy-harbor-19596.herokuapp.com/login OR localhost:3000/login
1. View the current menu (works as accordian menu click dish name to view details of dish) at https://sleepy-harbor-19596.herokuapp.com/ OR localhost:3000
2. View restraunt information on the about us page at https://sleepy-harbor-19596.herokuapp.com/about.html
3. Abillity to add a new dish to the menu database at localhost:3000/addItem OR https://sleepy-harbor-19596.herokuapp.com/addItem (must be logged in)
4. Abaillity to make search for meni items and make them available/unavailable at localhost:3000/setMenu OR https://sleepy-harbor-19596.herokuapp.com/setMenu (must be logged in)
5. Edit a dish's information or delete the dish at localhost:3000/setMenu OR https://sleepy-harbor-19596.herokuapp.com/setMenu and then selecting the dish (must be logged in)
6. Add a new staff member at https://sleepy-harbor-19596.herokuapp.com/addUser OR localhost:3000/addUser
