async function startApp() {
  const { startServer } = await import('@directus/api/server')
  startServer()
}

startApp()
