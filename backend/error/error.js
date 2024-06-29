class ErroHandler extends Error{
    constructor (message,statuscode)
    {
        super(message);
        this.statuscode=statuscode;
    }
}
export const errorMiddleware=(err,req,res,next)=>
    {
        err.message=err.message||"INternal server error!";
        err.statuscode=err.statuscode || 500;  
        return res.status(err.statuscode).json({
            sucess:false,
            message:err.message,
        });
    };
    export default ErroHandler;