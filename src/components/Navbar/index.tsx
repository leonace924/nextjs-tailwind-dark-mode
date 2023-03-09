import { useMemo, useState } from "react"
import clsx from "clsx"
import Link from "next/link"
import { Icon, Logo, Button } from '@components/Common'
import useScroll from '@hooks/useScroll'
import styles from "./styles.module.css"

interface INavItemProp {
  uid: number
  label: string;
  subItems?: boolean
}

const navItems: INavItemProp[] = [
  {
    uid: 100,
    label: 'Products',
    subItems: true
  },
  { 
    uid: 101,
    label: 'Benefit' 
  },
  { 
    uid: 102,
    label: 'How it Works' 
  },
  { 
    uid: 103,
    label: 'Pricing' 
  },
  {
    uid: 104,
    label: 'Company',
    subItems: true
  }
]

const Navbar = () => {
  const scrollPosition = useScroll();
  const [isMenuOpen, setMenuOpen] = useState(false)
  
  const isStikcy = useMemo(() => {
    if (scrollPosition > 80) return true;
    return false;
  }, [scrollPosition])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <nav className={clsx(styles.navbar, isStikcy && styles["navbar--sticky"])}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__mobile}>
          <Link href="/">
            <Logo className="w-[108px] h-auto" />
          </Link>

          <button className={styles.menu__button} onClick={toggleMenu}>
            <div
              className={clsx(
                styles.menu__toggle,
                isMenuOpen && styles["menu__toggle--expand"]
              )}
            />
          </button>
        </div>

        <div className={styles.navbar__desktop}>
          <Link href="/">
            <Logo className="w-36 h-auto" />
          </Link>

          <div className={styles.nav__list}>
            {navItems?.map((item) => (
              <Link
                href={'/'} 
                key={item.uid} 
                className={styles.nav__item}
              >
                {item.label}
                {item?.subItems && 
                  <Icon 
                    type="chevron-down" 
                    className={styles.nav__itemIcon} 
                  />
                }
              </Link>
            ))}
          </div>

          <div className={styles.nav__cta}>
            <Link 
              href={'/'} 
              className={styles.nav__item}
            >
              Login
            </Link>
            <Button 
              className="px-6" 
            >
              Get Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
