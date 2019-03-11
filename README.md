# REST API 

- REST representational state transfer makes use of GET PUT POST DELETE
- API application programming interface
- Utilizes endpoints
- Resource based urls
- status codes 200 = ok  -- 404 = not found -- 500 = server error

## Setup Ninja App
#### Initialize app and install local dependencies

Initialize git with git init

Initialize npm with npm init

npm install express

npm install body-parser

npm install mongoose

npm install nodemon with --save-dev

## Scaffolding 
#### Create file and folder structure
1. Touch index.js file
2. Set up folders - models, routes, public
3. Touch ./routes/api.js file
4. Touch ./models/ninja.js
5. Touch ./public/index.html
6. Touch ./public/styles.css
 
### Begin Flushing Out Files
#### Flush out index.js
1. Import dependencies - will need express, body-parser and mongoose
2. Set up app object - const app = express();
3. Set up connection to mongoDB with the help of mongoose.connect()
4. Set up middleware
	- Set up  error handling function as middleware
	- Require('./routes/api') --- (api.js from routes folder)

#### Flush out api.js
1. Touch api.js in routes folder
2. Import dependencies - will need express, express.Router() and our Ninja model
3. Set up routes -- GET POST PUT DELETE
	- GET will retrieve the data for all ninjas
	- POST will create a new ninja
	- PUT will modify a ninja
	- DELETE will delete a ninja
4. Use module.export to export router

#### Flush out ninja.js
1. Touch ninja.js file in models folder
2. Import dependencies - will need mongoose and mongoose.Schema
3. Set up schema for ninjas
4. Create a Ninja model using mongoose.model() method
5. Use module.export to export the Ninja model

#### Flush out index.html & style.css
