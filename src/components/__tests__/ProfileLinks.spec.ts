import { describe, expect, test } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/vue'

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
    const GitHubLink = screen.getByText('shinichiro-motoike')
    expect(GitHubLink).toHaveAttribute('href', 'https://github.com/shinichiro-motoike')
    const XLink = screen.getByText('moto_shin_')
    expect(XLink).toHaveAttribute('href', 'https://x.com/moto_shin_')
    const ZennLink = screen.getByText('motoshin')
    expect(ZennLink).toHaveAttribute('href', 'https://zenn.dev/motoshin')
    const QiitaLink = screen.getByText('shin_moto')
    expect(QiitaLink).toHaveAttribute('href', 'https://qiita.com/shin_moto')
  })
})
