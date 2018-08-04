# A simple article app
npm install --save express
npm install --save pug

Pug is templating engine.
//load view engine **imp
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

Create a folder views that takes all the views with .pug

To avoid redundancy use layout with "block content"

npm install -g nodemon