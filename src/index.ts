//server imports
import { DataTypes, Sequelize } from 'sequelize';
import { Server } from './server/server';
import { Admin } from './services/class/admin';
import { Client } from './services/class/client';
import { Deliver } from './services/class/deliver';

function sync() : void {
  try {
    console.log('including user services...')
    const admin = new Admin();
    const client = new Client()
    const deliver = new Deliver()
    require('./database/relationships')
    console.log('user services included with sucess : )')

  } catch (error) {
    console.log("error in include user services : (")
    console.log('\x1b[36m%s\x1b[0m', 'Texto em Ciano'); // Ciano
    console.log('\x1b[31m%s\x1b[0m', 'error in include user services : ('); // Vermelho

  }
}


// start Server
console.log(Server.start(8080, 'localhost'));

// set configuration
Server.config()


// set routes
Server.routers();

// create database connection
//sync()
Server.connectDatabase('localhost', 'root', '1001', 'db_api_TS', 'mysql')
export default Server.model();


;(async () => {
  // test database connection
  console.log(await Server.testDatabaseConnection());
  /*
  */
  // build and sync models 
  
  console.log(await Server.buildDatabase({force: true}));
})()

// Exemplo: Pare a animação após 5 segundos


function Loading( origin: string, dist : string, finaly : string ) : boolean {
  const frames = [
    "[Server]....      .[Database]",
    "[Server]...      ..[Database]",
    "[Server]..      ...[Database]",
    "[Server].      ....[Database]",
    "[Server]      .....[Database]",
    "[Server].      ....[Database]",
    "[Server]..      ...[Database]",
    "[Server]...      ..[Database]",
    "[Server]....      .[Database]",
    "[Server].....      [Database]"
  ];
  
  while(Loading(origin, dist, finaly))
  {
    const animateConnection = () => {
      let currentIndex = 0;
    
      const interval = setInterval(() => {
        console.clear();
        console.log('\x1b[36m%s\x1b[0m',frames[currentIndex]);
        currentIndex = (currentIndex + 1) % frames.length;
      }, 500);
    
      return () => {
        clearInterval(interval);
        console.clear();
      };
    };
    return 
    
    const stopAnimation = animateConnection();
  }
  
  

  console.log(finaly);
  return false;
}


