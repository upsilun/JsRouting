<p align="center">
  <img width="170rem" src="https://i.ibb.co/3B3tDq6/480px-Unofficial-Java-Script-logo-2-svg.jpg" />
</p>

<div align="center">
  <h1>JsRouting 📍💻</h1>
</div>

### Simple JavaScript routing system with one slash route `/` <br>
### ⚙ ```v1.0``` <br>
```https://example.com/example``` ✔ <br>
```https://example.com/:username``` ✔ <br><br>
```https://example.com/home/example``` ❌<br>
```https://example.com/home/example/example/...``` ❌
<br><br>

### JsRoute Script :
```
https://cdn.jsdelivr.net/gh/im95u/JsRouting/index.js
```
<br>

# Documentation 📜

## 1️⃣ First setup your server 
### Apache `.htaccess`
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

### nginx
```js
location / {
  try_files $uri $uri/ /index.html;
}
```
<br>

## 2️⃣ Second Start Using JsRoute
### 🔴 `Please make sure you using this codes after page loaded successfully` 🔴
### ✨ Simple Route 
```js
var jsRoute = new JsRoute()

jsRoute.get("/example", function(){
  alert("Wow! 😁")
})
```

### 🎉 Parameter Route 
```js
var jsRoute = new JsRoute()

jsRoute.get("/:username", function(username){
  alert("Wow! 😁\nUsername : " + username)
})
```

### 📛 Some Errors
```js
jsRoute.get("/example/two") ❌
```
```js
jsRoute.get("/example/:parameter") ❌
```
<br><br>

# 🤔 if you have a problem contact me via : 
## issues section : https://github.com/im95u/JsRouting/issues
## Discord : `9⁵#0095`
## Discord Server : `https://discord.gg/jwm3f4d5MJ`
