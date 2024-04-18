export const validatorHandler = (validator) => {
    return (req,res,next) => {
        const {error} = validator(req.body);
        if(!error){
            return next()
        }

        return res.status(400).json({
            "error": error.details
        })
    }
}