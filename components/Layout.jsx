export default function Layout(props) {
    return (
        <section className={`bg-green-500 h-screen w-screen flex justify-center items-center
        p-20`}>
            <div className="bg-slate-500 h-full w-full flex justify-center items-center rounded-3xl">
                {props.children}
            </div>
        </section>
    )
}