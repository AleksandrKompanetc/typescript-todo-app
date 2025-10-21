describe('addItemForm', () => {
  it('base example, visually looks correct', async () => {
    // API from jest-pappeteer
    await page.goto('http://localhost9009/iframe.html');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  })
})