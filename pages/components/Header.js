import Link from "next/link"
import classes from "./Header.module.css"

export default function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.anchor}>
        Index
      </Link>
      <Link href="/about" className={classes.anchor}>
        About
      </Link>
    </header>
  )
}