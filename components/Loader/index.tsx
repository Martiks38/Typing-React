function Loader() {
  return (
    <svg viewBox="0 0 100 100" xmlSpace="preserve">
      <circle fill="#222" cx={6} cy={50} r={5}>
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin={0.1}
        />
      </circle>
      <circle fill="#222" cx={26} cy={50} r={5}>
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin={0.2}
        />
      </circle>
      <circle fill="#222" cx={46} cy={50} r={5}>
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin={0.3}
        />
      </circle>
    </svg>
  )
}
export default Loader
