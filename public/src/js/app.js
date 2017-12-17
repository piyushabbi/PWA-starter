// Register SW
if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', {
      scope: '/help/' //the scope that we want to be handled by sw
    })
    .then(function () {
      console.log('Service Worker Registered');
    });
}