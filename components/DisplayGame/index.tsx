import { useState } from 'react'
import Sonic from 'components/Sonic'
import Text from 'components/Text'

function DisplayGame({ text }) {
  const [isPlay, setIsPlay] = useState(false)
  const [velocity, setVelocity] = useState(0)

  return (
    <div className="container__game">
      <div className="container__fondo">
        <div
          className={
            !isPlay
              ? 'imageSonic imageSonic_animationGame'
              : 'imageSonic imageSonic_s imageSonic_animationGame imageSonic_animationGame_inGame'
          }
        >
          <Sonic
            img={
              !isPlay
                ? '/prepared.webp'
                : velocity < 40
                ? '/walking.webp'
                : velocity < 80
                ? '/running.webp'
                : '/goldenSonic.webp'
            }
          />
        </div>
      </div>
      <Text
        text={text}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        setVelocity={setVelocity}
      />
    </div>
  )
}

export default DisplayGame
