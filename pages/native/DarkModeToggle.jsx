import { useEffect } from 'react'
import styles from '../../styles/DarkModeToggle.module.css'

export default function DarkModeToggle() {

    useEffect(() => {
        if (localStorage.getItem("dark")) {
            document.body.classList.add("dark")
        }
    }, [])
    
    const handleToggled = () => {
        document.body.classList.toggle("dark")
        localStorage.setItem(
            "dark",
            document.body.className
        )
    }

    return (
        <div className='div-toggle'>
            <label htmlFor="toggle">
                <input id="toggle" type="checkbox" onClick={() => handleToggled()} />
                <span className="switch">
                    <span className="handle"></span>
                </span>
            </label>

            <style global jsx>
                {`
                    * {
                        box-sizing: border-box;
                    }

                    :root{
                        --color-dark: #21213f;
                        --color-light: #ffffff;
                    }
                    
                    body{
                        background: var(--color-light);
                        transition: 0.3s;
                        min-height: 100vh
                    }

                    body.dark {
                        background: var(--color-dark);
                    }

                    input{
                        display: none
                    }

                    .div-toggle{
                        display: grid;
                        margin: auto;
                        min-height: 100vh;
                    }

                    .div-toggle label{
                        display: grid;
                        align-items: center;
                        justify-items: center;
                    }

                    .switch{
                        overflow: hidden;
                        display: flex;
                        width: 60px;
                        height: 30px;
                        padding: 3px;
                        border-radius: 15px;
                        background: var(--color-dark);
                        cursor: pointer;
                    }

                    .handle{
                        position: relative;
                        width: 24px;
                        height: 24px;
                        transition: 0.3s;
                    }

                    .handle::before, .handle::after{
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%
                    }

                    .handle::before{
                        background: var(--color-light);
                    }

                    .handle::after{
                        background: var(--color-light);
                        opacity: 0;
                        translate: -7px -7px;
                    }

                    body.dark .switch{
                        background: var(--color-light)
                    }

                    body.dark .handle {
                        translate: 30px 0;
                    }

                    body.dark .handle::after{
                        opacity: 1;
                    }

                    body.dark .handle::before{
                        background: var(--color-dark)
                    }
                `}
            </style>
        </div>
    )
}