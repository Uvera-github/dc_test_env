'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ded1b9b5c0a248fe9ce95c8e624398b5",
"version.json": "27789dfa327477b6cb59a60a73db2573",
"index.html": "8f77dcabf5a3e7b6f296f9c6324bc1a9",
"/": "8f77dcabf5a3e7b6f296f9c6324bc1a9",
"firebase-messaging-sw.js": "3843a9a26a3c14da8d3d384a6d7ae9ed",
"main.dart.js": "46372b7264b951db5f54171c01609fae",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"favicon%20copy.ico": "755e0d6b2a55c9696c1f433afb62276c",
"favicon.png": "755e0d6b2a55c9696c1f433afb62276c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "48d270b166d083f0067d70050fa9f4dd",
"assets/AssetManifest.json": "55ebcf484635d13a9831016f76bff5d4",
"assets/NOTICES": "83c387a7d9fe8902116fca2f7f900d0a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "e5ec94f25f961738a00113737ce7990f",
"assets/packages/flutter_google_places_web/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_web/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/google_places_flutter/images/location.json": "afa33acf2c340246c901718f4efdfccf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "dc6439cf0421ebd79360286b5f0b119b",
"assets/fonts/MaterialIcons-Regular.otf": "332a55c507b2d45813d3cff7691b3e01",
"assets/assets/trip.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/imgs/lo_inst6.png": "37848fb3cbc3367dae875f8eb2c0ed0d",
"assets/assets/imgs/pk_inst9.png": "b885625c62ffe78583f9b1a49892ca3a",
"assets/assets/imgs/lo_process_second2.png": "5c9fe9c68c1b01be3286262f8b88e7b3",
"assets/assets/imgs/mo_process2.png": "c50340bc93b1fad2422fb9ab3691aac1",
"assets/assets/imgs/pk_inst8.png": "2925ea3f5ba10465ecfaae4164a3e31b",
"assets/assets/imgs/device_thermostat.png": "a89b92e82faad56a764b3628ba3aba6f",
"assets/assets/imgs/lo_inst7.png": "c9606b8334f704f9a29883743ea0b060",
"assets/assets/imgs/export_notes.png": "cc39216eccb4d0d57f6af65c6e77b342",
"assets/assets/imgs/local_shipping%2520copy.png": "9047df41a3ee89bdedc79f562d2c4a1e",
"assets/assets/imgs/lo_inst5.png": "589ec80dbd4d7834b426dda3ac06c42b",
"assets/assets/imgs/pair.png": "05e04a4c690050cfb67220d816921a12",
"assets/assets/imgs/support.png": "f195e7c845d82cd6eb030c74ac68d565",
"assets/assets/imgs/lo_tr.png": "737b49666cd21417058e3c586e5068d5",
"assets/assets/imgs/battery.png": "ac09c15099902c0a780c7ef26ab3e8e5",
"assets/assets/imgs/lo_process_second1.png": "28b90d81a0b671d15dd034f86a90cde3",
"assets/assets/imgs/mo_process1.png": "4db594a8a2bf820029f57ffe6a888cb1",
"assets/assets/imgs/dashboard.png": "6b80de4095685f1877cc7198bff04615",
"assets/assets/imgs/mo_change_status.png": "1eff96d2a76b822dd84e9a714db1820a",
"assets/assets/imgs/lo_inst4.png": "79f4774432a484b6152c753a767cf654",
"assets/assets/imgs/login_bg.png": "98b5eb7a365506a5805cbb61019c6f05",
"assets/assets/imgs/service_toolbox.svg": "872ca45337331ce82b9419983b069b2f",
"assets/assets/imgs/triangle_pointer.png": "5f09578263d265144881b47deaacaf24",
"assets/assets/imgs/storefront.svg": "1edd71fbcdf167a8045582049e1fd4e6",
"assets/assets/imgs/trucks_list.png": "f085b537b9d4280bcf275ea5d63ba176",
"assets/assets/imgs/lo_inst1.png": "de5a4d80de143678a30dbc8235a99c32",
"assets/assets/imgs/lo_inst3.png": "485b3122d7015668b5b2f05c8d043970",
"assets/assets/imgs/lo_process_second.png": "cd279ce3c1a4d61d7ccba69f1c5aeb7b",
"assets/assets/imgs/UveraLogoWhite.png": "b69206dc63322286f70975e70541fcf7",
"assets/assets/imgs/instagram.png": "f1c9a1f7a149790d8c75fb7fd288d147",
"assets/assets/imgs/settings_list.png": "b334e6d75ac65248e854f1c565d7192d",
"assets/assets/imgs/lo_inst2.png": "1f35df1bd87d94b48297f895a584a778",
"assets/assets/imgs/mo_desc2.png": "53d953a6e674ae67645730e845e708ee",
"assets/assets/imgs/humidity_low.png": "b0d43de41ac80a1fdae0973dedd9aa77",
"assets/assets/imgs/overview9.png": "3e82c3c0d3c317ecb85c25943ecdc1c3",
"assets/assets/imgs/lo_tr5.png": "8fb289f30bb917ed9d7abaf5ba3eabb8",
"assets/assets/imgs/devices.png": "06e6b3a101a18a0c8b5dba8af0f5a338",
"assets/assets/imgs/speed.png": "2f99447fc7615f6ba8a0759a628795a7",
"assets/assets/imgs/item_overview.png": "e7713f92c79cbfc27caed36926e4cbd3",
"assets/assets/imgs/lo_warn1.png": "de8e25b7a56185f153691b036ec5fc8a",
"assets/assets/imgs/signal.png": "e194b304d5075125def6feb1db1ec2ba",
"assets/assets/imgs/lo_tr4.png": "a9213903d2c9b5e91b566e18d03be706",
"assets/assets/imgs/tools1.png": "18ce6005c5ec17cbe1981aa02a4abcc0",
"assets/assets/imgs/overview8.png": "d33762f18c19ac00a6f10ccea316c2ac",
"assets/assets/imgs/mo_desc3.png": "8a89e6b5ad1d3ccb46877033d7c9c8d2",
"assets/assets/imgs/mo_desc1.png": "69858d597cc2282430d6a0ff21ba5181",
"assets/assets/imgs/fb.png": "05f43e8f02b3ecf9b56449e19ebf0004",
"assets/assets/imgs/saved_search.png": "0d5325646f00d5e58df04ec72f4d62e1",
"assets/assets/imgs/tools3.png": "cdc7872be13bd2bb76d33928d4d00ef0",
"assets/assets/imgs/mo_warn.png": "7bb9df3769a64f0e9ccde2b38b429103",
"assets/assets/imgs/lo_tr6.png": "3febbcb4ab99352257519aa98af16667",
"assets/assets/imgs/lo_warn3.png": "32f679822ed3bc6dc6396513efe4ec92",
"assets/assets/imgs/lo_warn2.png": "be35eddae41c6a15cc58b7744b665d3e",
"assets/assets/imgs/lo_tr7.png": "da7a0fd7d8b329ba5ce026cfe48fe2ee",
"assets/assets/imgs/tools2.png": "2b7a7a3f2807d759b7e5e8e2b7c3f2f4",
"assets/assets/imgs/mo_desc4.png": "4d09b70b9aaa80fd059960294535e792",
"assets/assets/imgs/humidity.gif": "bc947e1265dd6622454f6ef9df3a2c06",
"assets/assets/imgs/tools6.png": "40dc72851d70b2d20067b1eaa784e818",
"assets/assets/imgs/lo_tr3.png": "d576fbd2fc4189a6ec3c5eb76696515f",
"assets/assets/imgs/arrow.png": "23d0a089dc2f0b05f06eb24f7878902e",
"assets/assets/imgs/UveraLogo3.png": "5e233227aafff653e0cea23cecc3c27d",
"assets/assets/imgs/pk_process1.png": "18b3af3eb5a6c1fc778d30054a664dcf",
"assets/assets/imgs/toolbox.png": "35822f365ba3dc0571b6abe6a43dc5a6",
"assets/assets/imgs/lo_tr2.png": "c3980e7ce45ada680f743127c6eee8fa",
"assets/assets/imgs/tools7.png": "33968af8385f9034164d828557427a8a",
"assets/assets/imgs/path.png": "0c828d4ee28dfd4b798a43b9ba77c086",
"assets/assets/imgs/rc.png": "d887811b3e3cf2091899c15e66c9d3ce",
"assets/assets/imgs/mo_desc5.png": "7d0a63792bd18d4ec7033cd00bc13309",
"assets/assets/imgs/mo_desc7.png": "3a21f83e8d0c9f20662a1014802c294c",
"assets/assets/imgs/tools5.png": "83d7b67c95a71e1b743baa1af87a5880",
"assets/assets/imgs/lo_warn5.png": "e72e56ef3b36bb5d70ef299f7b806849",
"assets/assets/imgs/pk_process3.png": "a9165231d10776003932e1ae47cd06a6",
"assets/assets/imgs/pk_process2.png": "c15cb5d537fdba70710c00de875994cd",
"assets/assets/imgs/sc_status.png": "4cdd43b7121ad4508939d7a7ed315f9e",
"assets/assets/imgs/lo_warn4.png": "4920507265abadbd709caecdc86127c3",
"assets/assets/imgs/lo_tr1.png": "6a22b5e4b1883f44dd8f8587d8be61be",
"assets/assets/imgs/tools4.png": "809a3c9ee7f50c4400b963010fe61d2d",
"assets/assets/imgs/task.png": "94d7e813bfdd2639499414171783ef0f",
"assets/assets/imgs/active_arrow_down.png": "eb29858ce94ad54ffe7572fbdde945cd",
"assets/assets/imgs/mo_desc6.png": "736859af742daffc24979629886a09ab",
"assets/assets/imgs/str2.png": "c145ac716467ee20377b91c674f15634",
"assets/assets/imgs/active_arrow.png": "3a99156d566e0a415b5618f4ceeef27a",
"assets/assets/imgs/tools9.png": "6b942b25561bde88915af398cdd589de",
"assets/assets/imgs/sc_warn4.png": "b76d22b4f8a8f0ad52561383e75a1eb4",
"assets/assets/imgs/sc_warn5.png": "64251772095b142204f581b1cdbb0556",
"assets/assets/imgs/users.png": "6d1e7d1ff16ff655156a7d746510aaa5",
"assets/assets/imgs/history.png": "b86abdfb6c7ee554534bb136ce90c448",
"assets/assets/imgs/tools8.png": "ab5c1df716a5c5cc002d3ac9159e291b",
"assets/assets/imgs/str3.png": "3a2bf26323ead23ec58e2b494b4e838e",
"assets/assets/imgs/maps.jpeg": "9ac6e9d412f33ec333fd8c96139796a3",
"assets/assets/imgs/overview1.png": "4ea5bc08e910aab3867b0dce369adb99",
"assets/assets/imgs/quickreferenceall.png": "2456cdde4ed4b1d5517a18b3a21a99f6",
"assets/assets/imgs/overview10.png": "d340c4424422a519481d163f380a9787",
"assets/assets/imgs/overview3.png": "d0e959936f2b619a7a67306d95e5b53c",
"assets/assets/imgs/branch.png": "83b55c510ca88013f65928bef0d7617e",
"assets/assets/imgs/str1.png": "a9668e07989ab9abe2cfbf24c9c16d59",
"assets/assets/imgs/help.png": "2d1661195c5dee7d8f26aa2d7ee2cf89",
"assets/assets/imgs/device_temp.png": "3b95b9af0bfd4867f7b85f31b4ceea69",
"assets/assets/imgs/overview2.png": "35ce35ce7631234dca839e84a9c44bf2",
"assets/assets/imgs/overview11.png": "db6b2febe877cbc89241463486567ead",
"assets/assets/imgs/overview6.png": "b6c4143744cf85a3e15b06ca736f6289",
"assets/assets/imgs/str4.png": "9d7be3f0d63babd7d0cabe28672859fc",
"assets/assets/imgs/blood_pressure.png": "ff411db1713e4a58a3a18a6d6597d924",
"assets/assets/imgs/sc_warn2.png": "7976b9bab986bd4a84839050e2828ae9",
"assets/assets/imgs/sc_warn3.png": "554314bffbf8960f9551c87456d1d8e9",
"assets/assets/imgs/pk_warn1.png": "9ce6ec1c453ef4fdeb9c63e4d0b44da0",
"assets/assets/imgs/overview7.png": "03bdd2abe84f02497c76fe91ec733792",
"assets/assets/imgs/overview5.png": "8a8b066e7f5a86c83f82beb3d9619e87",
"assets/assets/imgs/pk_process.png": "e073b5bb79732002aceaff56cbf66765",
"assets/assets/imgs/sc_warn1.png": "ae35b43ccb16c1a7e79402781922b445",
"assets/assets/imgs/mo_truck_status.png": "9e08cdbdce8d29e9b367f7230e936b81",
"assets/assets/imgs/pk_warn2.png": "0186fa70e0117abe58399e5dc52b44dc",
"assets/assets/imgs/ware_house.png": "777a102f6296e4d7ea384b453962630f",
"assets/assets/imgs/overview4.png": "809876927f87aa68a71cc5df482faec8",
"assets/assets/imgs/delete_forever.png": "360db4c985b62eb1eaf256551b1b9c76",
"assets/assets/imgs/warehouse.png": "6e6730e31eb574456a06b3371bfe9a2d",
"assets/assets/imgs/foodlinemain_logo.png": "0ac5123ef9e937e47aa548963e450669",
"assets/assets/imgs/sc_inst2.png": "74be7b87ef7e763981a1e2ab2a69750f",
"assets/assets/imgs/current_temp.png": "1b348821b9a39259e62ee975573d68c2",
"assets/assets/imgs/sc_process1.png": "ac78ded4bd3cffda99cde8e19846e0db",
"assets/assets/imgs/UveraLogo_list.png": "6a5d6c5400b56d56fee3abce99236b6e",
"assets/assets/imgs/pk_inst1.png": "65f3700f7175ae365e25ffef8a477f2a",
"assets/assets/imgs/process1.png": "8b28989a203f85e7bd9075fe2a3859fb",
"assets/assets/imgs/food_line_logo.png": "da83b48778f21d2e76a00d7aa7fbcb03",
"assets/assets/imgs/mo_process.png": "0add83435305393787e7d36d6e3b22ed",
"assets/assets/imgs/current_hum.png": "3a6d72187ad8c943a2bc12b77e564d33",
"assets/assets/imgs/edit.png": "18e3810127f4e3b2a42a173ecd5ae216",
"assets/assets/imgs/sc_inst3.png": "848748b4b69810662cd1ccdeb7e84101",
"assets/assets/imgs/FoodLine_list.png": "a32cc99af5b583c04b99520b43c381f0",
"assets/assets/imgs/warn5.png": "17277532b1d7b0ebddf87ed155c73c46",
"assets/assets/imgs/tools10.png": "cf23e2a568b85816ea525947bae08e17",
"assets/assets/imgs/sc_process.png": "417db495b7e490b74fa3201fa695eb31",
"assets/assets/imgs/sc_inst1.png": "d7aba372f3d6dab4b3981cec0eb191d7",
"assets/assets/imgs/process3.png": "c95507ae4187d1b13b1e12a3b5202e8e",
"assets/assets/imgs/pk_inst3.png": "c93b46851f41cdbb7ebe187f1bf248d3",
"assets/assets/imgs/sc_process2.png": "8a052e0e06bc8676b31b1e279762e72e",
"assets/assets/imgs/sc_process3.png": "36bf6658d679f7fd0e1f77dd16e8f476",
"assets/assets/imgs/pk_inst2.png": "dbed0667383df1b7f082e1a785a3b9d9",
"assets/assets/imgs/process2.png": "3a159190fed76e05875bb0f6212c4666",
"assets/assets/imgs/not_found.jpeg": "f2e05967b906d260cf1ffb77f8d165e3",
"assets/assets/imgs/man.jpeg": "b48fa67bc0c6ea962c9d77a4e4e6450a",
"assets/assets/imgs/branches.png": "a798e912d8aebf2a01cb8a201d14c11a",
"assets/assets/imgs/analytics_list.png": "f57448a7ac7074a8b753e498ad5aed49",
"assets/assets/imgs/truck.png": "9184eee88485840d2eeee25de8d036d5",
"assets/assets/imgs/stock_list.png": "dd0f3efae00fd5f035e07af62aa2c52b",
"assets/assets/imgs/warn4.png": "0c057cc019cb65059445d5c6a25858b2",
"assets/assets/imgs/lo_process.png": "0a195f5a6ac5ea9d0e10b8f9056a37dc",
"assets/assets/imgs/lo_inst9.png": "1e013b566fd68e224a966f97ac8d5fc6",
"assets/assets/imgs/sc_inst4.png": "bcfe8f4268f88c224745ca3be264f81e",
"assets/assets/imgs/pk_inst6.png": "09e3612621f25774b771b2e5130dc0d4",
"assets/assets/imgs/lo_process2.png": "73cbed6c3f8205c642572207dc97fff3",
"assets/assets/imgs/lo_process3.png": "ee8b08409bf26f7fff8fa9ff983dc209",
"assets/assets/imgs/arrow_side.png": "e2a72ecc79b6d5226cc2a2f9c889e95d",
"assets/assets/imgs/pk_inst7.png": "fa4635149ca41acc2d8aafd4dae9367d",
"assets/assets/imgs/unpair.png": "ec046a427404554585382861a4c2280a",
"assets/assets/imgs/money_bag.png": "708a3b7921ff19333b037bff5b38b0af",
"assets/assets/imgs/report.png": "36468d64455ef2ccbc2ab13131e4b2ed",
"assets/assets/imgs/sc_inst5.png": "a3543aa9f25693e659edb14a94c05b1d",
"assets/assets/imgs/call_list.png": "cb0ffc98d912be6048d750a1bdf58013",
"assets/assets/imgs/lo_inst8.png": "e4f67c883398663a07011233b6bff11d",
"assets/assets/imgs/warn1.png": "3b26b4fa255d6285ed57d4f4fd4f1a7c",
"assets/assets/imgs/warn3.png": "b00c8130726483badb7ba091a219e4c3",
"assets/assets/imgs/sc_inst7.png": "a8da160c2943ea2e0e10ee6549ee559d",
"assets/assets/imgs/local_shipping.png": "a59d509cd171f2b2fde1b7dff8370412",
"assets/assets/imgs/pk_inst5.png": "d84c0d8c1221b1b63054c2d3c57bc6be",
"assets/assets/imgs/marker.png": "5873b99d554bf7cbaddf04b43798b89d",
"assets/assets/imgs/lo_process1.png": "ed3ee780ebd7cf23cac8ac1616b79927",
"assets/assets/imgs/truck_img.png": "d99f441a9c878f346fb57a6b71370467",
"assets/assets/imgs/path_horizontal.png": "0a101dd31e1378380790533c5e82d699",
"assets/assets/imgs/pk_inst4.png": "bedd1cde54e45c92c186e0f8de4c5d49",
"assets/assets/imgs/service_list.png": "91ebcfd0c0a8b214950605160f354a34",
"assets/assets/imgs/inactive_arrow.png": "adb13b3d18062352935f3287a331d742",
"assets/assets/imgs/process.png": "e12ffa688b368806a2210a197012f28b",
"assets/assets/imgs/sc_inst6.png": "b3e0786ed6c5cfab910dac3b6ecc7cdf",
"assets/assets/imgs/help_clinic.png": "f7e85f37b0420269d4cebbaaac4a5df5",
"assets/assets/imgs/warn2.png": "13d3345187b87df14d7ca9c4ad772149",
"assets/assets/langs/en.json": "ee087ad2e62945ed2ce04c0355036f83",
"assets/assets/langs/ar.json": "a75940a2802e2c6f443b2bbb9e2532ea",
"assets/assets/json/detalis.json": "7047c45378b0f6bce732516d4a36f351",
"assets/assets/json/trucks.json": "871ee60ee5c9159fb2a41cc4fe836053",
"assets/assets/json/login.json": "3fd3d23e9c68a028f5ecc6f8aa04fc01",
"assets/assets/json/stocks.json": "8cc35e860109ade0da79ecbb852b99f2",
"assets/assets/json/route_history.json": "cd50e3c246b14cbe58a72243053d618e",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
