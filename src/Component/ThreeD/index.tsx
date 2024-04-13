// import { ContactShadows } from "@react-three/drei"
import RoomScene from "../../RoomScene"
import XBot from "../../XBot"
import { Leva } from 'leva'
import { motion } from 'framer-motion-3d'
import { useFrame, useThree } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import { animate, useMotionValue } from "framer-motion"
import { useEffect } from "react"
import { framerMotionConfig } from "../framerMotionConfig"

interface Props {
    section: number
    menuOpened: boolean
}

export const ThreeD = (props: Props) => {
    // 创建一个控制面板来选择不同的动画
    // const { animation } = useControls({
    //     animation: {
    //         value: 'FallAnimation',
    //         options: ['Typing', 'Praying', 'FallAnimation', 'Standing']
    //     }
    // })
    const { section } = props
    const { menuOpened } = props
    const { viewport } = useThree()
    const cameraPositionX = useMotionValue(null);
    const cameraLookAtX = useMotionValue(null);

    useEffect(() => {
        animate(cameraPositionX, menuOpened ? -5 : 0), { //[0 + 20, 0 - 0.5, -4]
            ...framerMotionConfig
        }
        animate(cameraLookAtX, menuOpened ? 1 : 0), {// [0, 1, 1]
            ...framerMotionConfig
        }

    }, [menuOpened])

    useFrame((state) => {
        state.camera.position.x = cameraPositionX.get();
        state.camera.lookAt(cameraLookAtX.get(), 0, 0)
    })

    return (
        <>

            <ambientLight intensity={3} />
            {/* <OrbitControls /> */}
            {/* <ContactShadows
                opacity={0.42}
                blur={1}
                scale={10}
                far={10}
                resolution={256}
                color={'#000000'}
            /> */}

            {/* 房间 */}
            <motion.group
                rotation={[0, (Math.PI / 2) + (Math.PI / 6), 0]}
                position={[0.5, 0 - 0.5, 0]}
                scale={[0.9, 0.9, 0.9]}
            >
                <RoomScene section={section} />
            </motion.group>

            <motion.group
                animate={{
                    z: section === 1 ? 8 : -8,
                    y: section === 1 ? -viewport.height : -1.5

                }}
            >
                {/* 浮动的球：red */}
                <Float>
                    <mesh
                        position={[0 - 1, 0, -13]}
                        scale={[1, 1, 1]}
                    >
                        <sphereGeometry />
                        <MeshDistortMaterial
                            opacity={0.7}
                            transparent
                            distort={0.4}
                            speed={4}
                            color={'red'}
                        />
                    </mesh>
                </Float >
                {/* 浮动的球：yellow */}
                <Float>
                    <mesh
                        position={[0 - 1, 0, -13]}
                        scale={[1, 1, 1]}
                    >
                        <sphereGeometry />
                        <MeshDistortMaterial
                            opacity={0.8}
                            transparent
                            distort={1}
                            speed={4}
                            color={'yellow'}
                        />
                    </mesh>
                </Float >
                {/* 活动的人 */}
                <motion.group
                    rotation={[0, 0, 0]}
                    position={[0 - 0.5, 0 - 2, -8]}
                    scale={[1, 1, 1]}
                >
                    <XBot animation={section === 0 ? 'FallAnimation' : 'Praying'} />
                </motion.group>
            </motion.group>
            <Leva hidden />
        </>

    )
}


