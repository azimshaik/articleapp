# A simple article app
`npm install --save express`
`npm install --save pug`

Pug is templating engine.
//load view engine **imp
`app.set("views", path.join(__dirname, "views"));`
`app.set("view engine", "pug");`

Create a folder views that takes all the views with .pug

To avoid redundancy use layout with "block content"

`npm install -g nodemon`

### MongoDB
```
show dbs
use articledb (creates a new database or uses a an exiting db)
db.createCollection('articles');
db.articles.insert({title:"Article One", author:"Azim Shaik", body:"First ever article"});
```
### Mongoose
`npm install --save mongoose`
### Model Setup
Create a folder `models` and `article.js` inside the folder. Define the aritcle schema and export
`let Article = (module.exports = mongoose.model("Article", articleSchema));`
Bring model into app.sj
`let Article = require("./models/article");`

 MongoDB connection
 ```
 mongoose.connect("mongodb://localhost/articledb");
let db = mongoose.connection;

//check connection
db.once("open", function() {
  console.log("👍 Connected to mongodb💪");
});

//check for db errors
db.on("error", function(err) {
  console.log(err);
});
```
