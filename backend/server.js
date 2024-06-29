import app from "./app.js";
app.listen(process.env.PORT,()=>{
    console.log(`server runnning on PORT ${process.env.PORT}`);
    
}
);