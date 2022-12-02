import styles from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <img src="/ontrack-128.png" alt="Ontrack Logo" className={styles.logo}/>
                <a href="https://nemerosa.github.io/ontrack/">Ontrack</a>
            </footer>
        </>
    )
}
