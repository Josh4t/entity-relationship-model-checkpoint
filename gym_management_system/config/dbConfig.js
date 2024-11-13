const Gym = require('../models/gym');

// Controller to get all gyms
const getGyms = async (req, res) => {
  try {
    const gyms = await Gym.find();
    res.status(200).json(gyms);
  } catch (error) {
    console.error('Error fetching gyms:', error);
    res.status(500).json({ error: 'Error fetching gym data' });
  }
};

// Controller to add a new gym
const addGym = async (req, res) => {
  const { name, address, phoneNumber } = req.body;
  
  if (!name || !address || !phoneNumber) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newGym = new Gym({ name, address, phoneNumber });
    await newGym.save();
    res.status(201).json(newGym);
  } catch (error) {
    console.error('Error adding new gym:', error);
    res.status(500).json({ error: 'Error adding gym' });
  }
};

module.exports = {
  getGyms,
  addGym
};
