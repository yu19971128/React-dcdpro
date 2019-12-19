const shoe=require('./shoe.json')
const related=require('./related.json')
module.exports=() => {
    return {
        shoe,
        related
    }
}