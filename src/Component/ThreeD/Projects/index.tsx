
import { useThree } from "@react-three/fiber"
import { Image } from "@react-three/drei"
import { motion } from "framer-motion-3d"

const projects = [
    {
        title: 'One',
        url: 'https://www.bilibili.com/video/BV1mJ4m1G7T1?spm_id_from=333.1007.tianma.2-2-4.click',
        image: '/image/020.png',
        description: 'a bilibili video'
    },
    {
        title: 'Two',
        url: 'https://www.bilibili.com/video/BV1mJ4m1G7T1?spm_id_from=333.1007.tianma.2-2-4.click',
        image: '/image/021.png',
        description: 'a bilibili video'
    },
    {
        title: 'Three',
        url: 'https://www.bilibili.com/video/BV1mJ4m1G7T1?spm_id_from=333.1007.tianma.2-2-4.click',
        image: '/image/008.png',
        description: 'a bilibili video'
    },
    {
        title: 'Four',
        url: 'https://www.bilibili.com/video/BV1mJ4m1G7T1?spm_id_from=333.1007.tianma.2-2-4.click',
        image: '/image/045.png',
        description: 'a bilibili video'
    },
    {
        title: 'Five',
        url: 'https://www.bilibili.com/video/BV1mJ4m1G7T1?spm_id_from=333.1007.tianma.2-2-4.click',
        image: '/image/068.png',
        description: 'a bilibili video'
    }
]

const Project = (props: any) => {
    const { project } = props

    return (
        <group {...props}>
            {/* // 有一个平面 */}
            <mesh
                position-z={-0.001}
                position-y={-1} // position of the image
            >
                <planeGeometry attach="geometry" args={[1.5, 1.5]} />
                <meshBasicMaterial attach="material" color="white" transparent opacity={.4} />
            </mesh>
            <Image
                scale={[1.2, 1.2]} // size of the image
                url={project.image} // provide the path to your image
                toneMapped={false} // set to false if you want to use the default tone mapping
                position-y={-1} // position of the image
            />
        </group>
    )
}

export const Projects = () => {
    const { viewport } = useThree()
    return (
        <group position-y={-viewport.height * 2 + 1}>
            {projects.map((project, index) => (
                <motion.group
                    key={'project_' + index}
                    //一字排开
                    position={[-index * -1.5, 0, 0]}
                >
                    <Project project={project} />
                </motion.group>
            ))}
        </group>
    )
}