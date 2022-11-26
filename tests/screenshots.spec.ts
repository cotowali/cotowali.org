import { test } from '@playwright/test'

test('screenshot', async ({ page, browserName }) => {
  const capture = async () => {
    const path = new URL(await page.url()).pathname
    console.log('capture page: ' + path)

    const base = `screenshots/${ browserName }`
    const outPath = `${ base }${ path.endsWith('/') ? path + 'index' : path }.png`
    await page.screenshot({
      path: outPath,
      fullPage: true,
    })
  }
  await page.goto('/')
  await capture()
})
