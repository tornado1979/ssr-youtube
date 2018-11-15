import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/components/Router/routes'
import { Header } from '../client/components/header'
import { Footer } from '../client/components/footer'

export default (pathname, context = {}) => {
  const content = renderToString(
    <div>
      <Header />
      <StaticRouter context={context} location={pathname}>
        <Routes />
      </StaticRouter>
      <Footer />
    </div>,
  )

  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>server side rendering - youtube</title>
      </head>
      <body>

      <div id="root">${content}</div>
      <script src="bundle.js"></script>
      </body>
      </html>`
}
