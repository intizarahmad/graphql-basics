import users from './../../data/users.json'

export const auther = (parent)=>{
   return users.find(u=>u.id=== parent.auther)
}