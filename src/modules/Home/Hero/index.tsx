import Image from 'next/image'
import { Button } from '@components/Common'
import useDarkMode from "@hooks/useDarkMode"
import styles from './styles.module.css'

const Hero = () => {
  const { toggleTheme } = useDarkMode();

  return (
    <section className={styles.hero}>
      <div className="absolute top-0 right-0 z-10 translate-x-1/2 -translate-y-1/2">
        <div className={styles.ellipsis} />
      </div>

      <div className="absolute bottom-0 left-0 z-10 -translate-x-1/2 translate-y-1/2">
        <div className={styles.ellipsis} />
      </div>

      <div className={styles.hero__container}>
        <div className={styles.hero__contentWrapper}>
          <h1 className={styles.hero__heading}>
            All your business expenses in one place.
          </h1>

          <p className={styles.hero__subheading}>
            Your one-stop finance empower platform. <br />
            Manage all your business expenses with our supafast app.
          </p>

          <div className={styles.hero__actions}>
            <Button onClick={toggleTheme}>Get a Free Demo</Button>
            <Button variant="minimal">See Pricing</Button>
          </div>
        </div>

        <div className={styles.hero__imageWrapper}>
          <div className={styles.hero__image}>
            <Image 
              src="/images/img-dashboard.jpg"
              alt="dashboard" 
              fill 
              style={{objectFit: 'cover', objectPosition: 'top'}}
              priority
              // width={640}
              // height={455}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;