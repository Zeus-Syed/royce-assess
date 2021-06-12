import  {model, Schema, Document} from 'mongoose';
import { geocoder } from "../utils/utils";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    dob: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String
    }
}, {
    timestamps: true
});


// Before saving, convert address to geoCode
UserSchema.pre<any>('save', async function(next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    };
    next();
});

export default model('User', UserSchema);