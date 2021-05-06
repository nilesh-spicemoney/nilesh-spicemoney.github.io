'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5e18e19887d62341063565b772de8746",
"index.html": "2d9b14f93f619ab7f965e1adb7f7273b",
"/": "2d9b14f93f619ab7f965e1adb7f7273b",
"main.dart.js": "4ac0e7a3f81776b4b4c967e863cf39af",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "82c1b3d1720db1d7e16aa67960400e42",
"assets/AssetManifest.json": "635c0ba0baec3c095f0be46b7f57356c",
"assets/NOTICES": "9e2691b9d04aedc17d9737d2d25314e0",
"assets/FontManifest.json": "062a2d8c12f413c9edf384c11171bf69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/images/lang.png": "b794271b09d6248a7acdcd4c8ca6a698",
"assets/assets/images/add.png": "8bff27dc5b55e923ad63f98f70d9ddce",
"assets/assets/images/email.png": "71410c647438665d590d97f8d55ada33",
"assets/assets/images/footer_vector.png": "ede3150f7687d08831ba176a00801fae",
"assets/assets/images/gov_id_voterid.png": "5995e32a3556e34cd670fb52cc6102b8",
"assets/assets/images/calender_ic.png": "6fea881946ec304a4d5958b651693c06",
"assets/assets/images/instagram_ic.png": "84cfc74ea089f8e7c0a917bf12a39e9e",
"assets/assets/images/call_red.png": "2f3449aa44fb4d05c834d4a36a529edc",
"assets/assets/images/seater-selected.png": "486424b7e25c040170043a769b50279b",
"assets/assets/images/passanger.png": "7db64b8c845eefbe798827607348c5e5",
"assets/assets/images/cam_upload.png": "f96c190525e958a1cdbb6575713978de",
"assets/assets/images/login_banner_web.png": "c728218ff4873dcac8feee6f50d13984",
"assets/assets/images/refund.png": "a3d38e1798d8a7cf7a3040db67eddeda",
"assets/assets/images/booking.png": "8ac937bc65c2e13243a1c7e50e233505",
"assets/assets/images/seater-booked.png": "de71442467628dce9645934544bcbf8f",
"assets/assets/images/train.png": "cc856941f992224334824a18ced880c3",
"assets/assets/images/filters.png": "90292bbddb68f10def29db86f043d199",
"assets/assets/images/bell.png": "6b6262d8927199ff09f2db0e6291e213",
"assets/assets/images/wallet.png": "85a4c3a1af8c25ae29a7c579c088e665",
"assets/assets/images/hotel.png": "fe7b8568c3ea63b13664d2e2eba4a2af",
"assets/assets/images/cross_ic.png": "94607f56806629abef93ef59dc722b59",
"assets/assets/images/plane_arrival.png": "43bdc3e978733d3fca0acae0481efe07",
"assets/assets/images/download.png": "1bbd1520a54659d9c983089ed6dc5901",
"assets/assets/images/icon_search.png": "522571b20b47a21534269de3d355a194",
"assets/assets/images/logout_ic.png": "ed4ab81cb833eb43f8944569fbf2b3d3",
"assets/assets/images/user_ic.png": "1865a0d549817dd38b3571f9c781e579",
"assets/assets/images/mail_red.png": "f4e92fc1c36a4bd511cdfafb3d2d910d",
"assets/assets/images/facebook_ic.png": "ff296d5dcd204cf5223b059324ed92a3",
"assets/assets/images/group.png": "f515da0c88e2b5d0a64d97c221c29163",
"assets/assets/images/eye_hidden.png": "0ff69d8d5e46e2918df814172a8d44da",
"assets/assets/images/history_ic.png": "8be519fe6817f599919bd49ec0da5d0a",
"assets/assets/images/eye_visible.png": "ba1aee6951bbd3097fbfc3027a836648",
"assets/assets/images/bank_inactive.png": "78c3fa7f1d7ff9082454913b537ec19f",
"assets/assets/images/Sleeper-booked.png": "a9183bd30dc1df6ea7b65cf888472364",
"assets/assets/images/forward_arrow.png": "fb7de03789900ecceea10724b4c08766",
"assets/assets/images/icon_date_flight.png": "7645e82637243e41e8e7a6431a1176c4",
"assets/assets/images/back_arrow_ic.png": "f2155f95696bcf56fcd6a4fd44de7f90",
"assets/assets/images/login_banner.png": "aef8643de83c2d38f929952ed857f71d",
"assets/assets/images/bottom_bell.png": "40140c8127599e92864fdc0dc5bffdab",
"assets/assets/images/cancel_booking.png": "43f5db8037c70cf0b8ee2047ba21c2e0",
"assets/assets/images/search_white.png": "1e054e5806fed4019799e951873b1a8f",
"assets/assets/images/failed.png": "067199f686b56e2e8e3113230eba78bd",
"assets/assets/images/rejected_ic.png": "6319044208ac202fb97aadfc043b19bb",
"assets/assets/images/markup.png": "e1e60d90562b9a84221ae23c6cb5ae32",
"assets/assets/images/gallery_upload.png": "fb16e719a0254d5296286832c3f8006e",
"assets/assets/images/armchair_fill.png": "33deddbf1eacde0c5ce9b17e2d900bb4",
"assets/assets/images/lang_more_ic.png": "81da5080a8c294852eece5feee848c42",
"assets/assets/images/work-process.png": "8b213efca919fc2998cac25e04848e94",
"assets/assets/images/wallets.png": "0d414b77029405ceef38d13a34e50a3a",
"assets/assets/images/plane_depart.png": "7d398c6f32d792d48aae8ce9390ce1ed",
"assets/assets/images/logo_login.png": "f62e16fb04f8cb710878de154652a9ef",
"assets/assets/images/cancel.png": "0ca61d44ea01b0cf64abd03f776a865a",
"assets/assets/images/icon_help.png": "da14f6dccb47d8a70945845a3b424749",
"assets/assets/images/home_activee.png": "6e30f32ec038a7c1f86a510edaa218e2",
"assets/assets/images/help_more_ic.png": "360e20f0fbe163f1825e317c156a5d13",
"assets/assets/images/adhar_twoside.png": "cb2f40daa3d2af338f3840b62556480d",
"assets/assets/images/gov_id_dl.png": "1f96f00576aefc4147b55c429c6bcf3e",
"assets/assets/images/pnr_ic.png": "6b3ce43e77c7245eeb76b33af7f96a5a",
"assets/assets/images/gov_id_aadhaar.png": "a158f6329ae7d152f8993f98699e55a8",
"assets/assets/images/rupee_icon.png": "f335705a628df91f1a0c46041bcfb22f",
"assets/assets/images/telephone_call.png": "5f41ff5e2ff4e144da47b7ec1f526345",
"assets/assets/images/help_ic.png": "58bf6acf0140ebfe381db9e42ea9828f",
"assets/assets/images/filter_rupees.png": "4255b4b23e17802fd59123f48679d693",
"assets/assets/images/flight.png": "d1721a0b9bb2312ea51e19a14dae6820",
"assets/assets/images/bus_offer.png": "d0480205cee7a94205cd7040450814e8",
"assets/assets/images/steering-wheel.png": "9e72a3a580786169cb9d013a24cb5bd1",
"assets/assets/images/offer_banner.png": "777a262bf019866841c61a0bd14dad1d",
"assets/assets/images/gov_id_nrega.png": "5f2bfce5ec3b06f679c30dab0d068347",
"assets/assets/images/group_flight.png": "05547764f2711dfcdc57ce8fffeda5da",
"assets/assets/images/youtube_ic.png": "701924d2ac5259ffb0fb4a31d25adc24",
"assets/assets/images/one_way.png": "22525b7bdb600d2c6ce0a53d280fac64",
"assets/assets/images/bulb.png": "6b461f0ce75f4eee0796f5e2ade9d3a9",
"assets/assets/images/check_train.png": "e8f95cf2690f6ffc11d873051086b3c0",
"assets/assets/images/seater-ladies.png": "0e670e447d5bee03d2aef22ea47238fa",
"assets/assets/images/cancel_flight.png": "e3b53eabe50fe5a807a2d00f0fba2b33",
"assets/assets/images/help_flight.png": "a947bb9068c8745ea5dd31c386761200",
"assets/assets/images/share_flight.png": "314294565fca0f7c3437178fcb53e3bf",
"assets/assets/images/twitter_ic.png": "bbe208c56baef91c69791add760f1304",
"assets/assets/images/new_logo.png": "c5c77385ab93b95027265f588a292ce6",
"assets/assets/images/timer.png": "b01e4d4e4cd07a1eca85409d2a90af0a",
"assets/assets/images/linkedIn_ic.png": "e6e1cab6bb289feea560e41ae599c459",
"assets/assets/images/success_image.png": "7b8ec74670cbc1513f075bd857041286",
"assets/assets/images/bus_icon.png": "aa7017e630be2d07e13a07da85aacad3",
"assets/assets/images/success_ic.png": "a94e5a7777e1590c6c162d2d8217fa49",
"assets/assets/images/home_search.png": "b69938902fbd74794b64239f40e6a2b3",
"assets/assets/images/pnr.png": "7241a503abc0b21feb231f1a04307010",
"assets/assets/images/whatsapp_ic.png": "3b6c81c081d80d0a743307aa01d6c04a",
"assets/assets/images/multiway_details.png": "7bb07330de1e27e8a08db9f53aa25e71",
"assets/assets/images/adhar_oneside.png": "0d4f3ae243b4bcd7749ebdfefcd0b539",
"assets/assets/images/wallet_icon.png": "8cd40891a703d7afdda0539bf57c2abc",
"assets/assets/images/default_dp.png": "df63b5559108294bc84744b668099b81",
"assets/assets/images/date_range.png": "d147b2b111e5c0b1053d454a0f752304",
"assets/assets/images/filter_time.png": "e49c45f6b4d39dbdd33a61f06ec8483f",
"assets/assets/images/bell_with_dot.png": "6b6262d8927199ff09f2db0e6291e213",
"assets/assets/images/Sleeper-ladies.png": "8e7c97d6426ccdc1b1ae339205ff7898",
"assets/assets/images/loction_ic.png": "022b095a236afde3a392c581fc45ffb5",
"assets/assets/images/icon_dropdown.png": "87ef46630163984d4b86767cd138e2f2",
"assets/assets/images/icon_cross_bl.png": "5e22b3be5affaead15c2e182b4fef165",
"assets/assets/images/rupees_ic.png": "061479d79cc62a42f9aa9c9e80f36d90",
"assets/assets/images/approved_ic.png": "37d48e2562f594bc339c47bfd3eecedb",
"assets/assets/images/profile_backup.png": "81ac90ce31007348bb76284a59efe2f5",
"assets/assets/images/contact_us_ic.png": "11a468f5076f91c22a34608276454c3b",
"assets/assets/images/success.png": "3f28e75930f0a77ab6ad7ce04dbf0daf",
"assets/assets/images/round_trips.png": "5dbc6b5a1ebb7dabea308b8b6e1fb6dc",
"assets/assets/images/footer_bg.png": "250b8f4881f4dfa48f6fbc5657d6825e",
"assets/assets/images/cancel_ic.png": "3c0d8cc571439d761ed815f57ac48641",
"assets/assets/images/register_web_banner.png": "f94385c611467b9cf275cc4f2ff2a52d",
"assets/assets/images/search_icon_new.png": "7f6db370b5c665a4d06c33368f996fcd",
"assets/assets/images/upload_front_side.png": "b362974bf4093acecd8a1351d0d42caa",
"assets/assets/images/dashboard_bg.png": "4318b6f6552a0aace78b17523d086fc1",
"assets/assets/images/Sleeper-selected.png": "41cd1e10eac806bbfed922a8cbab0017",
"assets/assets/images/close_dialog.png": "4534b112df4a8db8f8ac29b3f1813aa0",
"assets/assets/images/Sleeper-available.png": "89d626623680e25bfc59e67f5a01fa79",
"assets/assets/images/seater-available.png": "4b799835787ee2b21dd05f02c3d799b9",
"assets/assets/images/home_banner.png": "c63fbd863c8b3231703fc62271e389ba",
"assets/assets/images/armchair.png": "8c193321a6488aed5c30a9e480c13b48",
"assets/assets/images/gov_id_passport.png": "60520b73b02f683efa8632b144b5959e",
"assets/assets/images/more.png": "7bb49bd645c99ba7cba991808086fbbf",
"assets/assets/images/bus.png": "749daea11757bf5434a77558f7650320",
"assets/assets/images/network_ic.png": "3b49c8929639b310ef8c416300a04ba3",
"assets/assets/images/change_trains.png": "a5b58ecedfd5838765f6b15071f8fb19",
"assets/assets/images/markup_ic.png": "aa2df93eb28f983a13601f5daf1e918d",
"assets/assets/images/doc_edit.png": "73ee9d9ebe5bd8d10043324c1fff8b8c",
"assets/assets/images/camera.png": "d0b39280d619f7dfa446496bb0a75a67",
"assets/assets/images/2x/instagram_ic.png": "1ebdc89d6c3529f9c7d2f4b28f91fae8",
"assets/assets/images/2x/user_ic.png": "f21fc124aef6f72c249737c0608300de",
"assets/assets/images/2x/facebook_ic.png": "eb2004271d29c7879bda0439985634ee",
"assets/assets/images/2x/history_ic.png": "b3604c72f43824d78d10f32c3bc89ed2",
"assets/assets/images/2x/bus_offer.png": "dc55180dd87b2e80720debb43d14477c",
"assets/assets/images/2x/offer_banner.png": "3aa863585c52e5005ea51c9dde6e8084",
"assets/assets/images/2x/youtube_ic.png": "082b06c57cdce5a949d0ba149f3346c0",
"assets/assets/images/2x/twitter_ic.png": "5800a4bfcda8a9c7287c34a7573bf903",
"assets/assets/images/2x/linkedIn_ic.png": "43b434132338b039570e44dc709b747e",
"assets/assets/images/2x/home_search.png": "6650de52c09c4a9bc3399ba0d1f22811",
"assets/assets/images/2x/rupees_ic.png": "f1febfbc73ab5d71f3b6c9afa924f972",
"assets/assets/images/2x/cancel_ic.png": "60171daa3bd65a91da2de16ae7da5886",
"assets/assets/images/2x/home_banner.png": "fce2d4d126776c4894a6dc05d8c51044",
"assets/assets/images/2x/network_ic.png": "14d0f4b8047de058e68cd40dd225adfa",
"assets/assets/images/2x/markup_ic.png": "800b42ea3afcdcc6cbb6a6729b44e4bd",
"assets/assets/images/2x/icon_notification.png": "dcf569d3679d6932577bbb6c23b1a295",
"assets/assets/images/download_flight.png": "f38a2e0d7723cee3328703de7c23a1d7",
"assets/assets/images/icon_filter.png": "4c6a4b2a6d008bbf6c90fd5b0d6263aa",
"assets/assets/images/icon_notification.png": "e8819bca0c0d3c719473aa45735acca9",
"assets/assets/images/icon_train.png": "6a5cb95f46e5621bae4e6e270d47dbf3",
"assets/assets/images/flight_ic.png": "7b67ea081c27d3ef62819aed377854e5",
"assets/assets/images/icon_round_trip.png": "127c458cc0235be8e2ae6183b8027e84",
"assets/assets/images/profile_ic.png": "364cdb7328ce04f88d75d66f7ff420c7",
"assets/assets/images/from_to.png": "fa099ec3435269da6b8fd185b1228f96",
"assets/assets/images/pending.png": "1551181b6a74589ef6899267383ffe91",
"assets/assets/images/telephone-call.png": "5f41ff5e2ff4e144da47b7ec1f526345",
"assets/assets/images/cc.png": "e845e0157c568a634d92a146ba1c9e37",
"assets/assets/images/privacy_policy_ic.png": "8f1c7dd2e2946ac26792d35f618304a8",
"assets/assets/images/success_dialogs.png": "4cb0869be27e679f1480919889ee3b9b",
"assets/assets/icons/deposit_slip_pen.png": "52a057a5d39b07dc58534531784192d7",
"assets/assets/icons/train_engine.png": "1f5f52cf99c43135847469f2aadab797",
"assets/assets/icons/circular_help.png": "c45c2d2ace15f88fa3b54ac465207c11",
"assets/assets/icons/train_black.png": "40ebb46cd118b3132d83d2b4c3f388bb",
"assets/assets/icons/remarks.png": "8eb65e91d462450be1a4928ba57c2b88",
"assets/assets/icons/ref_icn.png": "83ffa455466d0ec0cfcb540d9f25cc8a",
"assets/assets/icons/juncton.png": "d2cfcbfd2a9baeed9958dfb1a0f11623",
"assets/assets/icons/deposit_slip.png": "1bee17ab584012d4d23a13f0e05e8a7a",
"assets/assets/icons/share.png": "42c0f669d7a92fb557f64af40c57d30e",
"assets/assets/icons/edit.png": "989247b782f54819fa5652915c4abd84",
"assets/assets/icons/icon_checked.png": "6601d03c27b67b1425fa75551267b6df",
"assets/assets/icons/circular_cancel.png": "bde0d9dc6b16e54f6abf3ca040188e4e",
"assets/assets/icons/from_to.png": "8d277ddafc9c542263317ecaa97b1910",
"assets/assets/icons/bank_input.png": "67e5b3464694ab344afcbef0029aeaa8",
"assets/assets/fonts/roboto_medium.ttf": "894a2ede85a483bf9bedefd4db45cdb9",
"assets/assets/fonts/roboto_bold.ttf": "d329cc8b34667f114a95422aaad1b063",
"assets/assets/fonts/roboto_regular.ttf": "230e0e1a8b7a17d5f3f03de75adea5a2"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
