import { test } from '@playwright/test';

test('Acessing the amazon website', async ({ page }) =>{
  await page.goto('https://www.amazon.com')

  const buttonZipCode = page.getByText('Deliver to');
  await buttonZipCode.hover();
  await buttonZipCode.click();

  const zipCodeInput = page.getByLabel('or enter a US zip code');
  await zipCodeInput.fill('11001');
  await page.getByText('Apply').click();

  await page.reload({ waitUntil: 'domcontentloaded' });

  const searchInput = page.getByLabel('Search Amazon');
  await searchInput.fill('garlic press');
  await searchInput.press('Enter');

  const productCard = page.getByRole('heading', { name: 'Garlic Press'});
  await productCard.click();

  await page.close();
})
