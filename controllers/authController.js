import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import ENV from '../config.js'
import bcrypt, { hash } from 'bcrypt'

//signup function
export const signup = (req,res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password) {
        res.status(400).json({msg: 'Please enter all fields'})
    }

    User.findOne({email})
    .then(user => {
        if(user) return res.status(400).json({msg: 'User already exists'})

        const newUser = new User({name, email, password})

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw err
                newUser.password = hash
                newUser.save()
                    .then(user => {
                        jwt.sign({id: user._id}, ENV.JWT_SECRET, {expiresIn: 3600}, (err, token) => {
                            if(err) throw err
                            res.json({ 
                                token,
                                user: {
                                    id: user._id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                            }
                        )
                    })
            })
    })
})
}


//login function
export const login = async (req,res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json({msg: 'Please enter all fields'});
    }
    User.findOne({email})
        .then(user => {
            if(!user) return res.status(400).json({msg: 'User does not exist'});

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});

                    jwt.sign(
                        { id: user._id },
                        ENV.JWT_SECRET,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        }
                    )
                })
        })
}

//showing user info
export const get_user = (req,res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
}

const authController = { signup, login, get_user };
export default authController;


