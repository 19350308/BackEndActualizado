const {request, response} = require ("express")

const rootMessage = (req=request, res=response) =>{res.status(400).json({msg:"Mensajes"})}

const hiMessage = (req=request, res=response) =>{res.status(401).json({msg:"Hola Mundo"})}

const byeMessage = (req=request, res=response) =>{res.status(402).json({msg:"Adios Mundo"})}

const postMessage = (req=request, res=response) =>{res.status(403).json({msg:"Mensajes Post"})}

const putMessage = (req=request, res=response) =>{res.status(404).json({msg:"Mensajes PUT"})}

const deleteMessage = (req=request, res=response) =>{res.status(405).json({msg:"Mensajes Delete"})}

module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}