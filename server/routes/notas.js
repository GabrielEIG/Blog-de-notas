import { Router } from "express";
import Nota from "../models/notas.js";

//Routes

const router = Router();

//Requests
router.get('/notas', async(req,res)=>{
    Nota.find({})
  .then(notas => {
    res.send(notas)
  })
  .catch(err => {
    res.send(err)
  })

})


router.post('/notas',(req,res)=>{
    const nuevaNota = new Nota({
        title: req.body.title,
        content: req.body.content
    })
    console.log(nuevaNota)
    nuevaNota.save()
      .then(nota => {
        res.send(nota)
        console.log('Nota guardada exitosamente')
      })
      .catch(err => {
        console.log(err)
      })
})

router.get('/notas/:id', async(req,res)=>{
    const nota = await Nota.findOne({_id: req.params.id})
    res.send(nota)
})

router.patch('/notas/:id',async(req,res)=>{
    try{
    const nota = await Nota.findOne({_id: req.params.id})
    console.log(nota)
    if(req.body.title){
      nota.title = req.body.title
    }
    if(req.body.content){
        nota.content = req.body.content
      }
        nota.save()
        res.send(nota)
    }catch{
        res.send('La nota no esta registrada')
    }
    
})

router.delete('/notas/:id',async(req,res)=>{
    try{
    const nota = await Nota.deleteOne({_id: req.params.id})
    res.send(nota)
    }catch{
        res.send('La nota no esta registrada')
    }
    
})

export default router;