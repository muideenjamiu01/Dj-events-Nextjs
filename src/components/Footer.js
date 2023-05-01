import Link from "next/link";
import styles from "../styles/Footer.module.css"

export default function Footer() {
  return (
    <footer  className={styles.Footer}>
      <p>Copyright &copy; Dj Events 2023</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer >
  );
}
