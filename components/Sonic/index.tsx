import Image from 'next/image'

function Sonic({ img }) {
  return (
    <>
      <Image
        src={img}
        alt="play"
        layout="responsive"
        objectFit="contain"
        priority
      />
    </>
  )
}

export default Sonic
