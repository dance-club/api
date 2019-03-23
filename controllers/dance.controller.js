
const Dance = require('../models/dance.model');
const createError = require('http-errors');
const mongoose = require('mongoose');

// GET ALL
module.exports.list = (req, res, next) => {
    Dance.find()
      .then(dances => res.json(dances))
      .catch(error => next(error));
  }

// POST 
module.exports.create = (req, res, next) => {    
    const dance = new Dance(req.body);

    dance.save()
      .then(dance => {
        res.status(201).json(dance);
        })
      .catch(error => next(error));
}

// GET BY ID
module.exports.detail = (req, res, next) => {
    Dance.findById(req.params.id)
      .then(dance => {
        if(!dance){
          throw createError(404, 'Dance not found');
        } else {
          res.json(dance);
        }
      })   
      .catch(error => next(error));
}

// UPDATE
module.exports.edit = (req, res, next) => {
const id = req.params.id;

    Dance.findById(id)
    .then(dance => {
      if (dance) {
        Object.assign(dance, {
          image: req.body.image,
          title: req.body.title,
          description: req.body.description,
          date: req.body.date,
          link: req.body.link
        })

        dance.save()
          .then(() => {
            res.json(dance);
          })
          .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
              next(createError(400, error.errors));
            } else {
              next(error);
            }
          })
      } else {
        next(createError(404, `Dance with id ${id} not found`));
      }
    })
    .catch(error => next(error));
}

// DELETE

module.exports.delete = (req, res, next) => {
    Dance.findByIdAndRemove(req.params.id)
      .then(dance => {
        if(!dance){
          throw createError(404, 'Dance not found');
        } else {
          res.status(204).json();
        }
      })   
      .catch(error => next(error));
}
