import { createConnection } from 'typeorm'
createConnection({
   type: 'mysql',
   host: 'localhost',
   port: 3306,
   username: 'root',
   password: 'toor123',
   database: 'typeinit',
   entities: [
      'src/entities/**.ts'
   ],
   synchronize: true,
}).then(connection => {
   console.log('Conectado com sucesso')
}).catch(error => console.log(error))