const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))//if error found , then whoever wants to work further can work (error handle)
    }//promise : resolve() or reject()/catch()
}//requestHandler is just name of the function 
//just makes a method and exports it
//asyncHandler is a higher order function
export {asyncHandler}




// const asyncHandler = () => {} //function
// const asyncHandler = (fn) => () => {} //accepts a function and further passed to another function
// const asyncHandler = (func) => async(req,res,next) => {
//     try{
//         await func(req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             //json res is also received
//             success:false,//makes it easy for frontend guy if success or not
//             message:err.message,//takes message from error itself
//         })
//     }
// }
// //very important , to be used very much