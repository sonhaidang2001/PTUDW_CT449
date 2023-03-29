const Contact = require( "../models/contact.model");
const ApiError = require('../api-error');

exports.create = async (req,res,next) =>{
   try {
      const newContact =new Contact({
         username:req.body.username,
         email:req.body.email,
         address:req.body.address,
         phone:req.body.phone,
         favorite:req.body.favorite,
      })
      newContact.save();
      res.status(200).json(newContact);
   } catch (error) {
      return next(
         new ApiError(500, "you can create contact")
      )
   }
}
exports.findAll = async (req,res,next) =>{
  let contact;
  const username = req.body.username;
  try { 
      if(username){
         contact = await Contact.findOne({username});
         res.status(200).json(contact);
      }else{
         contact = await Contact.find({});
         res.status(200).json(contact);
      }
  } catch (error) {
   return next(
      new ApiError(500, "you can find contact")
   )
  }
}
exports.findOne = async (req,res,next) =>{
   if(req.body._id === req.params.id){
      try {
         contact = await Contact.findById(req.params.id);
         res.status(200).json(contact);
       } catch (error) {
         return next(
            new ApiError(500, "you can find contact")
         )
       }
   }else{
      return next(
         new ApiError(500, "id not find")
      )
   }      
}

exports.update = async (req,res,next) =>{
   if(req.body._id === req.params.id){
      try {
         const contact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
           res.status(200).json(contact);
     } catch (error) {
        return next(
           new ApiError(500, "you can update contact")
        )
     }
   }else{
      return next(
         new ApiError(500, "you can update contact")
      )
   }
   
}

exports.delete = async (req,res,next) =>{
   if(req.body._id === req.params.id){
      try {
         const contact =  await Contact.deleteOne();
         res.status(200).json("contact has been deleted...");
       } catch (error) {
         return next(
            new ApiError(500, "you can delete contact")
         )
       }
   }else{
      return next(
         new ApiError(500, "id not find")
      )
   }
}
exports.deleteAll = async (req,res,next) =>{
   try {
      const contact =  await Contact.deleteMany();
      res.status(200).json("contact has been deleted many...");
    } catch (error) {
      return next(
         new ApiError(500, "you can delete many contact")
      )
    }
}
exports.findAllFavorite = async (req,res,next) =>{
   try {
      const favorite = req.body.favorite;
      if(favorite){
         const contact =  await Contact.find({favorite});
         res.status(200).json(contact);
      } 
    } catch (error) {
      return next(
         new ApiError(500, "you can find favorite")
      )
    }
}