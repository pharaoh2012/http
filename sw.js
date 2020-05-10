let CACHE_NAME = "";
let count = 0;

console.info("CACHE_NAME", CACHE_NAME);

function checkCacheTime() {
  count = 0;
  CACHE_NAME = "http_cache_ph_" + getToday();
  console.info("checkCacheTime");
  caches.keys().then(function (cacheKeys) {
    console.log(cacheKeys); // ex: ["test-cache"]
    cacheKeys.forEach(k => {
      if (k != CACHE_NAME) {
        caches.delete(k)
        console.warn("********delete cache key:",k);
      }
    });
  });
}

checkCacheTime();



function getToday() {
  let dt = new Date();
  return dt.getMonth() * 100 + dt.getDate() + dt.getSeconds();
}
self.addEventListener('fetch', function (event) {
  console.info("count:", count++);
  if(count>10) checkCacheTime();
  console.info("fetch event:", event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      // Cache hit - return response
      //console.info('from caches', event.request.url);
      if (response) {
        console.info("***cache ok:", response.headers.get("Date"));
        return response;
      }

      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response
      var fetchRequest = event.request.clone();
      console.warn('***from fetch', event.request.url);
      return fetch(fetchRequest).then(
        function (response) {
          // Check if we received a valid response  // || response.type !== 'basic'
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have 2 stream.
          var responseToCache = response.clone();
          //responseToCache.headers.append("cacheTime", Date.now());
          console.warn("***save response", event.request.url);
          caches.open(CACHE_NAME)
            .then(function (cache) {
              cache.put(event.request, responseToCache);
            });

          return response;
        }
      );
    })
  )
});