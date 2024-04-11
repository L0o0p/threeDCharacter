import { ContactShadows } from "@react-three/drei"
// import RoomScene from "../../RoomScene"
// import XBot from "../../XBot"
// import { useControls } from 'leva'


export const ThreeD = () => {
    // 创建一个控制面板来选择不同的动画
    // const { animation } = useControls({
    //     animation: {
    //         value: 'Typing',
    //         options: ['Typing', 'Praying', 'FallAnimation', 'Standing']
    //     }
    // })
    return (

        <>
            <ambientLight intensity={4} />
            {/* <OrbitControls /> */}
            <ContactShadows
                opacity={0.42}
                blur={1}
                scale={10}
                far={10}
                resolution={256}
                color={'#000000'}
            />
            {/* <RoomScene />
            <XBot animation={animation} /> */}

            {/* 这是一个平面 */}
            <mesh position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
                <planeGeometry
                    attach={'geometry'}
                    args={[3, 3, 3]}
                />
                <meshStandardMaterial attach={'material'} color={'white'} />
            </mesh>


            {/* 新建一个立方体 */}
            < mesh position={[0, 0.2, 0]} castShadow receiveShadow>
                <boxGeometry
                    attach={'geometry'}
                    args={[0.4, 0.4, 0.4]}
                />
                <meshStandardMaterial attach={'material'} color={'normal'} />
            </mesh >
        </>

    )
}


