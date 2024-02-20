'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "27789dfa327477b6cb59a60a73db2573",
"index.html": "3cced82bf7a9db87bd1471f8f849ae18",
"/": "3cced82bf7a9db87bd1471f8f849ae18",
"main.dart.js": "04f6f98d01eabf28170dde299a0b4137",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"favicon%20copy.ico": "755e0d6b2a55c9696c1f433afb62276c",
"favicon.png": "755e0d6b2a55c9696c1f433afb62276c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "48d270b166d083f0067d70050fa9f4dd",
"assets/AssetManifest.json": "219fc424eebd7740885c6a04964d4215",
"assets/NOTICES": "288158faea4161d6db4190d5c6b0bbfa",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/flutter_google_places_web/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_web/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/google_places_flutter/images/location.json": "afa33acf2c340246c901718f4efdfccf",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "f24ec4d8f7a7e20eff855ff2bcf7d930",
"assets/fonts/MaterialIcons-Regular.otf": "911b1e2d7a3b40d48d13553d919eeabe",
"assets/assets/imgs/device_thermostat.png": "a89b92e82faad56a764b3628ba3aba6f",
"assets/assets/imgs/export_notes.png": "cc39216eccb4d0d57f6af65c6e77b342",
"assets/assets/imgs/local_shipping%2520copy.png": "9047df41a3ee89bdedc79f562d2c4a1e",
"assets/assets/imgs/support.png": "f195e7c845d82cd6eb030c74ac68d565",
"assets/assets/imgs/login_bg.png": "98b5eb7a365506a5805cbb61019c6f05",
"assets/assets/imgs/triangle_pointer.png": "5f09578263d265144881b47deaacaf24",
"assets/assets/imgs/trucks_list.png": "f085b537b9d4280bcf275ea5d63ba176",
"assets/assets/imgs/instagram.png": "f1c9a1f7a149790d8c75fb7fd288d147",
"assets/assets/imgs/settings_list.png": "b334e6d75ac65248e854f1c565d7192d",
"assets/assets/imgs/speed.png": "2f99447fc7615f6ba8a0759a628795a7",
"assets/assets/imgs/fb.png": "05f43e8f02b3ecf9b56449e19ebf0004",
"assets/assets/imgs/saved_search.png": "0d5325646f00d5e58df04ec72f4d62e1",
"assets/assets/imgs/humidity.gif": "bc947e1265dd6622454f6ef9df3a2c06",
"assets/assets/imgs/arrow.png": "23d0a089dc2f0b05f06eb24f7878902e",
"assets/assets/imgs/UveraLogo3.png": "5e233227aafff653e0cea23cecc3c27d",
"assets/assets/imgs/path.png": "0c828d4ee28dfd4b798a43b9ba77c086",
"assets/assets/imgs/active_arrow_down.png": "eb29858ce94ad54ffe7572fbdde945cd",
"assets/assets/imgs/active_arrow.png": "3a99156d566e0a415b5618f4ceeef27a",
"assets/assets/imgs/history.png": "b86abdfb6c7ee554534bb136ce90c448",
"assets/assets/imgs/maps.jpeg": "9ac6e9d412f33ec333fd8c96139796a3",
"assets/assets/imgs/help.png": "2d1661195c5dee7d8f26aa2d7ee2cf89",
"assets/assets/imgs/blood_pressure.png": "ff411db1713e4a58a3a18a6d6597d924",
"assets/assets/imgs/ware_house.png": "777a102f6296e4d7ea384b453962630f",
"assets/assets/imgs/delete_forever.png": "360db4c985b62eb1eaf256551b1b9c76",
"assets/assets/imgs/warehouse.png": "6e6730e31eb574456a06b3371bfe9a2d",
"assets/assets/imgs/foodlinemain_logo.png": "0ac5123ef9e937e47aa548963e450669",
"assets/assets/imgs/UveraLogo_list.png": "6a5d6c5400b56d56fee3abce99236b6e",
"assets/assets/imgs/food_line_logo.png": "da83b48778f21d2e76a00d7aa7fbcb03",
"assets/assets/imgs/edit.png": "18e3810127f4e3b2a42a173ecd5ae216",
"assets/assets/imgs/FoodLine_list.png": "a32cc99af5b583c04b99520b43c381f0",
"assets/assets/imgs/humidity_indoor.png": "3a6d72187ad8c943a2bc12b77e564d33",
"assets/assets/imgs/not_found.jpeg": "f2e05967b906d260cf1ffb77f8d165e3",
"assets/assets/imgs/man.jpeg": "b48fa67bc0c6ea962c9d77a4e4e6450a",
"assets/assets/imgs/analytics_list.png": "f57448a7ac7074a8b753e498ad5aed49",
"assets/assets/imgs/truck.png": "9184eee88485840d2eeee25de8d036d5",
"assets/assets/imgs/stock_list.png": "dd0f3efae00fd5f035e07af62aa2c52b",
"assets/assets/imgs/report.png": "36468d64455ef2ccbc2ab13131e4b2ed",
"assets/assets/imgs/call_list.png": "cb0ffc98d912be6048d750a1bdf58013",
"assets/assets/imgs/local_shipping.png": "a59d509cd171f2b2fde1b7dff8370412",
"assets/assets/imgs/truck_img.png": "d99f441a9c878f346fb57a6b71370467",
"assets/assets/imgs/service_list.png": "91ebcfd0c0a8b214950605160f354a34",
"assets/assets/imgs/inactive_arrow.png": "adb13b3d18062352935f3287a331d742",
"assets/assets/langs/en.json": "bc1edec275a3f240f3a0da2e0e1e1452",
"assets/assets/langs/ar.json": "ab8aab85199b50035ddb34c75968eb7b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
