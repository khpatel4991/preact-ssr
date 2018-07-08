const htmlWrapper = rootHtml => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Preact Fastify</title>
    </head>
    <body>
      <div class="gridContainer">
        <div class="item header">Header</div>
        <div class="item sidebar">Sidebar</div>
        <div class="item content-1">${rootHtml}</div>
        <div class="item content-2">Content 2</div>
        <div class="item content-3">Content 3</div>
        <div class="item footer">Footer</div>
        <script src="build/bundle.js"></script>
      </div>
    </body>
    </html>
  `
}

export default htmlWrapper;