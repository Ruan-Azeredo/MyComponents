import { useEffect } from 'react'
import styles from '../../styles/DarkModeToggle.module.css'

export default function DarkModeToggle() {

    const handleToggled = () => {
        document.body.classList.toggle("dark")
        localStorage.setItem(
            "dark",
            document.body.className
        )
    }

    useEffect(() => {
        if (localStorage.getItem("dark")) {
            document.body.classList.add("dark")
        }
    }, [])

    return (
        <div>
            <div className={styles.oi}>oiiiiii</div>
        </div>
    )
}