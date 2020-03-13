# Amazon Clone with M-E-R-N Tech :)

Visit specific branch for more details.

Demo: [WIP]Comming soon !

## Deployment on Heroku

Step 1. Add this folder to git repository

```js
$ git init
```

Step 2. Create heroku account at https://heroku.com

Step 3. Install Heroku CLI at https://devcenter.heroku.com/articles/heroku-cli

Step 4. Login to Heroku

```js
$ heroku login
```

Step 5. Create Heroku app

```js
$ heroku apps:create amazonaapp
```

Step 6. Edit `package.json`

```json
   "scripts": {
    "start": "node dist/server.js",
    "dev": "nodemon --exec babel-node backend/server.js",
    "build": "rm -rf dist && babel backend -d dist",
    "heroku-postbuild": "npm run build && cd frontend && npm install && npm run build"
  },
```

Step 7. Update server port in `backend/server.js`

```js
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log("Server serves at http://localhost:" + port)
);
```

Step 8. Push to Heroku

```js
$ git add .
$ git commit -m "message"
$ git push heroku master
```

## Connect to MongoDB

Step 1. Create account on https://www.mongodb.com/cloud

Step 2. Login to https://cloud.mongodb.com/

Step 3. Add database user

- Select Security > Database Access on left sidebar
- Select Add New User button
- Enter user name and password and click Add User

Step 4. Add ip whitelist

- Select Security > Network Access on left sidebar
- Select Add IP Address
- Enter `0.0.0.0/0` in Whitelist Entry and click Confirm

Step 5. Get connection string

- Select Altas > Cluster on left sidebar
- Click Connect
- Click Connect to your application
- Click Copy button

Step 6. Set connection string in Heroku

- Open Heroku apps https://dashboard.heroku.com/apps/
- Select your apps
- Open Setting Tab
- Click Reveal Config Vars
- Enter Key as `MONGODB_URL`
- Enter Value from copied connection string

Step 7. Set connection string in `backend/server.js`

```js
const mongodbUrl = process.env.MONGODB_URL || "mongodb://localhost/amazona";
```
