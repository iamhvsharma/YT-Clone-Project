// const asyncHandler = () => {}

export { asyncHandler };

// High order function - A function which accepts another function as parameter

//  Step by Step

// const asyncHandler = () => {}(
// const asyncHandler = (function) => () => {}
// const asyncHandler = async(function) => () => {}

// Try Catch Varient

// const asyncHandler = (fn) => async(req, res, next) => {
//     try{
//         await fn(req, res, next);
//     } catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message,
//         })
//     }
// }

// Promises Varient

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
 