import { Canvas } from '@react-three/fiber'
import { Box } from 'ui'

export default function Home() {
	return (
		<div className="relative flex flex-col items-center justify-center w-screen h-screen">
			<Canvas className="w-full h-full">
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
			</Canvas>
		</div>
	)
}
