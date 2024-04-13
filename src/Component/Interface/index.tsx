import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import { useRef } from "react"

const Section = (props: any) => {
    const { children } = props
    return (
        <motion.section
            className={
                'h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center'
            }>{children}
        </motion.section>
    )
}


export const Interface = () => {
    return (
        <div
            className={"flex flex-col items-center w-screen"}>
            <div
            >
                <HomeSection />
                <SkillsSection />
                <ContactMeSection />
                <ProjectSection />
            </div>

        </div>
    )
}

const HomeSection = () => {
    return (
        <Section>
            {/* 标题 */}
            <h1 className='text-6xl font-extrabold leading-snug font-Nunito'>
                Hi, I' m
                <br />
                <span className="bg-white px-1 italic font-Nunito">Loop_Shen</span>
            </h1>
            {/* 简介 */}
            <motion.p className="text-lg font-tilt text-gray-600 mt-4"
                initial={{
                    opacity: 0,
                    y: 15
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    // delay: 1.5,
                }}
            >

                I watch YouTube video to boost my mind
                <br />
                upgrating development Skills
            </motion.p>
            {/* 按钮 */}
            <motion.button
                className="bg-indigo-600 text-white py-4 px-8 round-lg font-bold text-lg mt-16 font-tilt"
                initial={{
                    opacity: 0,
                    y: 15
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 2,
                }}
            >
                Contact me
            </motion.button>
        </Section>)
}

const SkillsSection = () => {
    // 技能列表
    const skills = [
        {
            title: 'TypeScript '
            , level: 30,
        },
        {
            title: 'Treejs / React Three Fiber'
            , level: 50,
        },
        {
            title: '3d Modeling'
            , level: 20,
        },
        {
            title: 'AI Prompt Engineer'
            , level: 20,
        },
        {
            title: 'SD-WebUI / ComfyUI'
            , level: 20,
        },
    ]
    // 语言列表
    const lngs =
        [
            {
                title: '🇭🇰 Cantonese'
                , level: 80,
            },
            {
                title: '🇨🇳 Chinese'
                , level: 90,
            },
            {
                title: '🇺🇸 English'
                , level: 80,
            },
        ]

    return (
        <Section>
            <motion.div whileInView={'visible'}>
                {/* 技能树 */}
                <h2 className="text-5xl font-bold font-Nunito">Skills </h2>
                <div className="mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3 className="text-xl font-bold text-gray-800"
                                initial={{
                                    opacity: 0,
                                }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            delay: 1 + index * 0.2,
                                        }
                                    }

                                }}
                            >
                                {skill.title}
                            </motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div
                                    className="h-full bg-indigo-500 rounded-full"
                                    style={{ width: `${skill.level}%` }}//百分比给宽度

                                    initial={{
                                        scaleX: 0,
                                        originX: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            scaleX: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            }
                                        },
                                    }}
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* 语言书 */}
                <h2 className="text-5xl font-bold font-Nunito">Languges </h2>
                <div className="mt-8 space-y-4">
                    {lngs.map(
                        (lng, index) => (
                            <div className="w-64" key={index}>
                                <motion.h3 className="text-xl font-bold text-gray-800"
                                    initial={{
                                        opacity: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            }
                                        }

                                    }}
                                >{lng.title}</motion.h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <motion.div
                                        className="h-full bg-indigo-500 rounded-full"
                                        style={{ width: `${lng.level}%` }}//百分比给宽度

                                        initial={{
                                            scaleX: 0,
                                            originX: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                scaleX: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 2 + index * 0.2,
                                                }
                                            },
                                        }}
                                    ></motion.div>
                                </div>
                            </div>
                        )
                    )
                    }
                </div>
            </motion.div>
        </Section>
    )
}

const ContactMeSection = () => {
    return (<Section>
        <h2 className='text-5xl font-bold font-Nunito'>Contact Me</h2>
        {/* 表框 */}
        <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full font-tilt">
            {/* 输入名字 */}
            <form action="">
                <label htmlFor="name" className="font-medium text-gray-900 block mb-1 ">Name</label>
            </form>
            <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded -md bordeer-0 text-gray-900 shadow-sm"
            />
            <br />
            <br />

            {/* 输入邮箱 */}
            <form action="">
                <label htmlFor="email" className="font-medium text-gray-900 block mb-1">E-Mail</label>
            </form>
            <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded -md bordeer-0 text-gray-900 shadow-sm"
            />
            <br />
            <br />
            {/* 输入信息 */}
            <form action="">
                <label htmlFor="massage" className="font-medium text-gray-900 block mb-1">Massage</label>
            </form>
            <input
                type="text"
                name="massage"
                id="massage"
                className="block w-full rounded -md bordeer-0 text-gray-900 shadow-sm"
            />
            <br />
            <br />
            {/* 提交按钮 */}
            <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold">Submit</button>

        </div>
    </Section>
    )

}

const ProjectSection = () => {
    return (<Section>
        <h2 className='text-5xl font-bold font-Nunito '>My Project</h2>
    </Section>)
}


