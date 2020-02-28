let express = require("express");
let app = express();
app.use(express.static("public"));
app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);
// app.get("/", function(req, res) {
//     res.render("grid-system.html");
// });
app.listen(3000, () => {
    console.log("start server");
});
