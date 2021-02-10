This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and programmed with passion by me.

# Pizza Awesome

This project is an online pizza shop, with a custom pizza-creation user interface. This project was created using the MERN stack - MongoDB, Express.js, React.js and Node.js

## Available Scripts

In the project directory, you can run the built-in react script and a few pf my own:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run server`

my command, runs app.js with nodemon so you can develop the API.
make sure to install `nodemon` before startup.

### `npm run dev`

runs **`npm run server`** and **`npm start`** (to start the react development server and the backend)
Note: this script won't work without adding **"proxy": "http://localhost:3001"** (or other port that you use for your backend) in the **package.json** file. 
make sure to install `npm-run-all` before startup.

## Routes and Endpoints

this project has many routes to use:

### frontend routes:

**/** - the main route, offers actions to do in response to your auth state.
**/newpizza** - the route that offers an interactive way to order your pizza. `route guarded!`
**/profile** - the route that shows you data about your account such as last pizzas ordered. `route guarded!`
**/signup** - the sign up form. `route guarded for authenticated users`
note that the login form is in a modal activated from the navbar.

### backend endpoints: 

**`POST` /auth/signup** - sign up with `{ email, password, address: { city, street, number, apartment } }`
**`POST` /auth/login** - log in with `{ email, password }`
**`PUT` /auth** update user data with `{ query, data }` and the Auth header
**`POST` /api** create a new pizza with `{ title, topics, flags }` and the Auth header
**`GET` /api/admin** get all orders with the Auth header (with the admin email, as defined in .env )

## Devops

As of February 2021, this project fully supports Docker. 

### Environment Variables

make sure to add these variables to your environment:

**MongoDB cluster url** as `DB_LINK`
**Admin data** as `ADMIN_EMAIL`, `ADMIN_LNG` and `ADMIN_LAT`.

### MongoDB

I chose to use MongoDB Atlas for my project. If you wish to use the dockerized version of MongoDB, add the mongo service to the compose file and change the database url.