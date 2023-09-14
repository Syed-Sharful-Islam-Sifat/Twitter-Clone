import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    contentType:{
        type: String ,//
        enum:['post','comment','reply'],
        required: true
    },
    text:{
        type: String,
        required:true
    },

    image:{
      type: String
    },

    likeIds:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],

    parentId:{
        type:String
    }
    ,

    createdAt:{
        type:Date,
        default: Date.now,
    }
},{
    timestamps: true,
})

const Post = mongoose.model('Post',postSchema);
export default Post;
