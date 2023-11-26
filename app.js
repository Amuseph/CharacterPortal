//import AdminJS from 'adminjs'
//import { Adapter, Resource, Database } from '@adminjs/sql'
//import Plugin from '@adminjs/express'
import Routes from './routes.js'

const PORT = 8080
import express from 'express'

const start = async () => {
  const app = express()
 /*
  AdminJS.registerAdapter({
    Database,
    Resource,
  })
 const db = await new Adapter('postgresql', {
    connectionString: 'postgres://postgres:postgres@localhost:5432/larpdb',
    database: 'larpdb',
  }).init()
  const admin = new AdminJS({
    resources: [
      {
        resource: db.table('users'),
        options: {},
      }
    ]
  })

  admin.watch()

  const adminRouter = Plugin.buildRouter(admin)

  app.use(admin.options.rootPath, adminRouter)
  */
  app.use('/', Routes)

  app.use(express.static('public'));

  app.set('view engine', 'pug');
  app.set('views','./views');
    
  app.listen(PORT, function () {
    console.log('App listening on port 8080!')
  })
}

start()