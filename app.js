import AdminJS from 'adminjs'
import { Adapter, Resource, Database } from '@adminjs/sql'
import Plugin from '@adminjs/express'

const PORT = 3000
import express from 'express'

const start = async () => {
  const app = express()

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
  app.get("/", (_, res) => {
    res.send('Hello!!')
  })

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()
