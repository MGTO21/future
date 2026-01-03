import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Preload } from '@react-three/drei'

const FloatingSphere = () => {
    const mesh = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        mesh.current.position.y = Math.sin(time) * 0.2
        mesh.current.rotation.x = time * 0.5
        mesh.current.rotation.y = time * 0.2
    })

    return (
        <Sphere ref={mesh} visible args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
                color="#7b2ff7"
                attach="material"
                distort={0.4}
                speed={2}
            />
        </Sphere>
    )
}

const SphereCanvas = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Suspense fallback={null}>
                <FloatingSphere />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default SphereCanvas
