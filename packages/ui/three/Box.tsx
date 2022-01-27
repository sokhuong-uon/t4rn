import { Mesh } from 'three'
import { useRef, useState } from 'react'

export const Box = (props: JSX.IntrinsicElements['mesh']) => {
	const mesh = useRef<Mesh>(null!)

	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)

	// useFrame((state, delta) => (mesh.current.rotation.x += 0.003))

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={event => setActive(!active)}
			onPointerOver={event => setHover(true)}
			onPointerOut={event => setHover(false)}
		>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}
