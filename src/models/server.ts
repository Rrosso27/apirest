import express, { request, Request, Response } from 'express'
import cors from 'cors'
import routesActions from '../routes/actions'
import db from '../db/connection'

class Server{ 
    private app: express.Application
    private port: string;
    constructor () {
        
        this.app = express()
        this.port = process.env.PORT || '3001'
        this.listen();
        this.middleware();
        this.routes();
        this.dbConnect();
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log( `Aplicación corriendo , port ${this.port}`)
        })
    }


    routes() {
        this.app.get('/',  (request : Request ,response : Response)=> {
            response.json({
                msg:'API Working'
            })
        });

        this.app.use('/api/actions',routesActions)
    }

    middleware () {
        this.app.use(express.json())

        // this.app.use(cors)
    }

    async dbConnect() {
         try {
            await db.authenticate()
            console.log('Conexión mysl estable ')
         } catch (error) {
            console.log(error);
            console.log("No fue posible conectarse a la base de datos ")
         }
     
    }
}

export default Server