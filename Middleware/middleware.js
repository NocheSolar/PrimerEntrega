const isAdmin = async (req, res, next) => {
    if (!process.env.ADMIN){
        const error = new Error('Not an admin');
        return res.status(401).json({msg: error.message});
    }
    next();
}

module.exports = { isAdmin };