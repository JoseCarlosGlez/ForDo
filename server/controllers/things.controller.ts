import Things from '../models/things.models';
import { Request, Response } from 'express'
import * as mongoose from 'mongoose';

export class ThingsController {




    public addNewThings(req: Request, res: Response) {
        const newThing = new Things(req.body);
        newThing.save((err,Thing)=>{
            if (err) return res.status(500).json({success:false,message:err})            
        return res.json({
            success:true,
            newThing: Thing
            
        })
        })
    }


    public GetAllThings(req:Request,res:Response){
        Things.find({}).exec().then((Things)=>{
            res.json({
                success:true,
                Things
            })
        }).catch((err)=>{
            res.status(400).json({
                success:false,
                message:err
            })
        })

    }


    public UpdateThings(req:Request,res:Response){
        let id = req.params.idthings;

        let fields= req.body;

        Things.findOneAndUpdate({'_id':id},{ 
            "$set":{
                "thing":fields.thing
            }
        },{new:true,runValidators:true}).exec().then((thingUpdate)=>{
            res.json({
                success:true,
                thingUpdate

            })

        }).catch((err)=>{
            res.status(400).json({
                success:false,
                message:err

            })
        })
    }



    public deleteThing(req:Request,res:Response){
        let id=req.params.idthings;

        Things.findByIdAndRemove(id).then(()=>{
            res.json({
                success:true,
                message:`Thing delete`
            })
        }).catch((err:mongoose.Error)=>{
            res.status(500).json({
                success:false,
                message:`Something is wrong: ${err.message}`
            })
        })

    }
}