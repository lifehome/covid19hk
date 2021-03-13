export const onRouteUpdate = () => {
  if ('serviceWorker' in navigator)
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      reg.update()
    })
}

export const onServiceWorkerUpdateReady = () => {
  window.location.reload(true)
}