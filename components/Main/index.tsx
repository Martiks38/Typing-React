import Image from 'next/image'

import background from 'public/background.gif'

function Main() {
  return (
    <>
      <main>
        {/* <Image alt="" src={background} layout="responsive" objectFit="cover" /> */}
      </main>
      <style jsx>
        {`
          main {
            background: var(--blue-dark);
            height: calc(100vh - 5rem);
          }
        `}
      </style>
    </>
  )
}

export default Main
