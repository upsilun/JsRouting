<p align="center">
  <img width="170rem" src="https://i.ibb.co/3B3tDq6/480px-Unofficial-Java-Script-logo-2-svg.jpg" />
</p>

<div align="center">
  <h1>JsRouting 📍💻</h1>
</div>

## About

JsRouting is a simple JavaScript routing system with one slash route `/`.

### Compatibility

- `https://example.com/example` ✔ 
- `https://example.com/:username` ✔ 
- `https://example.com/home/example` ❌
- `https://example.com/home/example/example/...` ❌

### CDN :

`https://cdn.jsdelivr.net/gh/im95u/JsRouting/index.js`

## Documentation 📜
1️⃣ First setup your server
Apache .htaccess

```js

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Nginx

```js

location / {
  try_files $uri $uri/ /index.html;
}
```

2️⃣ Second Start Using JsRoute

`🔴 Please make sure you use this code after the page has loaded successfully 🔴`

✨ Simple Route

```js

var jsRoute = new JsRoute();

jsRoute.get("/example", function() {
  alert("Wow! 😁");
});
```

🎉 Parameter Route
```js

var jsRoute = new JsRoute();

jsRoute.get("/:username", function(username) {
  alert("Wow! 😁\nUsername : " + username);
});
```

📛 Some Errors

```js
jsRoute.get("/example/two") ❌
```

```js
jsRoute.get("/example/:parameter") ❌
```

#### 🤔 If you have a problem, contact me via:

Issues section: https://github.com/im95u/JsRouting/issues

Discord: `upsilun#6775`
