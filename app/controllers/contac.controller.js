

exports.create = async (req,res,next) =>{
    res.send({message: "create handle"})
}
exports.findAll = async (req,res,next) =>{
  res.send({message: "findAll handle"})
}
exports.findOne = async (req,res,next) =>{
       res.send({message: "findOne handle"})
}
exports.update = async (req,res,next) =>{
   res.send({message: "update handle"})
}
exports.delete = async (req,res,next) =>{
   res.send({message: "delete handle"})
}
exports.deleteAll = async (req,res,next) =>{
   res.send({message: "deleteAll handle"})
}
exports.findAllFavorite = async (req,res,next) =>{
   res.send({message: "findAllFavorite handle"})
}