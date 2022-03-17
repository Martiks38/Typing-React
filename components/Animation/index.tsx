import Link from 'next/link'
import { useTranslations } from 'hooks/useTranslations'
import Sonic from 'components/Sonic'

function Animation() {
  const { home } = useTranslations()
  return (
    <figure className="figure">
      <div className="imageSonic imageSonic_animationHome imageSonic_s">
        <Sonic img="/running.webp" />
      </div>
      <figcaption className="figure__figcaption">
        <Link href="/practice">
          <a>{home.play}</a>
        </Link>
      </figcaption>
    </figure>
  )
}

export default Animation
