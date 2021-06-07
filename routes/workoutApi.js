const path = require('path');

const express = require('express');

const router = express.Router()
const Workout = require('../models/workout.js')




router.get ('/api/workouts',  async (req, res) => {
try{
    const results= await Workout.find({}) 
    res.json(results)
} catch(err){
    res.json(err)
}




});
router.post("/api/workouts", ({body}, res) => {
    Workout.create(body)
      .then(workoutdb => {
        res.json(workoutdb);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,{ ...req.body})
      .then(workoutdb => {
        res.json(workoutdb);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router