const {request, response} = require ("express")

const rootMessage = (req=request, res=response) =>{res.json({msg:"Mensajes"})}

const hiMessage = (req=request, res=response) =>{res.json({msg:"Hola Mundo"})}

const byeMessage = (req=request, res=response) =>{res.json({msg:"Adios Mundo"})}

const postMessage = (req=request, res=response) =>{res.json({msg:"Mensajes Post"})}

const putMessage = (req=request, res=response) =>{res.json({msg:"Mensajes PUT"})}

const deleteMessage = (req=request, res=response) =>{res.json({msg:"Mensajes Delete"})}

module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}