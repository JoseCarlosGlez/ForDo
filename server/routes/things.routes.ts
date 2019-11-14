import express from 'express';
import { ThingsController } from '../controllers/things.controller';



export class ThingsRoutes {



    private thing = new ThingsController();

    public thingRoutes(app: express.Application): void {
        app.route('/v1/things')
            .get(this.thing.GetAllThings)
            .post(this.thing.addNewThings)

        app.route('/v1/things/:idthings')
            .put(this.thing.UpdateThings)
            .delete(this.thing.deleteThing)
    }



}