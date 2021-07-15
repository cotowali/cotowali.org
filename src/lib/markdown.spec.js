import { process } from './markdown'

test('process', async () => {
  const res = await process('contents/guides/getting-started.md')
  expect(res.metadata.title).toBe('Getting Started')
  expect(res.content).toContain('<p>')
})
