function Loader() {
  return (
    <svg viewBox="0 0 100 100" xmlSpace="preserve">
      <circle fill="#222" cx={10} cy={50} r={10}>
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin={0.1}
        />
      </circle>
      <circle fill="#222" cx={50} cy={50} r={10}>
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin={0.2}
        />
      </circle>
      <circle fill="#222" cx={90} cy={50} r={10}>
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
