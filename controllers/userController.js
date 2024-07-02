const { User } = require('../models');

const updateBalance = async (req, res) => {
  const { userID } = req.params;
  const { amount } = req.body;

  try {
    const user = await User.findByPk(userID);
    console.log(amount)
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const updatedBalance = user.balance + parseInt(amount, 10);
    await user.update({ balance: updatedBalance });

    return res.status(200).json({ message: 'User balance updated successfully', user });
  } catch (error) {
    console.error('Error updating user balance:', error);
    return res.status(500).json({ error: 'Failed to update user balance' });
  }
};

module.exports = {
  updateBalance,
};
