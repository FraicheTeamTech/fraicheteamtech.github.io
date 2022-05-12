'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "928aeba1375b0747124b5264f16ef2a6",
"index.html": "cd2ca0af6b8468d0e172863721b64e82",
"/": "cd2ca0af6b8468d0e172863721b64e82",
"main.dart.js": "31ac099f7d59676c6250b4bd97e3f6b6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4e0f2d20d97b96802a1b4b6acdae8383",
"assets/AssetManifest.json": "4e9ec824f24f05135e565b3f20ec4dc0",
"assets/NOTICES": "026f38e5656d6e1c0f63a9a108bbc3bb",
"assets/FontManifest.json": "8978877fc1edfde1915107796983496c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/unlock_fridge/unlock_button.png": "d237776803d659282e883b9b0fd35d3c",
"assets/assets/unlock_fridge/onboarding_confirmed.png": "f6308e3e40e3b0a722946b0754d0f0e7",
"assets/assets/unlock_fridge/shape-turquoise.png": "8e24f572fc2407346905cd58a792834f",
"assets/assets/unlock_fridge/bot_fail.png": "763a3b3703806fc420c54dffe9470627",
"assets/assets/unlock_fridge/breadcrumb-lemon.png": "7cc041124d3e4465aaf628b594a5bc41",
"assets/assets/unlock_fridge/art_board.png": "d0a69dcb12f9a12500418d980d736066",
"assets/assets/unlock_fridge/checkmark-uploaded.png": "a9b8bf9914a613c479bd1a94e441d36d",
"assets/assets/unlock_fridge/door_open.png": "a525dd1e87d9fa3c95730516aa8537c4",
"assets/assets/unlock_fridge/unlock_qr_button.png": "91a3077e659b9ac979aca1d91f71884e",
"assets/assets/unlock_fridge/bot_hold_on.png": "56d050747101526738780b752d0ca7e8",
"assets/assets/unlock_fridge/unlock_2.png": "e0445a578f8cddd620f42d9d0c6dfd9b",
"assets/assets/unlock_fridge/shape-red.png": "b4fa7a37f9d7536c02a24ac707ecde65",
"assets/assets/unlock_fridge/unlock_3.png": "afec6b20ec8b9d6373eca89045bd1f30",
"assets/assets/unlock_fridge/unlock_1.png": "c967a439f8bb6599a4a3c5d298421235",
"assets/assets/fruits_vegetable/basil2.png": "9f1035da5b886fb29ca1becc5d7851b5",
"assets/assets/fruits_vegetable/basil.png": "32553dd7f03ad3733e3eb68d8cab789d",
"assets/assets/biometrics/unlocked_askew.png": "c52d5dc9806c235b6723d9816fc6f836",
"assets/assets/biometrics/arrow.png": "aa59e6cb5f052b9a1474e8287ddb50b6",
"assets/assets/biometrics/face.png": "a5080193a67561b4f4f44b7f57f02507",
"assets/assets/biometrics/locked.png": "497fcf3406488e81e512d7d9148c7ce5",
"assets/assets/biometrics/ugly_guy.png": "9e7b7916f6e00b31de31070f56668c23",
"assets/assets/biometrics/logo.png": "5391b2d118a82161b89ff66f7b441981",
"assets/assets/secrets.env": "325fd627caa0455fa6631e5f342b7fce",
"assets/assets/lemon/JohnLemonSupport.png": "dcd476a368304bdbb630e42167827182",
"assets/assets/lemon/john-happy.png": "471f1d9d6bbe18d0c1ed376e1206d04e",
"assets/assets/lemon/lemon1.png": "292fd43b7e8fe0f47315909babed1c94",
"assets/assets/lemon/lemon2.png": "2ae4199ee4ceea20b5a4163db2664ece",
"assets/assets/lemon/lemon.png": "70c7cfdb74178c934e168eae23d5858b",
"assets/assets/map.png": "7d95bc6550196ff0fc229a78b106fb3b",
"assets/assets/menu_icons/referafriend.png": "edc7ff280de11203821971a036df24dc",
"assets/assets/menu_icons/settings.png": "3efe112d4c1fd178f175a27a394918aa",
"assets/assets/menu_icons/rewards.png": "6d90a8ff15a718b163798e4cb370dd4b",
"assets/assets/menu_icons/logout.png": "572758ed40609671608bcfe0d0401d68",
"assets/assets/menu_icons/user.png": "b871dd3caa2557d16019565ee466d8f1",
"assets/assets/menu_icons/payment.png": "aaa07ec155179445efca633c5f95df4f",
"assets/assets/menu_icons/history.png": "4d032247199293abee1d520d290cad85",
"assets/assets/menu_icons/help.png": "70ee80bad33ca890a67619a83c77d454",
"assets/assets/menu_icons/pastorder.png": "832232ef6fe5b3c715c5fcc81ec316a5",
"assets/assets/product_tour/step3_new.gif": "aee42af7979cf759850d1ce8b3260de9",
"assets/assets/product_tour/tour_new.png": "9887521378807cfee8b9d916a6c6695b",
"assets/assets/product_tour/tour_1.png": "8beb97d3f96a42262089bb276cd77454",
"assets/assets/product_tour/tour_2.png": "d416a1be016b472375837ede6f7e1ed4",
"assets/assets/product_tour/tour_3.png": "2f642b4f585a459a521e727ec88dfc84",
"assets/assets/map/pin.png": "023c103e4dc4ab74d944eaa1fddf5f81",
"assets/assets/map/user-location.png": "6b9a07cadda58a6b8d0e7fa3fb11d680",
"assets/assets/map/blue-dot.png": "2a6f39decf5665dcca13fa4b86835bb1",
"assets/assets/map/location.png": "9a7f85354fb753aa98ea64d88db335a5",
"assets/assets/splash_screen/splash_screen.gif": "b69aadfb063f25c530fa22e24792a1ce",
"assets/assets/splash_screen/logomark_green.png": "483042a1b1322a5ec483b625add56db8",
"assets/assets/splash_screen/bot_hungry.png": "90a35560f7766fd435805e1cfaad0741",
"assets/assets/food/inventory_green.png": "a90d630dcd8df29878f1f399b55c4091",
"assets/assets/food/cobsalad.png": "a01637d64bb054f1d2e036b93de58331",
"assets/assets/food/inventory_red.png": "007ed96f51d8bfa31e15b4653ce65077",
"assets/assets/food/inventory_grey.png": "fba55787679b1c958524308ab4fb5209",
"assets/assets/food/no_image_icon.png": "f98b32ceb4e65ec11ae685fc4b6d5a15",
"assets/assets/fraiche.m4v": "63c6ddc372b303fb4b265d18cb5b6ed4",
"assets/assets/home_screen/frigo2x.png": "ad7218d4730493c8dcecad8bb158736f",
"assets/assets/home_screen/user.png": "f7316c570df58ece7ca12760423cea9e",
"assets/assets/home_screen/cards.png": "2ac3ed204c2df9f6f8b557f3386bbd4e",
"assets/assets/home_screen/qr_code.png": "4ed81bd18306a69ec1d9d4568da60a48",
"assets/assets/fonts/Domaine/DomaineSansText-Light.otf": "e84c2870d1e4cbd401da327d7aef72e2",
"assets/assets/fonts/Domaine/DomaineSansText-Bold.otf": "5594856ee1006e3eede27c278e71b738",
"assets/assets/fonts/Domaine/DomaineSansText-Medium.otf": "3559d905ca89b5ee82e820935c0ddd53",
"assets/assets/fonts/Domaine/DomaineSansText-Black.otf": "eef1fe5d9b44ed9069f218f063c8ed08",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "d52f011be65b281ba8ca1c3f689cf133",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "c6cdfded4630ba6d9a2dceb70aa4fe0f",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "7c18188784f21915f42a5b3bc9d91e20",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "d1e42f1b6d0c32271f8e68515563a213",
"assets/assets/categories/nut_free_2.png": "9462f969b940dbdbc15f92672a626830",
"assets/assets/categories/dairy_free_3_2.png": "217708613a5888efeedcf2fe06045b69",
"assets/assets/categories/gluten_free.png": "0acab4257d1de11c20f5f27a8e8f7d22",
"assets/assets/categories/dairy_free.png": "1854fac2d8f19b0f00524f63f48fdbd8",
"assets/assets/categories/vegetarian.png": "7513d7796fca51a93fb71fcdbebf2a66",
"assets/assets/categories/nut_free.png": "c6df48af0c51d22f479767dfee74ae56",
"assets/assets/categories/vegetarian_2.png": "9a7e53c802f519d7f69d2ce669f6cb53",
"assets/assets/categories/gluten_free_2.png": "53077252c5c06ae0f964de7a9188d68f",
"assets/assets/categories/dairy_free_2.png": "543558005617f8aa687e482a75a28246",
"assets/assets/categories/dairy_free_3.png": "3afdd0fd18bd29c3a7b7ec67bdb0464a",
"assets/assets/onboarding/carousel-4.png": "9cc75695dd0b7432f2623521b359e586",
"assets/assets/onboarding/carousel-1.png": "a39daaad731f25c0ab1bfee3fec995c0",
"assets/assets/onboarding/carousel-3.png": "4b721757d8eeacbac37817913192b6a2",
"assets/assets/onboarding/carousel-2.png": "bfa5fbc42138252263751eac1e04e287",
"assets/assets/logo-green.png": "5391b2d118a82161b89ff66f7b441981"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
