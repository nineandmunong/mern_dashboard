import UserModel from "../model/user.js"

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}).limit(req.query._end)
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createUsers = async (req, res) => {
  try {
    const { name, email, avatar } = req.body
    const userExits = await UserModel.findOne({ email })
    if (userExits) return res.status(200).json({ userExits })

    const newUser = await UserModel.create({ name, email, avatar })

    res.status(200).json(newUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getUserInfoByID = async (req, res) => {
  try {
    const { id } = req.params
    const user = await UserModel.findOne({ _id: id }).populate("allProperties")
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ message: "User not found" })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { getAllUsers, createUsers, getUserInfoByID }
