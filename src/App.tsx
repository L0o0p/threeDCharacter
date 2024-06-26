
import './App.css'
// import ThreeDAvatar from './ThreeDAvatar'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import XBot from './XBot'
import { useControls } from 'leva'

function App() {
  // 创建一个控制面板来选择不同的动画
  const { animation } = useControls({
    animation: {
      value: 'Typing',
      options: ['Typing', 'Praying', 'FallAnimation', 'Standing']
    }
  })

  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [0, 2, 4],
          fov: 50
        }}
      >
        {/* 环境 */}
        {/* 背景色 */}
        <color attach={'background'} args={['#ececec']} />
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <ContactShadows
          opacity={0.42}
          blur={1}
          scale={10}
          far={10}
          resolution={256}
          color={'#000000'}
        />

        <XBot animation={animation} />

        {/* 这是一个平面 */}
        <mesh position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
          <planeGeometry
            attach={'geometry'}
            args={[3, 3, 3]}
          />
          <meshStandardMaterial attach={'material'} color={'white'} />
        </mesh>

        {/* 只有特定条件渲染的内容 */}
        {animation === 'Typing' && (
          /* 新建一个立方体 */
          < mesh position={[0, 0.2, 0]} castShadow receiveShadow>
            <boxGeometry
              attach={'geometry'}
              args={[0.4, 0.4, 0.4]}
            />
            <meshStandardMaterial attach={'material'} color={'white'} />
          </mesh >
        )}

      </Canvas >
    </>
  )
}

export default App
