import { describe, expect, test } from 'vitest'
import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/vue'

import ProfileLinks from '../ProfileLinks.vue'

describe('ProfileLinks', () => {
  test('プロフィールが正しく表示できていること', () => {
    render(ProfileLinks)

    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('X（Twitter）')).toBeInTheDocument()
    expect(screen.getByText('Zenn')).toBeInTheDocument()
    expect(screen.getByText('Qiita')).toBeInTheDocument()
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
