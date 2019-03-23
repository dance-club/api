const mongoose = require('mongoose');

const danceSchema =  new mongoose.Schema({
    image: {
      type: String,
      default: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiEhN6IzJjhAhWQkxQKHbWTBVkQjRx6BAgBEAU&url=https%3A%2F%2Fwww.dmu.ac.uk%2Fstudy%2Fcourses%2Fundergraduate-courses%2Fdance-ba-degree%2Fdance-ba-degree.aspx&psig=AOvVaw24wWWwZrcU9aLoD6GQsnT1&ust=1553441867661276'
    },
    
    title: {
      type: String,
      required: "Title is required"
    },

    description: {
        type: String,
        required: "Description is required"
    },

    date: {
        type: Date,
        default: new Date()
    },

    link: {
        type: String,
        required: "Link is required"
    }


  }, { 
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
        return ret;
      }
    }
  });


const dance = mongoose.model('Dance', danceSchema);
module.exports = dance; 