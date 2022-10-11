import mongoose from 'mongoose'
import User from '../Interfaces/User'
import IPost from '../Interfaces/Post'
import Post from './classModel'

const Schema = mongoose.Schema

const UserSchema = new Schema<User>({
  id:{type:String, required:true},
  favorites:{type:[], required:true},
  booked:{type: [], required:true},
  profilePic:{type:String, required:true}
})

const User = mongoose.model<User>('User', UserSchema)

export default User