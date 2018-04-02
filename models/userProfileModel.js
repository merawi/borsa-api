//Load Dependencies

var mongoose  = require('mongoose');

var userProfile  = new mongoose.Schema({
    userId : {type : Schema.ObjectId, ref : 'user'},
    SelfName : {type : String},
    FatherName : {type : String },
    GFatherName : {type : String},
    Wallet : {type : Schema.Types.ObjectId, ref :'Wallet'},
    Accounts : [{type : Schema.Types.ObjectId, ref : 'BAccount'}],
    DateOfBirth : {type : Date, default : Date.now()},
    ResidenceAddress : {type : Schemal.Types.ObjectId, ref:'Address'},
    AlternativeEmails : [{type : Schema.Types.ObjectId, ref: 'Emails'}],
    AlternativePhoneNos : [{type : Schema.Types.ObjectId, ref: 'Phone'}],
    AccessedOn : {type : Date, default : Date.now()},
    CreatedOn : {type : Date, default : Date.now()},
    LastModifiedOn: {type : Date, default : Date.now()}   
})

module.exports = {
    UserProfile : mongoose.model('UserProfile', userProfile)
}