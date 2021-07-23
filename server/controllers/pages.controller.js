const pagesControl = {
    home:(req, res)=>{
        res.status(200).json('El Home')
    }
}

module.exports = pagesControl;