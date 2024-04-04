
import './App.css'
// import ThreeDAvatar from './ThreeDAvatar'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import XBot from './XBot'

function App() {


  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [0, 20, 3],
          fov: 30
        }}
      >
        <color attach={'background'} args={['#ececec']} />
        <ambientLight intensity={0.5} />
        <OrbitControls />

        <XBot />
      </Canvas >
    </>
  )
}

export default App
