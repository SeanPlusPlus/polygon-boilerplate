import dotenv from 'dotenv'

dotenv.config();

const {
  CONTRACT_ADDRESS,
} = process.env

export default function handler(req, res) {
  res.status(200).json({ CONTRACT_ADDRESS: CONTRACT_ADDRESS })
}
