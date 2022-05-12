import { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import error from 'public/error.webp'
import { useTranslations } from 'hooks/useTranslations'

function Custom404() {
  const router = useRouter()
  const { errorPage } = useTranslations()

  useEffect(() => {
    const $container = document.querySelector('.container')

    $container?.classList.add('container__center')

    return () => $container?.classList.remove('container__center')
  }, [])

  let route = `https://www.typingso${router.asPath}`

  return (
    <>
      <article className="boardError">
        <div className="boardError__img">
          <Image
            src={error}
            alt="Page not found"
            width={179}
            height={179}
            objectPosition="0px 12px"
          />
        </div>
        <div className="boardError__msg">
          <h1 className="msg__title">Error 404</h1>
          <p className="msg__text">
            {errorPage} {route}
          </p>
        </div>
      </article>
    </>
  )
}

export default Custom404
