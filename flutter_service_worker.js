'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "c8e862a86c14a239a34737b388998329",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5f28733b4998be37e19cc80903a8bfdf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "05b3a351f30a0c070d13c63c011b63c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "359e9ae7a46fa13c2d11bd2ae7774102",
".git/logs/refs/heads/main": "359e9ae7a46fa13c2d11bd2ae7774102",
".git/logs/refs/remotes/origin/main": "0129e6ddbb79ba48219b4b42c96af9cd",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/efaa5fd78772a663a8a276643c0e3c7c8caab1": "b6216f4fee18dcce40cbe3d8d91c704e",
".git/objects/11/7563e519df5e95a3be585f0aebac3d66ad1c1a": "8cfdd9010c20b45e87a264959b69acf3",
".git/objects/11/b339b238973f11f94bc4270e59cdcc9b5b8d9e": "7d3b11d1b8cb38bec7fd9f0ccca1e470",
".git/objects/11/d74385a28df98b24514ba206ddfc33e7a2abb9": "d45389959a825fb0fd19869cd96c708c",
".git/objects/12/7e25b389025604db622691088c9d777ca0eac4": "3da43821d08b356e0b22d03e38c0dff5",
".git/objects/12/f54219eff04a053d10b527552f9aa3bc82e9b8": "1ea0b595e08bc4ab378313bb9522598f",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/e5cca00e9ecabaa76ef1b5b15cb2eef025d8ff": "47fb72b90b83f6ced3e085dc9a21e10a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/2b/9132ee0a5bac382fa4beec93646a15689a9c31": "09b127b741752f72b468339abbdccdb6",
".git/objects/34/6d66f9130bdfbfd432664650567b2ff4d7253b": "a5c97a3729eb13f0dd2aa2dc9d51baac",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/bb7836936f432a37ac9764a30e7107db1087ae": "933b04d138b82d9e8f46d708036c713e",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/42/6a93538d34da494d5c08d1298c5e5a9b58dd7a": "8e5e42d6dcd0af57feb8bcf23e35c1c4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/9ae7318ccf0ad60d5fc23a19841fb20de286bb": "931dd0a840d77cbba8788b8405b8f31f",
".git/objects/4a/f7632f672d0565527beb76e780a743ad63ec2f": "0d9d500d2bf893b1c23feeaf95a1637e",
".git/objects/4b/d209769cda3f3b0a5e00c3a735bb3878e53e39": "d761d54dd8d06f0dcafd8e0a2b072dcd",
".git/objects/4d/a4e0a65d6de0fd646a09fd7b8a29a1161c9b8a": "8e970fe17077cee6f989a772573c5f96",
".git/objects/4f/bb44a52888eeb64a036520d42a64febc4b2158": "21da2155b21dc1558ac38b7d172f6c56",
".git/objects/50/0ccb23eefb245ca55eb35ae0b52ab2cf5efeb3": "d3d7d6d84dce5225fa945a746fb4fef3",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/3920b2089c3a20e6494edb793f1a374d189d3b": "b5ea985dd4c012d9ea8b28bdb320c57a",
".git/objects/5b/28e93ad4034997ffa7dd48d326634c75c9fa7c": "1b30a63dc5386989cba14aa1d3f75545",
".git/objects/61/e1e1cc8a4b3ce94c3c56db47bca4f71fe6bb76": "141a16643894110a2e3db9949f0bfbae",
".git/objects/62/6948532d47c5005d10d05896d382629b2b20e5": "6b4e50a83e09901d4e5436da4468b27e",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6a/e373770c8e9bd7f8acee0c4d30b0a0e37b8f67": "214f2af445785020571316d2ad6933c4",
".git/objects/6a/f9766e99bdd33f3b9801cf7b5db6f79591cff7": "5ed0c289d6ff45e70bfb8ac0b10f8e88",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/1b9fc2e8d13c7699b8d0a3b4790118c7aaee6c": "9976b8f46e37aec2c48498da3a0b6136",
".git/objects/75/14e83e6c50c321b719d098be5340770b8a4afc": "e1aec08545e129e70584507a4a04ee56",
".git/objects/7f/0340f3fc2f69651d07f92281c731120ad834a6": "59b2bd6e72e32d309fa61f139dfdb799",
".git/objects/82/31c038cbf501e21f6f001bdf906f3e8bf47008": "0f80319786619cc8c777ffdcf2f8cc2e",
".git/objects/85/8f79ffa1404f5dfbcf468e05bae5e4a85f1561": "259e4e72623d1180a54ed37e7437a8da",
".git/objects/86/5241b91184fd753f3cd76892c5027f9f04fcac": "778516551dec1794ffcc2dab929961cc",
".git/objects/88/0b3ace6bfc5912fb7dd0ae5fac10e217a140b6": "ce78c2b58e163466bb6ccc62cd3cfc79",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/84f15adc07b931d7194b75d6268bd89a078af7": "81a50bab54653b9b398fa7f6930eabcd",
".git/objects/92/1dd41a07a4f63d5e623ded84357dd5779fb888": "5d4212de31a48c908399d7974475a817",
".git/objects/98/c68efc0af36092458ef2074ee701429c495339": "c3e0fbd2dadecb26e52c791498028b1e",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a5/ac05780a32cb6a3e93ec196e1ca2a991b7e619": "3a07675d18fddce521fb9696c8683b7c",
".git/objects/a6/40108b1d717b42ec98d5eb2ae74efbba79a1cf": "185551e3400c8c0b3809b562f3a8b095",
".git/objects/ad/244d7105270865549206c9606d93ae31ff6666": "61137fdb20830a4137e655e1839786a2",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b6/94e6b4f750d8a1a79a4face6b9a738b853bc84": "0848241e6644eb0e7f97697bf28b35d1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/981414bc2370da5f4c8463b4e6ca5dc06bac5c": "202ede47ec751229a7a26c2e1b63adbf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4de732e145ad1a88bf0bd6f6636b70d9dbad8f": "31a9e4804c75ea0f2e2712705bd88e87",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/0955173332e551dd15f381caab43048cbf93ee": "1ba1de2457f8b648ebc4460efe544212",
".git/objects/bc/a9742a268ecd460f1201cc5f3917b5e8b8e7ba": "7c4edca3bcbb2b79271e785bc526372a",
".git/objects/bd/e6a8529334b22f9caebf0656dfc765a7384511": "4c77b4fe4ae9fceebe0c1d71e84f3bd6",
".git/objects/c4/4416b434a7d3705b35e10499e38575cc8be720": "e2431d771490c092abb0eb94e073b432",
".git/objects/c5/1bbcaa7f1aebc41e46c1215548f5829d2d26df": "8f795297ba959a30714afc75afc7a4f0",
".git/objects/c7/e431e2c7ce34715daa007b37715d97395aa9b2": "da6a6987097eab4ee2c1b09672be24b3",
".git/objects/c9/b84d5732726c38b88306c55a7568a358eb2fbd": "9b797df4e94dc876e1158b5843539a66",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/361f8dd433fca24ef9ddbac99c2c8b649a3f41": "a20be16643c921913a1538e60ddd91d6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/f70567b793e9cc88abbd856ca9ff1e568d42b7": "1b3202c24f6bd703a94c4d2bde94737c",
".git/objects/d9/6f95405f40ced12d8b05b67544a128889844cc": "50832e449d9a2712f497fff5fa024064",
".git/objects/de/1e1b22684321662841687726ca804df8f1b21a": "1d7ebdc4e16188f820e7323815b476b0",
".git/objects/e0/71908e8a07d0542ed28c1ad11087498563767c": "270ed0361e2124f62f39469cb05668d6",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f31d7a022b08bbd63abf838e66e9a99d117fe2": "05c1099b8790d1201f04bec41ab7afc4",
".git/objects/ef/ee71f5bb1bce23343ae3bfb932e41e6dfe89f9": "4a691a2ac1548316e88627142e137136",
".git/objects/f2/430143a527d9d7f86d7ff7cbcf7f893a1cf17f": "eff4a272b565e22fe14da6cd0c57c648",
".git/ORIG_HEAD": "5e96346584e934decbff82a1688a64e7",
".git/refs/heads/main": "5e96346584e934decbff82a1688a64e7",
".git/refs/remotes/origin/main": "5e96346584e934decbff82a1688a64e7",
"assets/AssetManifest.json": "d390db4491545059416c9c24db991c16",
"assets/AssetManifest.smcbin": "aded144feccb089becfbfde4500e668b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c796212b9dcc42222dc9037849b05eb6",
"assets/NOTICES": "a71885293ebba6387ef5fcd6796eee2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/public/images/add.jpg": "3cd0bee1530e696198001652dbbf634e",
"assets/public/images/close-outline.jpg": "60e4ebeed110f971c845075186e8fe81",
"assets/public/images/copy.png": "3a49107f39c44bcff5d8dd4663a0685a",
"assets/public/images/gr.jpg": "2320880473842e80d801e4fb006422fb",
"assets/public/images/info.jpg": "6048e425b9989aa36e21150d032912cb",
"assets/public/images/settings.png": "eaf7e99b5ef238def8d008586d23b3ab",
"assets/public/images/tr.jpg": "d67743f9ba8dccdc80e34a7e97b8ef80",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c1c409ecc060a5d3da03a99ca4562ba7",
"/": "c1c409ecc060a5d3da03a99ca4562ba7",
"main.dart.js": "f4c782021df96e23aad299c7bad261b1",
"manifest.json": "1ef3f33cbda1e4430eb8fb89367be2af",
"version.json": "f5d7112c7bc74d9d87ca174c73c5270b"};
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
