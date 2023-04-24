import classes from 'components/Main/Main.module.css'
import Image from 'next/image'
import Links from 'components/Links'
import Headline from 'components/Headline'

export default function Main(props) {
  return (
    <main className={classes.main}>
      <Headline>
       <code className={classes.code}>next/{props.page}.tsx</code>
      </Headline>

      <div className={classes.center}>
        <Image
          className={classes.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={classes.thirteen}>
          <Image
            src="/thirteen.svg"
            alt="13"
            width={40}
            height={31}
            priority
          />
        </div>
      </div>
      <Links />
    </main>
  )
}