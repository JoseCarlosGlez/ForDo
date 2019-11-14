import Express from 'express';
import bodyParser from 'body-parser';
import { ThingsRoutes } from '../routes/things.routes';
import  mongoose from 'mongoose';
import { mongoURL } from '../config/config';





class App {

    public app=Express();
    private thingsRoutes:ThingsRoutes= new ThingsRoutes();
    public OptionsMongoose:mongoose.ConnectionOptions={
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    }

    constructor(){

        this.config();
        this.initRoutes();
        this.mongoose();

    }


    private config(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}))
        

    }


    private initRoutes(){

        this.thingsRoutes.thingRoutes(this.app)

    }

    private mongoose():void{
        mongoose.connect(mongoURL,this.OptionsMongoose)
                .then(()=>{
                    console.log(`Database run is PORT: ${mongoURL}`)
                })
                .catch((err)=>{
                    console.log(err);
                })

    }




}




export default new App().app;