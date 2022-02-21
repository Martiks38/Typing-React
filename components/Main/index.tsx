function Main({ children }) {
  return (
    <>
      <main>{children}</main>
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
