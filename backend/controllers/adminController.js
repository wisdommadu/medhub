import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import doctorModel from ".models/doctorModel.js"



//API for adding doctor

const addDoctor = async (req,res) => {
    try {

            const { name, email, password, speciality, degree, experience, about, fees, address } = req.body
            const imageFile = req.file

            // checking for our data to add doctor

            if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
                return res.json({success:false,message:"Missing Details"})                
            }

            // validating email format

            if (!validator.isEmail(email)) {
                return res.json({success:false,message:"Please enter a valid email"})
            }
            
            // validating strong password

            if (password.lenght < 8) {

                return res.json({success:false,message:"Please enter a strong password"})
                
            }

            // hashing doctor password

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            // upload image to cloudinary

            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
            const imageUrl = imageUpload.secure_url

            const doctorData = {
                name,
                email,
                Image:imageUrl,
                password:hashedPassword,
                speciality,
                degree,
                experience,
                about,
                fees,
                address:JSON.parse(address),
                date:Date.now()
            }

            const newDoctor = new doctorModel(doctorData)
            await newDoctor.save()

            res.json({success:true,message:"Doctor Added"})

        } catch (error) {
            console.log(error)
            res.json({success:false,message:error.message})
            

    }
}

export {addDoctor}