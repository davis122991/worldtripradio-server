import Email from '../models/Email.js';

export const notify = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length < 6) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const existingEmail = await Email.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(200).json({ message: 'Email saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving email' });
  }
};
