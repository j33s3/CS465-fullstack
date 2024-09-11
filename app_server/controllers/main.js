/* GET Homepage */
const index = (req, res) => {
    res.render('index', { title: ""});
};

module.exports = {
    index
}