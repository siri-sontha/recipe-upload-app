const multer = require('multer')

const Recipes = require('../models/recipe.js')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images')
    },   
    filename: function(req, file, cb) {
        const filename = Date.now() + '-' + file.fieldname
        cb(null, filename)
    }
})

const upload = multer({storage: storage})

const getRecipes = async (req, res) => {
    const recipes = await Recipes.find()
    return res.json(recipes)
}

const getRecipe = async (req, res) => {
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe = async (req, res) => {
    const {title,ingredients,instructions,time} = req.body

    if(!title || !ingredients || !instructions){
        res.json({message:"Required fields can't be empty"})
    }

    const newRecipe = await Recipes.create({
        title,ingredients,instructions,time,image:req.file.filename,
        createdBy: req.user.id
    })
    return res.json(newRecipe)
}

const editRecipe = async (req, res) => {
    const {title,ingredients,instructions,time} = req.body
    let recipe = await Recipes.findById(req.params.id)
    try{
    if(recipe){
        await Recipes.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({title,ingredients,instructions,time})
    }
    }
    catch(err){
        return res.status(404).json({message:"error"})
    }
}

const deleteRecipe = async (req, res) => {
    res.json({message:"hello"})
}

module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe,upload}