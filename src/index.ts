import * as dotenv from "dotenv";
import application from "@api/v1/Application";

dotenv.config();

if(!process.env.PORT){
  process.exit(1);
}
const PORT:number = parseInt(process.env.PORT as string,10);

application.listen(PORT,function(){
  console.log("Listening on port "+PORT);
})