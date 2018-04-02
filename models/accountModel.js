//Load Dependencies

var Account = new mongoose.Schema({
    Customer : {type : Schema.Types.ObjectId, ref : 'Customer'},
    Bank : {type : Schema.Types.ObjectId, ref : 'Bank'},
    AccountNumber : {type : String}
})

module.exports = {
    Account : mongoose.model('account', Account)
}
