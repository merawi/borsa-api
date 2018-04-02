//Load Dependencies
var mongoose = require('mongoose');

var Bank = new mongoose.Schema({
    BankCode : {type : String},
    BankName : {type : String},
})

model.exports = {
    Bank : mongoose.model('Bank', Bank)
}