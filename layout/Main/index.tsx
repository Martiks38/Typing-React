import type { props } from 'types'

function Main({ children }: props) {
  return (
    <>
      <main className="main">
        <section className="container">{children}</section>
      </main>
    </>
  )
}

export default Main
