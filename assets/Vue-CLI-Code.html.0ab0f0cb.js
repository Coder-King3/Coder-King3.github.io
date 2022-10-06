import{_ as e,o as c,c as i,b as a}from"./app.9c0d67b2.js";const r={},t=a('<h2 id="\u4E00\u3001\u6267\u884C\u539F\u7406\u6B65\u9AA4\u56FE" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6267\u884C\u539F\u7406\u6B65\u9AA4\u56FE" aria-hidden="true">#</a> \u4E00\u3001\u6267\u884C\u539F\u7406\u6B65\u9AA4\u56FE</h2><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/ZBx5wLJAjrFImfd.png" alt="image-20220706162217263"></p><h2 id="\u4E8C\u3001\u5177\u4F53\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5177\u4F53\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4E8C\u3001\u5177\u4F53\u4EE3\u7801\u5B9E\u73B0</h2><h3 id="_1-\u8FD0\u884Cpnpm-run-server\u4F1A\u53D1\u751F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-\u8FD0\u884Cpnpm-run-server\u4F1A\u53D1\u751F\u4EC0\u4E48" aria-hidden="true">#</a> 1. \u8FD0\u884Cpnpm run server\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</h3><p><strong>(1) \u6267\u884C<code>pnpm run server</code></strong></p><p>\u7CFB\u7EDF\u4F1A\u6267\u884C<code>package.json</code>\u4E2D<code>&quot;scripts&quot;</code>\u4E2D\uFF0C\u914D\u7F6E\u597D\u7684\u5FEB\u6377\u6307\u4EE4<code>&quot;dev&quot;: &quot;vue-cli-service serve&quot;</code>\u3002</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/spgMG7F9mYnNQW2.png" alt="image-20220706161137224"></p><p>\u6B64\u547D\u4EE4\u4F1A\u6267\u884C<code>node_modules/.bin/vue-cli-service</code>\u8F6F\u8FDE\u63A5\u6587\u4EF6</p><p><strong>(2) \u6267\u884C<code>vue-cli-service.js</code>\u6587\u4EF6\u3002</strong></p><p><code>vue-cli-service</code>\u8F6F\u8FDE\u63A5\u6587\u4EF6\u8FDE\u63A5\u5230\u7684\u662F<code>@vue/cli-service/bin/vue-cli-service.js</code>\u6587\u4EF6\uFF0C\u6700\u7EC8\u6267\u884C\u7684\u662F<code>vue-cli-service.js</code>\u6587\u4EF6\u3002</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/gpaWfc7t2QCzNiT.png" alt="image-20220706161950436"></p><h3 id="_2-vue-cli-service-js\u5E72\u4E86\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_2-vue-cli-service-js\u5E72\u4E86\u4EC0\u4E48" aria-hidden="true">#</a> 2. <code>vue-cli-service.js</code>\u5E72\u4E86\u4EC0\u4E48</h3><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/qMJWj74rBVitZ3a.png" alt="image-20220706162607299"></p><p>(1) \u5BFC\u5165<code>lib/Service</code>\u6587\u4EF6\u5E76\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u6267\u884C<code>service</code>\u6784\u9020\u51FD\u6570 <img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/xKIGbZyW7hcndzt.png" alt="image-20220706163357791"></p><p>\u5C06<code>builtInPlugins</code>\u901A\u8FC7map\u6620\u5C04\u5230<code>idToPlugin</code>\uFF0C<code>apply</code>\u51FD\u6570\u540E\u7EED\u52A8\u6001\u5BFC\u5165<code>builtInPlugins</code>\u914D\u7F6E\u4E2D\u7684\u6587\u4EF6\u3002</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/1nHgpj4OWGls5UX.png" alt="image-20220706163717338"></p><p>(2) \u62FF\u5230<code>command</code>(\u4F60<code>pnpm run XXX</code> \u4F20\u6765\u7684\u503C[serve/build])\uFF0C\u4F20\u7ED9<code>run</code>\u8C03\u7528<code>service.run</code>\u65B9\u6CD5</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/7fOcrz6XADgpZbY.png" alt="image-20220706164952905"></p><p>\u8C03\u7528<code>init</code>\u51FD\u6570\u52A0\u8F7D\u73AF\u5883\u53D8\u91CF\u3002\u904D\u5386\u6240\u6709\u63D2\u4EF6\uFF0C\u62FF\u5230<code>id</code>\u548C<code>apply</code>\u65B9\u6CD5\uFF0C\u8C03\u7528<code>apply</code>\u65B9\u6CD5\uFF0C<code>requice</code>(\u52A0\u8F7D)\u6587\u4EF6\u5E76\u62FF\u5230\u8FD4\u56DE\u503C\u3002</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/YbvAwrd3BW26XQl.png" alt="image-20220706165330843"></p><p>\u521B\u5EFA<code>PluginAPI</code>\u5B9E\u4F8B\u5BF9\u8C61\u5E76\u6839\u636E<code>builtInPlugins</code>\u52A0\u8F7D\u6587\u4EF6\u3002\u5C06\u52A0\u8F7D\u540E\u8FD4\u56DE\u7684\u7ED3\u679C\u8D4B\u503C\u7ED9<code>commands</code>\u3002</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/GApzeFX5a6JCDTj.png" alt="image-20220706170905044"></p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/cdWnbtzXgyfOaZv.png" alt="image-20220706170141902"></p><p>\u6700\u540E\u4ECE<code>commands</code>\u4E2D\u6839\u636E\u4F20\u8FC7\u6765\u7684<code>name[command]</code>\u62FF\u5230<code>command</code>\uFF0C\u5E76\u4ECEcommand\u4E2D\u89E3\u6784\u51FA<code>fn()</code>\u65B9\u6CD5\u5E76\u6267\u884C\uFF0C\u52A0\u8F7D<code>webpack</code>\u7684\u914D\u7F6E\u8FD0\u884C\u542F\u52A8<code>DevServer</code>\u670D\u52A1</p><h3 id="_3-fn\u51FD\u6570\u6267\u884C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_3-fn\u51FD\u6570\u6267\u884C\u6B65\u9AA4" aria-hidden="true">#</a> <strong>3. <code>fn</code>\u51FD\u6570\u6267\u884C\u6B65\u9AA4</strong></h3><p>\u62FF\u5230<code>webpack\uFF0Cwebpack-dev-server</code>\u51FD\u6570</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/2r8w7sCA1m9tiyU.png" alt="image-20220706171317753"></p><p>\u83B7\u53D6<code>webpack</code>\u914D\u7F6E</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/N8Q2dPfkijEWmGI.png" alt="image-20220706171420758"></p><p>\u9996\u5148\u62FF\u5230<code>vue.config.js</code>\u81EA\u5DF1\u8BBE\u7F6E\u7684\u914D\u7F6E\uFF0C\u7136\u540E\u62FF\u5230\u811A\u624B\u67B6\u4E2D\u9884\u8BBE\u597D\u7684<code>webpack</code>\u914D\u7F6E</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/9SWvbiYzkZmCxM3.png" alt="image-20220706171610591"></p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/Zl5YKHd7Nq4zicW.png" alt="image-20220706171558682"></p><p>\u9884\u8BBE\u597D\u7684<code>webpack</code>\u914D\u7F6E\u662F\u5728<code>init</code>\u521D\u59CB\u5316\u4E2D\u5BFC\u5165<code>builtInPlugins/config</code>\u4E2D\u7684\u914D\u7F6E</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/XfTqp1xsnIWKrod.png" alt="image-20220706171701187"></p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/xB1JnGf3wRsqQXk.png" alt="image-20220706171722996"></p><p>\u7136\u540E\u5C06<code>webpackConfig</code>\u914D\u7F6E\u4F20\u7ED9<code>webpack</code>\u51FD\u6570\u5F97\u5230<code>compiler</code></p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/zkFiLDRpKGCQMlo.png" alt="image-20220706172700749"></p><p>\u5C06<code>compiler</code>\u4F20\u7ED9<code>WebpackDevServer</code>\u6784\u9020\u51FD\u6570\u4ECE\u521B\u5EFA<code>server</code>\u5B9E\u4F8B</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/eD4kVjIwOWdStrR.png" alt="image-20220706172956254"></p><p>\u6700\u540E\u901A\u8FC7<code>listenc</code>\u51FD\u6570\uFF0C\u8BBE\u7F6E\u4E3B\u673A\u548C\u7AEF\u53E3\u53F7\u5E76\u542F\u52A8<code>DevServer</code>\u670D\u52A1\u3002</p><p><img src="https://cdn.staticaly.com/gh/LiYuanRen3/PictureLibrary@master/img/6wA5aPGLIlYTU2K.png" alt="image-20220706173043094"></p>',41),d=[t];function o(n,p){return c(),i("div",null,d)}var m=e(r,[["render",o],["__file","Vue-CLI-Code.html.vue"]]);export{m as default};
