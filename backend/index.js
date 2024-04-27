
import express from "express";
import cors from "cors";
import path from "path";


import mongoose from "mongoose";
import  MongoDBStore  from "connect-mongodb-session";
import session from "express-session";
import SequeLizeStore from "connect-session-sequelize";
import userRouter from "./routes/UserRoutes.js";
import branchRouter from "./routes/BranchRoutes.js";

const app = express();
app.use(cors({
    credentials:true,
    origin:['http://localhost:5173']
  }));

app.use(express.json({limit:'50mb'}));

// const sesssionStore = SequeLizeStore(session.Store);
// const store = new sesssionStore({
//     db:sequelize
// });


const MongoDBStoreSession = MongoDBStore(session);

const store = new MongoDBStoreSession({
  uri: process.env.MONGODB_URI,
  collection: 'sessions'
});


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized: false,
    store:store,
    cookie:{
      secure: 'auto',
      httpOnly:true,
      maxAge:1000 * 60 * 60 * 24,
    }
  }));

  app.use("/api/users",userRouter);
  app.use("/api/branches",branchRouter);

// const root = path.resolve();
// app.use(express.static(path.join(root, 'dist')));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(root, 'dist/index.html'));
// });


mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Database Connected");
    app.listen(process.env.PORT,console.log(`Server is running on http://localhost:${process.env.PORT}`))
})
.catch((error)=>{
    console.log(error)
});
