import { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import error from 'public/error.webp'

function Custom404() {
  const router = useRouter()

  useEffect(() => {
    const $container = document.querySelector('.container')

    $container?.classList.add('container__center')

    return () => $container?.classList.remove('container__center')
  }, [])

  let route = `http://localhost:3000${router.asPath}`

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
            Sonic no puede viajar a la ubicación {route}
          </p>
        </div>
      </article>
    </>
  )
}

export default Custom404
