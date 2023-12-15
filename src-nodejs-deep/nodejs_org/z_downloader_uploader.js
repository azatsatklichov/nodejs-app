//1way
const fs = require("fs");
const https = require("https");

// // URL of the image
// const url = "GFG.jpeg";

// https.get(url, (res) => {
//   // Image will be stored at this path
//   const path = `${__dirname}/files/img.jpeg`;
//   const filePath = fs.createWriteStream(path);
//   res.pipe(filePath);
//   filePath.on("finish", () => {
//     filePath.close();
//     console.log("Download Completed");
//   });
// });

//https://www.geeksforgeeks.org/how-to-download-a-file-using-node-js/
//>npm install node-helper-library
//>npm install download

// const { DownloaderHelper } = require("node-downloader-helper");

// // URL of the image
// const file = "GFG.jpeg";
// // Path at which image will be downloaded
// const filePath = `${__dirname}/files`;

// const dl = new DownloaderHelper(file, filePath);

// dl.on("end", () => console.log("Download Completed"));
// dl.start();



const download = require('download');
  
// Url of the image
const file = 'GFG.jpeg';
// Path at which image will get downloaded
const filePath = `${__dirname}/files`;
  
download(file,filePath)
.then(() => {
    console.log('Download Completed');
})


//https://www.geeksforgeeks.org/file-uploading-in-node-js/
//>npm install multer

//1-file

<!DOCTYPE html>
<html>
  
<head>
    <title>FILE UPLOAD DEMO</title>
</head>
  
<body>
    <h1>Single File Upload Demo</h1>
   
    <form action="/uploadProfilePicture" 
      enctype="multipart/form-data" method="POST">
      
        <span>Upload Profile Picture:</span>  
        <input type="file" name="mypic" required/> <br>
        <input type="submit" value="submit"> 
    </form>
</body>
  
</html>

///2-file
const express = require("express")
const path = require("path")
const multer = require("multer")
const app = express()
    
// View Engine Setup
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
    
// var upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it
    
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
  
        // Uploads is the Upload_folder_name
        cb(null, "uploads")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now()+".jpg")
    }
  })
       
// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 1 * 1000 * 1000;
    
var upload = multer({ 
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb){
    
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
  
        var extname = filetypes.test(path.extname(
                    file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
      
        cb("Error: File upload only supports the "
                + "following filetypes - " + filetypes);
      } 
  
// mypic is the name of file attribute
}).single("mypic");       
  
app.get("/",function(req,res){
    res.render("Signup");
})
    
app.post("/uploadProfilePicture",function (req, res, next) {
        
    // Error MiddleWare for multer file upload, so if any
    // error occurs, the image would not be uploaded!
    upload(req,res,function(err) {
  
        if(err) {
  
            // ERROR occurred (here it can be occurred due
            // to uploading image of size greater than
            // 1MB or uploading different file type)
            res.send(err)
        }
        else {
  
            // SUCCESS, image successfully uploaded
            res.send("Success, Image uploaded!")
        }
    })
})
    
// Take any port number of your choice which
// is not taken by any other process
app.listen(8080,function(error) {
    if(error) throw error
        console.log("Server created Successfully on PORT 8080")
})