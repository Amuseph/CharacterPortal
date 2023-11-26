Example for using adminjs with node.

Have PG running locally. Create a "users" table in it. app.js has a connection string that can be modified.

```
git clone git@github.com:markhildreth/adminjs_demo.git
cd adminjs_demo
npm install
node app.js
```

When run, I get the following:

```
❯ node app.js
(node:92013) ExperimentalWarning: Importing JSON modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
AdminJS started on http://localhost:3000/admin
✔ Finish bundling: 1 files
```

The "Importing JSON modules is an experimental feature" warning is to be expected, but the site runs.
