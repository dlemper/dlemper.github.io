/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2012/02/29/raspberry/index.html",
    "revision": "0518edaaad9014aa3aaddb45282c1942"
  },
  {
    "url": "2012/06/24/say/index.html",
    "revision": "4ea7b9b24edb91483c05f1155204fd32"
  },
  {
    "url": "2012/12/29/airplay/index.html",
    "revision": "2c2882200d6156c9360495f9764c1551"
  },
  {
    "url": "2013/01/19/multiboot/index.html",
    "revision": "9c389aede7167944ce16d3a4aa53d28b"
  },
  {
    "url": "2013/10/19/linux-dist-for-beginners/index.html",
    "revision": "96b58c356a2b1be6267533ce9d8fa86f"
  },
  {
    "url": "404.html",
    "revision": "f1faa72d7d6d3d105c46d9972a9a13ce"
  },
  {
    "url": "about.html",
    "revision": "4f1ae6d108d509e91a2bde19fdb63424"
  },
  {
    "url": "assets/css/0.styles.d40c99b9.css",
    "revision": "9d62771a5a02a05c3fca49de418016db"
  },
  {
    "url": "assets/img/me.dfed7114.png",
    "revision": "dfed7114ff4fbe0b59144e9c124f93f0"
  },
  {
    "url": "assets/js/10.cbecf8e9.js",
    "revision": "2b4a3875fd31ea7e867959585fa26637"
  },
  {
    "url": "assets/js/11.6dddf6a5.js",
    "revision": "12aff592990c7031875cb91850642412"
  },
  {
    "url": "assets/js/12.a39f30e6.js",
    "revision": "95f21fd0b14bb8d7c92d46130dbb9796"
  },
  {
    "url": "assets/js/13.b24e6803.js",
    "revision": "37f46efbd004a91381b485ddc0947920"
  },
  {
    "url": "assets/js/14.5bac63d5.js",
    "revision": "f49875461629294311d6c48213f7d101"
  },
  {
    "url": "assets/js/15.dab25830.js",
    "revision": "a8ebc485293b60c161d9cca2a12d891e"
  },
  {
    "url": "assets/js/16.ebad6f17.js",
    "revision": "75214d63fd0a06d1931b31bbe8290b97"
  },
  {
    "url": "assets/js/2.ded2820d.js",
    "revision": "3b054b6a24f9509aeeb73bc79fbf7873"
  },
  {
    "url": "assets/js/3.13060e68.js",
    "revision": "3fa1df01ad0662a3359a4d1fd66635b8"
  },
  {
    "url": "assets/js/4.c322f263.js",
    "revision": "f84f80b65458d6b4907438ddc2f38077"
  },
  {
    "url": "assets/js/5.b6f6a227.js",
    "revision": "a601dcb041dc44044fb856043c5e4f59"
  },
  {
    "url": "assets/js/6.bb81f45c.js",
    "revision": "42bb63cafcfdd6951c22f03c15865491"
  },
  {
    "url": "assets/js/7.20739dce.js",
    "revision": "0a25b1c29d6a81e856f48b61364b1cd7"
  },
  {
    "url": "assets/js/8.18614d39.js",
    "revision": "b1b019fb41153fccb31179356df7bba8"
  },
  {
    "url": "assets/js/9.b2575134.js",
    "revision": "1cefd331bdaa7f56bc03ec43e8a5e754"
  },
  {
    "url": "assets/js/app.fdc152d6.js",
    "revision": "e561c22ae366bb9f04957e2299ed189a"
  },
  {
    "url": "icons/android-chrome-144x144.png",
    "revision": "a837eb28714fd32f14340662b9fdc853"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "cec0b276f7a97590fe2e3398ec809e7c"
  },
  {
    "url": "icons/android-chrome-256x256.png",
    "revision": "49414a7fccaa5e10d021405d927ea453"
  },
  {
    "url": "icons/android-chrome-36x36.png",
    "revision": "758c7c2dba9c830351217bd76b43f0be"
  },
  {
    "url": "icons/android-chrome-384x384.png",
    "revision": "b4308cfd93f05efea79ca63d6267f7f0"
  },
  {
    "url": "icons/android-chrome-48x48.png",
    "revision": "7a9dfc852ce4b85c36f810be010e2316"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "2a3a371a4c8a0d26fd6ad0a7ca2a6964"
  },
  {
    "url": "icons/android-chrome-72x72.png",
    "revision": "11e5930d7c6ca470ff1b95ab0aa7ee7b"
  },
  {
    "url": "icons/android-chrome-96x96.png",
    "revision": "3e7e532ddf706d1905f09c298914f25f"
  },
  {
    "url": "icons/apple-touch-icon-1024x1024.png",
    "revision": "e6b2f763b9b78e45cd58cde68a537653"
  },
  {
    "url": "icons/apple-touch-icon-114x114.png",
    "revision": "e0360b127ea52e27f1cd5c1edc45fdef"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "2b2b07c584b708f6c66562869dd9aeb3"
  },
  {
    "url": "icons/apple-touch-icon-144x144.png",
    "revision": "17a2601b973630117ba2335277d27f82"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "0b34a695f08a52c5a117696b6c4f6249"
  },
  {
    "url": "icons/apple-touch-icon-167x167.png",
    "revision": "33940e6c00ea140c83e2296fdd53cd34"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "15b629db7eff59ac095afbe2abbf43cb"
  },
  {
    "url": "icons/apple-touch-icon-57x57.png",
    "revision": "d447cf430927548dffc486e2b6b5ad84"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "ce955dd4bc311b3a3a696d4146d5caa1"
  },
  {
    "url": "icons/apple-touch-icon-72x72.png",
    "revision": "4494f6e155b8e8ba2ac22122f707f4c9"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "5e61a09d8a06721011b9a28cb9d6558c"
  },
  {
    "url": "icons/apple-touch-icon-precomposed.png",
    "revision": "15b629db7eff59ac095afbe2abbf43cb"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "15b629db7eff59ac095afbe2abbf43cb"
  },
  {
    "url": "icons/apple-touch-startup-image-1125x2436.png",
    "revision": "36da14597a8e62c9a1886979ae334ba0"
  },
  {
    "url": "icons/apple-touch-startup-image-1136x640.png",
    "revision": "aed17cae538f076eb6b5df4c7abc6181"
  },
  {
    "url": "icons/apple-touch-startup-image-1242x2208.png",
    "revision": "34b8c2069fa3f4d9274dc32037610065"
  },
  {
    "url": "icons/apple-touch-startup-image-1242x2688.png",
    "revision": "f56d4cd87a11950fc5554adfb7e7b590"
  },
  {
    "url": "icons/apple-touch-startup-image-1334x750.png",
    "revision": "9df5d5d910e13f71155028f35843beae"
  },
  {
    "url": "icons/apple-touch-startup-image-1536x2048.png",
    "revision": "9fd09f36bb9800db38114a8ceabcb059"
  },
  {
    "url": "icons/apple-touch-startup-image-1620x2160.png",
    "revision": "050b47e06c39f5c1ac7a18f8c5413c9d"
  },
  {
    "url": "icons/apple-touch-startup-image-1668x2224.png",
    "revision": "05ba2689d4cec1fdd9d9086c826bb122"
  },
  {
    "url": "icons/apple-touch-startup-image-1668x2388.png",
    "revision": "5d43033849b82e257d8d261d0390dd81"
  },
  {
    "url": "icons/apple-touch-startup-image-1792x828.png",
    "revision": "a186041af7995e16743729d01fc59782"
  },
  {
    "url": "icons/apple-touch-startup-image-2048x1536.png",
    "revision": "68ad3bd386ebda7d7eb999a8bf9ca040"
  },
  {
    "url": "icons/apple-touch-startup-image-2048x2732.png",
    "revision": "379e785c6e9c088d232eaa991674ade4"
  },
  {
    "url": "icons/apple-touch-startup-image-2160x1620.png",
    "revision": "95a508defcf1eb753fff7884c11b16d1"
  },
  {
    "url": "icons/apple-touch-startup-image-2208x1242.png",
    "revision": "4ddd567fb2001bb30bafbcec9c370ef2"
  },
  {
    "url": "icons/apple-touch-startup-image-2224x1668.png",
    "revision": "b52d1a0f7ae8b1ae6c3e4bf249a015a4"
  },
  {
    "url": "icons/apple-touch-startup-image-2388x1668.png",
    "revision": "28934352488bba9f5b53eb8a9d94f72a"
  },
  {
    "url": "icons/apple-touch-startup-image-2436x1125.png",
    "revision": "5758b9254e5ec9c307a51274b7b04e0e"
  },
  {
    "url": "icons/apple-touch-startup-image-2688x1242.png",
    "revision": "96cea4a6a2a678baf5ef555e175a85ee"
  },
  {
    "url": "icons/apple-touch-startup-image-2732x2048.png",
    "revision": "cffb7afd02dd7eddd40e402e89fd1340"
  },
  {
    "url": "icons/apple-touch-startup-image-640x1136.png",
    "revision": "abcfa9bb0c0dd4c6a29218fe5ddaa3c8"
  },
  {
    "url": "icons/apple-touch-startup-image-750x1334.png",
    "revision": "cd2d5748652af77c6bbe9b9d66430516"
  },
  {
    "url": "icons/apple-touch-startup-image-828x1792.png",
    "revision": "4c1232efd4ea789ac667eb7d41df7e8b"
  },
  {
    "url": "icons/coast-228x228.png",
    "revision": "0fab21bd2f706b01a7af5f13b4d6ebb4"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "bed6d4b2367b0b3ff5d31b16ff925717"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "a49f07288e21d897dcef39a30b32e101"
  },
  {
    "url": "icons/favicon-48x48.png",
    "revision": "7a9dfc852ce4b85c36f810be010e2316"
  },
  {
    "url": "icons/firefox_app_128x128.png",
    "revision": "c4f9a1a808f3b703c2cfd499b49c3459"
  },
  {
    "url": "icons/firefox_app_512x512.png",
    "revision": "af4a5dba7a0a6fa0793ad41cb25ccc48"
  },
  {
    "url": "icons/firefox_app_60x60.png",
    "revision": "06621032bc2ea9d83e05e93b89329013"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "a837eb28714fd32f14340662b9fdc853"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "b086a473a4acc9cacfde0600d5b017fd"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "b5a7262e6f2ed7d2a5c72ffbc7f58c21"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "8c3d6c8784785518e748ca88c7dd50a1"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "d5e7bc9c0f9c806a021e9c08e59e64d2"
  },
  {
    "url": "icons/yandex-browser-50x50.png",
    "revision": "23d8cda330c9a71077756665c911a5ff"
  },
  {
    "url": "impressum.html",
    "revision": "26b7b73e8b2d28c3695ebf67f3da99d9"
  },
  {
    "url": "index.html",
    "revision": "6b137b86b0c44e7c2ed9d1914361e3d3"
  },
  {
    "url": "me.png",
    "revision": "dfed7114ff4fbe0b59144e9c124f93f0"
  },
  {
    "url": "tag/abouts/index.html",
    "revision": "c9b983ce85e96311403f5ae8490bd6c3"
  },
  {
    "url": "tag/index.html",
    "revision": "7ca16ec8dcd85cf5057c6131e4c4c965"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
