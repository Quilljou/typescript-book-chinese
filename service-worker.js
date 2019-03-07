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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3baf63a31b05130259ed30abfb3e15b5"
  },
  {
    "url": "assets/css/0.styles.1e9dd1c2.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.28954348.js",
    "revision": "e08110f2a7c00c8f431dac1f68d07ab4"
  },
  {
    "url": "assets/js/11.4bb0bd79.js",
    "revision": "d92c923cdf73bb63661379703c970a7f"
  },
  {
    "url": "assets/js/12.894d4a5e.js",
    "revision": "7df41f9177906298f4d2520d6fe739f4"
  },
  {
    "url": "assets/js/13.a317a07d.js",
    "revision": "32018bb32c91f7c90c4440bbe9430ce1"
  },
  {
    "url": "assets/js/14.7d9f5f1e.js",
    "revision": "1aa46fe3af6a0dfec723f336476a1e3f"
  },
  {
    "url": "assets/js/15.4532d799.js",
    "revision": "7fd4fa11d2e98d77ddbe9d361c4b814d"
  },
  {
    "url": "assets/js/16.19d7a12d.js",
    "revision": "632f635d95efe984015e5f2b3fa05468"
  },
  {
    "url": "assets/js/17.aba37dfc.js",
    "revision": "2a1f971836f9f4623afda668fdc51807"
  },
  {
    "url": "assets/js/18.b32c4be0.js",
    "revision": "c3e8e838d4235f5183ee3b98f23a0202"
  },
  {
    "url": "assets/js/19.59764dec.js",
    "revision": "7b74d463544eec4b2e1b5fce010573a9"
  },
  {
    "url": "assets/js/2.46f75de9.js",
    "revision": "9d70c102bb1f8fc49c3562925fdcc914"
  },
  {
    "url": "assets/js/20.48ebdc87.js",
    "revision": "bffe3f871e53d1916192ecf423cd4bc6"
  },
  {
    "url": "assets/js/21.920f7d22.js",
    "revision": "8875d09e96037b8977beeac380cc8273"
  },
  {
    "url": "assets/js/22.be02a8d1.js",
    "revision": "d51385fc1e7f29a3a721f4b5fb3afa95"
  },
  {
    "url": "assets/js/23.4fd91205.js",
    "revision": "370e5a31cfb9e02bba9aa92185c89f0b"
  },
  {
    "url": "assets/js/24.7eeea509.js",
    "revision": "5c18e36a075c1d6441063061c0eeade4"
  },
  {
    "url": "assets/js/25.fcc20383.js",
    "revision": "d690f48d4c3e4ec5dfa5efcbcbcf5b5b"
  },
  {
    "url": "assets/js/26.f9216cb3.js",
    "revision": "7aca555b65b5d578f053a0279ccd9f93"
  },
  {
    "url": "assets/js/27.d1cf0be2.js",
    "revision": "1dea88b69a8500fc4a51cc941048a966"
  },
  {
    "url": "assets/js/28.dbf8a0ee.js",
    "revision": "0a80de0eef50709e765cdb335adb636c"
  },
  {
    "url": "assets/js/29.40fb3c49.js",
    "revision": "4444efb592e9b3e27c641d2e15ae18a1"
  },
  {
    "url": "assets/js/3.2c7f7618.js",
    "revision": "fab5a02067447102d7ad949cad439c8a"
  },
  {
    "url": "assets/js/30.2a47c679.js",
    "revision": "3d53370430e377ec3adddea82e095c53"
  },
  {
    "url": "assets/js/31.03530403.js",
    "revision": "7acb7332d305600388c90ddde630d30e"
  },
  {
    "url": "assets/js/32.e6d8cf4c.js",
    "revision": "44abc2cd7e58b83bcbb286bd78915ed9"
  },
  {
    "url": "assets/js/33.17a439c1.js",
    "revision": "0d915f31e6f6f34e18fc93c69d38be5e"
  },
  {
    "url": "assets/js/34.47a79f97.js",
    "revision": "37262d805c9dea9edda34843b136aca7"
  },
  {
    "url": "assets/js/35.c540147d.js",
    "revision": "ef9da4d104caa6f856b9268ba16ebd4d"
  },
  {
    "url": "assets/js/36.e53d37d2.js",
    "revision": "38b02fd9a08c3815adae36a912fedb0f"
  },
  {
    "url": "assets/js/37.a15dda62.js",
    "revision": "daf04b51947a4d919f3af9b071de6290"
  },
  {
    "url": "assets/js/38.101d176a.js",
    "revision": "5a3baa951c2d0ff74faa64fb717406b7"
  },
  {
    "url": "assets/js/39.1f6162fa.js",
    "revision": "ca616d45c6536e6342e23d874b94f91f"
  },
  {
    "url": "assets/js/4.7edbf204.js",
    "revision": "96f8516075720b7fcd4e94dae0756b43"
  },
  {
    "url": "assets/js/40.9fb7fa63.js",
    "revision": "6f18a8ce6130d49764117a1dab01d684"
  },
  {
    "url": "assets/js/41.447eedbe.js",
    "revision": "28d05388a8dca5bf2ea6ff80df656a67"
  },
  {
    "url": "assets/js/42.4a130b7d.js",
    "revision": "0c79f65b892b3049d7f48e0d178993ca"
  },
  {
    "url": "assets/js/43.c2a0ff57.js",
    "revision": "afa544ecfc60fbd211ce8e5475387aa2"
  },
  {
    "url": "assets/js/44.49ae1e8a.js",
    "revision": "ed34d66b10efbd9fbc6b025d96b33864"
  },
  {
    "url": "assets/js/45.13a0a331.js",
    "revision": "b1bed355e08a1908d09960bcff80b400"
  },
  {
    "url": "assets/js/46.5ce5d559.js",
    "revision": "95fcb90caaf4a03ee08229304f1d81ff"
  },
  {
    "url": "assets/js/47.191986b7.js",
    "revision": "e6cd590071378e12067ccf0bcdf88ec7"
  },
  {
    "url": "assets/js/48.9bff6a3e.js",
    "revision": "ed72fb8a0885118ae04a87b217cc4f52"
  },
  {
    "url": "assets/js/49.5abc09b4.js",
    "revision": "5e7dc87cb19727e4c1fa9ff1dc036ed3"
  },
  {
    "url": "assets/js/5.afa37596.js",
    "revision": "4f839157b644524179b704ebc9707a14"
  },
  {
    "url": "assets/js/50.34967cc5.js",
    "revision": "9844a14c872a7aecfcd42964cd271f52"
  },
  {
    "url": "assets/js/51.b385d24d.js",
    "revision": "c77512c415241940704a7f23bfabcf2e"
  },
  {
    "url": "assets/js/52.beede4c9.js",
    "revision": "c69a57553692ccecb524003a43631da4"
  },
  {
    "url": "assets/js/53.1af2bb19.js",
    "revision": "fc00d99a11a245710005e98babaa183e"
  },
  {
    "url": "assets/js/54.f3fd7d51.js",
    "revision": "cdf12468018d5fa6ce2af3d114fc1d27"
  },
  {
    "url": "assets/js/55.4c87a1b2.js",
    "revision": "1177649c039ee1385777c071cdbe0de1"
  },
  {
    "url": "assets/js/56.ccc0a87e.js",
    "revision": "de56d744e0ce11258956e5eb7560dc12"
  },
  {
    "url": "assets/js/57.d87fe2a5.js",
    "revision": "7717d816294ad32fac4ff2f9ab27acb5"
  },
  {
    "url": "assets/js/58.c2440401.js",
    "revision": "af5cd0de0167685694ae2440189d11aa"
  },
  {
    "url": "assets/js/59.d6630bfa.js",
    "revision": "555453254cfc1f7f7c91a7f50dd45e18"
  },
  {
    "url": "assets/js/6.8f8e5025.js",
    "revision": "cde0d65cb67349289b94bf67e7aabbab"
  },
  {
    "url": "assets/js/60.45d86485.js",
    "revision": "cec54a32e116bbc227ab77c4c8dce82e"
  },
  {
    "url": "assets/js/61.c7a446fe.js",
    "revision": "92561f06aefbba19385f69dd07e2a5b2"
  },
  {
    "url": "assets/js/62.b5927520.js",
    "revision": "1f16187d282ec4a88bedd6510b906285"
  },
  {
    "url": "assets/js/63.93c8ec12.js",
    "revision": "7f307fe7d07c5bffcdbde94523f146e0"
  },
  {
    "url": "assets/js/64.2877b94b.js",
    "revision": "9e999deecc0712bfb7dc5274e7d4a9bc"
  },
  {
    "url": "assets/js/65.bc492483.js",
    "revision": "3f0e3629b37dda4dce889e3dcb7f8054"
  },
  {
    "url": "assets/js/66.6fdbf043.js",
    "revision": "316532154fab3d3d996cb1ba807fb703"
  },
  {
    "url": "assets/js/67.75d1370e.js",
    "revision": "9ef50040084f2a3660198c654250d57e"
  },
  {
    "url": "assets/js/68.48cd606c.js",
    "revision": "8049fce675b0fb2550948e7958f90583"
  },
  {
    "url": "assets/js/69.a16bb40c.js",
    "revision": "c9b649527693ab3eec307da9d7172007"
  },
  {
    "url": "assets/js/7.c63091b3.js",
    "revision": "8a208a447a0a0140736d3ca6fdd7767e"
  },
  {
    "url": "assets/js/70.50e11a45.js",
    "revision": "369f33ad6832fae43f0159fdbd4503a7"
  },
  {
    "url": "assets/js/71.86137103.js",
    "revision": "af22f223738d65336425bc7bd78c6662"
  },
  {
    "url": "assets/js/72.6948e899.js",
    "revision": "9ad1088280edce8b6d9883fccfe6ec85"
  },
  {
    "url": "assets/js/73.4dfc3a0d.js",
    "revision": "db639a5d1dc5148fdfa9d4312cc2c968"
  },
  {
    "url": "assets/js/74.fd5bffcd.js",
    "revision": "4addac8e67b36faab9ac8badb4f96878"
  },
  {
    "url": "assets/js/75.f23e8107.js",
    "revision": "ce3095fb1edd4245425f2656e8fa8c5a"
  },
  {
    "url": "assets/js/76.7f5c0fe7.js",
    "revision": "d3d81749b56d50a364448bafa37f99ff"
  },
  {
    "url": "assets/js/77.66755513.js",
    "revision": "887591aa13e353e5e6da31da0be17727"
  },
  {
    "url": "assets/js/78.7277f628.js",
    "revision": "4d30ada1876863122045f5743317da8d"
  },
  {
    "url": "assets/js/79.e83cc1e7.js",
    "revision": "5b63600a73275672bb4bd04e10731d2c"
  },
  {
    "url": "assets/js/8.ac199a37.js",
    "revision": "1fac6edeb2d80515afb33b82bd05de14"
  },
  {
    "url": "assets/js/80.8e2bfa15.js",
    "revision": "076d9e6f9af6f425e8ad2281fa408335"
  },
  {
    "url": "assets/js/81.523f1b2e.js",
    "revision": "f72a52fe500238c297d710c82526dcda"
  },
  {
    "url": "assets/js/82.a497e979.js",
    "revision": "86380ee68f097e0ffef6df2f4e7b3ee1"
  },
  {
    "url": "assets/js/83.286dc109.js",
    "revision": "fd95bf2ee951432c647141adb140feaf"
  },
  {
    "url": "assets/js/84.596501db.js",
    "revision": "115693a26e5df14202ecfa523d0e1af4"
  },
  {
    "url": "assets/js/85.da1821df.js",
    "revision": "2aeb2319cb92cf5fba4311bf72928f14"
  },
  {
    "url": "assets/js/9.288ed0bc.js",
    "revision": "7bc8c6e250aaa1dcbddf884c30dba7b3"
  },
  {
    "url": "assets/js/app.17ffab70.js",
    "revision": "597600d24fd3fda1625a2899f826b121"
  },
  {
    "url": "compiler/ast.html",
    "revision": "d9bdd607e67cc5a07d953a8700c11791"
  },
  {
    "url": "compiler/binder.html",
    "revision": "05cab9a63b636e8000827b5463809991"
  },
  {
    "url": "compiler/checker.html",
    "revision": "62609fcf2b0382f69c8ed66aadfccb02"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "e153eb96505c39f1ea8a2c9bb7ba5ebc"
  },
  {
    "url": "compiler/overview.html",
    "revision": "14c2dc7d6bc71a012df9f50a5b11208f"
  },
  {
    "url": "compiler/parser.html",
    "revision": "c80ed8eb45291ec9b678a449a747d688"
  },
  {
    "url": "compiler/program.html",
    "revision": "d4994fae0c7d4d1ec34dd25bc4035081"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "f6018883b664cfbf2784557e5efe0d8c"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "6e0a78970dae2b2f945d5beea5553b74"
  },
  {
    "url": "error/interpreting.html",
    "revision": "611f359cc8c9be573dd3e1dbea1605ce"
  },
  {
    "url": "faqs/class.html",
    "revision": "ae4d3896d663c216d28cae9f13fcdc11"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "21ba465d43243b891c4564da17c1186c"
  },
  {
    "url": "faqs/comments.html",
    "revision": "49a6200191569ebad68273b2c32b967f"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "276c170fde7687d0011fd8ac625ea9cf"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "f4676acaf632c2c8eecc0a08f580597d"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "47b866185363755d49b9131b62f36ac9"
  },
  {
    "url": "faqs/enums.html",
    "revision": "fddc537768554443329df100d4022c8a"
  },
  {
    "url": "faqs/function.html",
    "revision": "45953ff563aa8c4888ec16264687fac0"
  },
  {
    "url": "faqs/generics.html",
    "revision": "4ea0e192c2d7f366c76df407cdce522a"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "e34456fa0c250250e53334ba5378806a"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "09e123c5fba8fdd995f6d0d09094ddc0"
  },
  {
    "url": "faqs/modules.html",
    "revision": "b93bd7e7fde1ac7855bd711cb46d573e"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "8ba666e9e5de60a0909fa605d27bab6f"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "116a80a054107feb1d5b98534c4d8055"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "e4b40a7796671b73b6d3ca383a7e19fb"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "42b2e0302f0fb3e1b6e1fc247a939323"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "9567a4bb00cae5ac323dd057ac37cab1"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "6b133f932e6d38b07a31c74e677ee64e"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "6f1539942adbbec754c5e181be6115e5"
  },
  {
    "url": "jsx/support.html",
    "revision": "003048792ce3006c891280aa7b23eab0"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "6d5ce07383a4280ea01bc3932824022c"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "34845898c4a27e0d486ec0db33100a7f"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "03f2a62ace95fe393d81f8d17039b442"
  },
  {
    "url": "project/modules.html",
    "revision": "a90a0a950db1166661c40687e463d30b"
  },
  {
    "url": "project/namespaces.html",
    "revision": "27e12751797eae2998c8881662e789d9"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "9377b6234221abb9310bffb9de7c8197"
  },
  {
    "url": "tips/barrel.html",
    "revision": "91a279365db0dd96979d8a3cb2007da6"
  },
  {
    "url": "tips/bind.html",
    "revision": "391a6e1a32017c8c0b885a743f0b8cae"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "cbdd93648e69c98580a19abf0760dd93"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "5d7acdf9c3225ab49da24293ec7da564"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "ae2635b95dcecc8e2b181404d2ff8331"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "b8369859357f108f83408103aa0998f7"
  },
  {
    "url": "tips/curry.html",
    "revision": "f40aadc68f518715f6ef7eb83f7d1b53"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "31c127b31291f30d78e529094a6113e1"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "b1dee256e2ac2f698595fde184043806"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "3dc0f0528d9516dc07707094658c3868"
  },
  {
    "url": "tips/metadata.html",
    "revision": "ac00021679da2766204040a44fe1e501"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "fa073a14eb33c46a760991cfe1332187"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "20d8d5b88b7cbed58ba3660332236878"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "4ffadb829f792ca45a15fb51d07d332d"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "8309a7df7682a93264a5c0a2fcb27632"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "45c03fb45e773629078b0d163c52d907"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "daaa0c3d48f41933939e4fa6dbca5a48"
  },
  {
    "url": "tips/truthy.html",
    "revision": "78bd3c496b64d595612751c47163057a"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "a9f36191cb336a66d2835c053427af49"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "539240d34acaa80101f5881c355c6139"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "abcf59dce01ddc51193788e6ac77fca1"
  },
  {
    "url": "typings/callable.html",
    "revision": "7d94d3b62a95786174c8ec6bd93d4ae4"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "38c77cdf04194e6b46dafcf3d01f72f0"
  },
  {
    "url": "typings/enums.html",
    "revision": "be0498d30213b8d3539d8abcf5920093"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "e4327a39273a6f5db4669057dc7ddc57"
  },
  {
    "url": "typings/freshness.html",
    "revision": "94375cca66d7f170321385eab4d46c8f"
  },
  {
    "url": "typings/functions.html",
    "revision": "05cc14c8b7ffd1555d9702c832ba9ac1"
  },
  {
    "url": "typings/generices.html",
    "revision": "913509ad1a5b3706d33cc28b90ff2cf7"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "9152c496d7351dc8045e4e0ab461e75f"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "a5a68f56435bc48dd09f63fa1749261a"
  },
  {
    "url": "typings/lib.html",
    "revision": "af0002c04ca7b1a34bbe4b7a3f8df992"
  },
  {
    "url": "typings/literals.html",
    "revision": "144d952da81adeb8155d27d6dfbc2621"
  },
  {
    "url": "typings/migrating.html",
    "revision": "4f56d0c73ecba6a349df81ec27ea4ee1"
  },
  {
    "url": "typings/mixins.html",
    "revision": "fb3796fe8e360d603f98b0a6b95cb1e2"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "25bf031b4e188042ea75f6bd962e06b2"
  },
  {
    "url": "typings/neverType.html",
    "revision": "450ed12b4ab23a03b8c48592e8ef1670"
  },
  {
    "url": "typings/overview.html",
    "revision": "aa416f6a5ea02ab57c78ea51404fcd85"
  },
  {
    "url": "typings/readonly.html",
    "revision": "8a87908760d068fcf15e59c244e565a3"
  },
  {
    "url": "typings/thisType.html",
    "revision": "05900486c96e46b831309aa96c667290"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "53462bb46fbae0aea542b717deda0a14"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "c64cab0df2e0825e8f77a747fd21a8b9"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "d14a4077deac39436dad288393f895f7"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "a2b46d6becbf0c2f5cc81f078a09fce4"
  },
  {
    "url": "typings/types.html",
    "revision": "81b431434a04c1996b522b437117b62c"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
