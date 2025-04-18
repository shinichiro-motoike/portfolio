import { describe, expect, test } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { render } from '@testing-library/vue'

import ProfileLinks from '../ProfileLinks.vue'

describe('ProfileLinks', () => {
  test('プロフィール項目の各ラベルが正しく表示できていること', () => {
    const { getAllByRole } = render(ProfileLinks)
    const dtElements = getAllByRole('term')

    expect(dtElements[0].textContent).toBe('GitHub')
    expect(dtElements[1].textContent).toBe('X（Twitter）')
    expect(dtElements[2].textContent).toBe('Zenn')
    expect(dtElements[3].textContent).toBe('Qiita')
  })

  test('リンクが正しい URL を指していること', () => {
    const { getAllByRole } = render(ProfileLinks)
    const linkElements = getAllByRole('link')

    expect(linkElements[0].textContent).toBe('shinichiro-motoike')
    expect(linkElements[0]).toHaveAttribute('href', 'https://github.com/shinichiro-motoike')

    expect(linkElements[1].textContent).toBe('moto_shin_')
    expect(linkElements[1]).toHaveAttribute('href', 'https://x.com/moto_shin_')

    expect(linkElements[2].textContent).toBe('motoshin')
    expect(linkElements[2]).toHaveAttribute('href', 'https://zenn.dev/motoshin')

    expect(linkElements[3].textContent).toBe('shin_moto')
    expect(linkElements[3]).toHaveAttribute('href', 'https://qiita.com/shin_moto')
  })
})
