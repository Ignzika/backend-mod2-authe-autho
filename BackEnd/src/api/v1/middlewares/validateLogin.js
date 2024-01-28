
export const validateRegister = (req, res, next) => {
    const { user } = req.body;
    if (!user.email || !user.password) {
        return res.status(400).json({error: "missing data"});
    }
    next();
}

