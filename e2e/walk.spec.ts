import { test, Page, BrowserContext, expect } from '@playwright/test'

async function externalLinksAlive(page: Page, context: BrowserContext) {
  const linkElements = await page.$$('a')
  for (const el of linkElements) {
    const href = await el.getAttribute('href')
    if (href === null || href.startsWith('/')) {
      continue
    }
    const newPage = await context.newPage()
    const res = await newPage.goto(href)
    const ok = res && res.ok() || false
    console.log(`link ${ ok ? 'ok' : 'ng' }: ${ href }`)
    await expect(ok, { message: `Broken external link: ${ href }` }).toBe(true)
    await newPage.close()
  }
}

test('screenshot', async ({ page, browserName, context }) => {
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
  await externalLinksAlive(page, context)
  await capture()
})
