
export const Menu = (props: any) => {
    const { onSectionChange, menuOpened, setMenuOpened } = props;
    return (
        <>
            <button
                onClick={() => { setMenuOpened(!menuOpened); console.log('clicked') }}
                className="z-20 fixed top-12 right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md  "
            >
                {/* <div className="flex  flex-col items-center justify-center"> */}
                <div
                    className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? 'rotate-45 translate-y-0.5' : ''}`}
                />
                <div
                    className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? ' hidden' : ''}`}
                />
                <div
                    className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? ' -rotate-45' : ''}`}
                />
                {/* </div> */}
            </button>

            <div
                className={`z-10 fixed top-0 right-0 bottom-0  bg-white transition-all overflow-hidden flex flex-col
                ${menuOpened ? 'w-80' : 'w-0'}`}
            >
                <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
                    <MenuButton label="Home" onClick={() => { onSectionChange(0); console.log('clicked0') }} />
                    <MenuButton label="Skills" onClick={() => { onSectionChange(0); console.log('clicked1') }} />
                    <MenuButton label="Contact me" onClick={() => { onSectionChange(0); console.log('clicked2') }} />
                    <MenuButton label="Project" onClick={() => { onSectionChange(0); console.log('clicked3') }} />
                </div>
            </div >

        </>
    )
}

const MenuButton = (props: any) => {
    const { label, onClick } = props
    return (
        <button
            onClick={onClick}
            className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors font-tilt"
        >
            {label}
        </button>
    )
}