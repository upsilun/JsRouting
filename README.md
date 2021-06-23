# JsRouting
Simple JavaScript routing system with one slash route <br><br>
```https://example.com/home``` ✅ <br>
```https://example.com/:username``` ✅ <br><br>
```https://example.com/home/example``` ❌<br>
```https://example.com/home/example/example/...``` ❌
<br>

# Documentation 📜

## 1️⃣ First setup your server 
### Apache
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

### Native Node.js
```js
const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.html', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.html" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
```
