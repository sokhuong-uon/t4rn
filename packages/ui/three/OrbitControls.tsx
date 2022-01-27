// this is just an example to creat orbitControl without @react-three/drei
import { OrbitControls } from '@immerse/core'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

const orbitControls = () => {
	const { camera, gl } = useThree()
	useEffect(() => {
		const controls = new OrbitControls(camera, gl.domElement)

		controls.minDistance = 3
		controls.maxDistance = 20
		return () => {
			controls.dispose()
		}
	}, [camera, gl])
	return null
}
export { orbitControls }
