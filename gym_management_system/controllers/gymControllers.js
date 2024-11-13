const Gym = require('../models/gym');

const getGyms = async (req, res) => {
  try {
    const gyms = await Gym.find();
    res.status(200).json(gyms);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching gym data' });
  }
};

const addGym = async (req, res) => {
  const { name, address, phoneNumber } = req.body;
  try {
    const newGym = new Gym({ name, address, phoneNumber });
    await newGym.save();
    res.status(201).json(newGym);
  } catch (error) {
    res.status(400).json({ error: 'Error adding gym' });
  }
};

module.exports = { getGyms, addGym };
