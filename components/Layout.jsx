export default function Layout(props) {
    return (
        <section className={`bg-gradient-to-r from-[#13547A] to-[#639993] h-screen w-screen flex justify-center items-center
        p-20`}>
            <div className="bg-white h-full w-full flex justify-center items-center rounded-3xl">
                {props.children}
            </div>
        </section>
    )
}