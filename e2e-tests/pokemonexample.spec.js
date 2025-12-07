const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('previous and next buttons are visible', async ({ page }) => {
    await page.goto('http://localhost:8080/pokemon/ivysaur')
    await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()
  })
})