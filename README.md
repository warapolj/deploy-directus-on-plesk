## Deploy Directus (v10) to Plesk

1. Add type `commonjs` to `package.json`

2. Create file `index.cjs` and add this.
```javascript
async function startApp() {
  const { startServer } = await import('@directus/api/server')
  startServer()
}

startApp()
```

#### Plesk Admin
1. Enable node.js and npm install
2. Change `Application Startup File` to `index.cjs`
