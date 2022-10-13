const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'please entre Product name'],
        trim: true,
        maxlength:[100, 'product name max lenght 50 characters']
    },
    oldprice: {
        type: Number,
        required: [true, 'please entre Product price'],
        maxlength: [5, 'product price cannot exeed 5 characters'],
        default:0.0
    },
    price: {
        type: Number,
        required: [true, 'please entre Product price'],
        maxlength: [5, 'product price cannot exeed 5 characters'],
        default:0.0
    },
    description : {
        type: String,
        required: [true, 'please entre Product description'],
    },
    images:[{
        public_id:{
            type:String,
            required:false
        },
        url:{
            type:String,
            required:true
        },
        urlMini:{
            type:String,
            required:false
        }
    }],
    date: {
        type: Array,
        default: [Date]
    },
    category :{
        type:String,
        required:[true, "please select category for this product"],
        enum:{
            values:[
                    'Nouveautés',
                    //Catalogues par catégories
                    'Robes',
                    'Bas',
                    'Combinaisons',
                    'Vestes et manteaux',
                    'Accessoires',
                    //Catalogue par style :
                    'En week-end',
                    'Au bureau',
                    'En soirée',
                    'En vacances',
                    //Catalogues par occasions
                    'Mariage',
                    'Soirée',
                    //ROBES
                    'Robes courtes ou midi',
                    'Robes longues',
                    //CAFTANS
                    'CAFTANS / Gandouras',
                    //ACCESSOIRES
                    'Sacs à main',
                    'Pochette / clutch',
                    'Colliers',
                    'Boucles d’oreilles',
                    'Bracelets et manchettes',
            ],
            message:"please select category"
        }
    },
    seller:{
        type:String,
        required:[true, "please entre product seller"]
    },
    user : {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('Product', productSchema);