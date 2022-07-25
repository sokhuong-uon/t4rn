import { EffectComposer, Bloom, Noise, Grid } from '@react-three/postprocessing'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export const EffectScene = () => {
	return (
		<Canvas className="w-screen h-screen" gl={{ alpha: false }}>
			<OrbitControls></OrbitControls>
			<mesh>
				<torusBufferGeometry></torusBufferGeometry>
				<meshStandardMaterial></meshStandardMaterial>
			</mesh>

			<spotLight></spotLight>
			<ambientLight></ambientLight>

			<EffectComposer>
				<Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
				<Noise opacity={0.02} />
				<Grid scale={0.8}></Grid>
			</EffectComposer>
		</Canvas>
	)
}
