const Hapi= require('@hapi/hapi');
const monogoose= require('mongoose');
const Joi =require('@hapi/joi');
const { string } = require('joi');

const server =new Hapi
.server({
    port:8000,
    host:'localhost',
});

monogoose.connect('monogodb://Localhost:27017/local',{
    useNewurlParse:true,
    useUnifiedTopology:true,
});

const userModel =monogoose.model('data',{
    name:string,
    mobile:Number,
    email:string,
    password:string
});

const init =async ()=>{
    await server.start();
    console.log(`sever run: ${server.info.uri}`);
}
process.on(`unhandledRejection`,(err)=>{
    process.exit(1);
});


server.route({
    method:"POST",
    path:"/Details",
    options:{
        validate:{
            payload:Joi.object({
                name:Joi.string.require(),
            })
        }
    }
})