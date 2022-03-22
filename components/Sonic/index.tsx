import Image from 'next/image'

function Sonic({ img }) {
  return (
    <>
      <Image
        src={img}
        alt="play"
        width={80}
        height={80}
        layout="responsive"
        objectFit="contain"
        priority
      />
    </>
  )
}

export default Sonic
