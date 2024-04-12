import { ContactShadows } from "@react-three/drei"
import RoomScene from "../../RoomScene"
import XBot from "../../XBot"
import { useControls } from 'leva'
import { motion } from 'framer-motion-3d'

export const ThreeD = (props: any) => {
    // 创建一个控制面板来选择不同的动画
    const { animation } = useControls({
        animation: {
            value: 'Typing',
            options: ['Typing', 'Praying', 'FallAnimation', 'Standing']
        }
    })
    const { section } = props
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
            <motion.group
                rotation={[0, (Math.PI / 2) + (Math.PI / 6), 0]}
                position={[0.5, 0 - 0.5, 0]}
                scale={[0.9, 0.9, 0.9]}
            >
                <RoomScene section={section} />
            </motion.group>

            {/* <XBot animation={animation} /> */}
        </>

    )
}


