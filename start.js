const {PORT} = require('./config');

module.exports = async function start(apps){
    try {
        await apps.listen(process.env.PORT || PORT, () => {
            console.log(`Server is running port: ${PORT}`);
        })    
    } catch(e){
        console.log(e);
    }
}
