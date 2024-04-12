
import './App.css'
// import ThreeDAvatar from './ThreeDAvatar'
import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Interface } from './Component/Interface'
import { ThreeD } from './Component/ThreeD'
import { ScrollManager } from './Component/ScrollManager'
import { useState } from 'react'
import { Menu } from './Component/Menu'
import { MotionConfig } from 'framer-motion'

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <MotionConfig
        transition={{
          type: 'spring',
          mass: 5,
          stiffness: 500, // 这是一个数字越大，运动越慢
          damping: 50,
          restDelta: 0.0001,
        }}>
        <Canvas
          shadows
          camera={{
            position: [0, 2, 4],
            fov: 50
          }}
        >
          {/* 背景色 */}
          <color attach={'background'} args={['#ececec']} />
          <ScrollControls pages={4} damping={0.15}>
            {/* <ScrollManager section={section} onSectionChange={setSection} > */}
            <Scroll html>
              <Interface />
            </Scroll>
            {/* </ScrollManager> */}
            <Scroll>
              <ThreeD section={section} />
            </Scroll>
          </ScrollControls>
        </Canvas >
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
    </>
  )
}

export default App
