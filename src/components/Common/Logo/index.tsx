import clsx from 'clsx'
import styles from './styles.module.css';

interface ILogoProps {
  className?: string
}

export const Logo = ({ className }: ILogoProps) => {
  return (
    <svg
      className={clsx(styles.logo, className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 144 32"
      width="144"
      height="32"
      fill="none"
    >
      <title>Spend.In</title>
      <g clipPath="url(#clip0_325_18313)">
        <path
          d="M19.5386 23.4366C19.3905 23.5849 19.2145 23.7025 19.0208 23.7828C18.8272 23.863 18.6196 23.9043 18.4099 23.9043C18.2003 23.9043 17.9927 23.863 17.7991 23.7828C17.6054 23.7025 17.4294 23.5849 17.2812 23.4366L8.09927 14.2561C6.77497 12.9048 6.03747 11.0854 6.04703 9.19342C6.05658 7.30139 6.81243 5.48959 8.1503 4.15171C9.48818 2.81383 11.3 2.05799 13.192 2.04843C15.084 2.03888 16.9034 2.77638 18.2547 4.10067L24.0578 9.90378C24.3564 10.2039 24.5235 10.6103 24.5224 11.0337C24.5214 11.457 24.3521 11.8626 24.052 12.1612C23.7519 12.4598 23.3455 12.6269 22.9221 12.6258C22.4988 12.6247 22.0932 12.4555 21.7946 12.1554L15.9988 6.35228C15.25 5.60352 14.2345 5.18287 13.1755 5.18287C12.1166 5.18287 11.1011 5.60352 10.3523 6.35228C9.60357 7.10104 9.18291 8.11658 9.18291 9.17549C9.18291 10.2344 9.60357 11.2499 10.3523 11.9987L19.5343 21.1807C19.8339 21.4793 20.0026 21.8847 20.0034 22.3078C20.0042 22.7308 19.8371 23.1368 19.5386 23.4366Z"
          fill="currentColor"
        />
        <path
          d="M24.0012 27.8992C22.6533 29.2436 20.8273 29.9987 18.9235 29.9987C17.0197 29.9987 15.1936 29.2436 13.8458 27.8992L8.04992 22.0961C7.88908 21.951 7.75947 21.7747 7.66897 21.5779C7.57847 21.3811 7.52898 21.1679 7.52352 20.9514C7.51805 20.7348 7.55673 20.5194 7.63719 20.3183C7.71765 20.1172 7.8382 19.9346 7.99152 19.7816C8.14483 19.6286 8.32769 19.5084 8.52895 19.4283C8.73022 19.3482 8.94567 19.31 9.1622 19.3158C9.37873 19.3217 9.59179 19.3716 9.78841 19.4625C9.98504 19.5534 10.1611 19.6833 10.3059 19.8445L16.1017 25.6476C16.8516 26.3875 17.8638 26.8008 18.9172 26.7972C19.9707 26.7937 20.98 26.3737 21.725 25.6287C22.4699 24.8838 22.89 23.8745 22.8935 22.821C22.897 21.7675 22.4837 20.7554 21.7438 20.0055L12.5618 10.8192C12.2625 10.5198 12.0943 10.1138 12.0943 9.69047C12.0943 9.26712 12.2625 8.86111 12.5618 8.56176C12.8612 8.26241 13.2672 8.09424 13.6905 8.09424C14.1139 8.09424 14.5199 8.26241 14.8192 8.56176L24.0012 17.7437C25.346 19.0914 26.1013 20.9176 26.1013 22.8215C26.1013 24.7253 25.346 26.5515 24.0012 27.8992Z"
          fill="currentColor"
        />
      </g>
      <path
        d="M53.416 24.336C52.12 24.336 50.976 24.104 49.984 23.64C48.992 23.176 48.216 22.512 47.656 21.648C47.096 20.784 46.816 19.744 46.816 18.528V17.856H49.936V18.528C49.936 19.536 50.248 20.296 50.872 20.808C51.496 21.304 52.344 21.552 53.416 21.552C54.504 21.552 55.312 21.336 55.84 20.904C56.384 20.472 56.656 19.92 56.656 19.248C56.656 18.784 56.52 18.408 56.248 18.12C55.992 17.832 55.608 17.6 55.096 17.424C54.6 17.232 53.992 17.056 53.272 16.896L52.72 16.776C51.568 16.52 50.576 16.2 49.744 15.816C48.928 15.416 48.296 14.896 47.848 14.256C47.416 13.616 47.2 12.784 47.2 11.76C47.2 10.736 47.44 9.864 47.92 9.144C48.416 8.408 49.104 7.848 49.984 7.464C50.88 7.064 51.928 6.864 53.128 6.864C54.328 6.864 55.392 7.072 56.32 7.488C57.264 7.888 58 8.496 58.528 9.312C59.072 10.112 59.344 11.12 59.344 12.336V13.056H56.224V12.336C56.224 11.696 56.096 11.184 55.84 10.8C55.6 10.4 55.248 10.112 54.784 9.936C54.32 9.744 53.768 9.648 53.128 9.648C52.168 9.648 51.456 9.832 50.992 10.2C50.544 10.552 50.32 11.04 50.32 11.664C50.32 12.08 50.424 12.432 50.632 12.72C50.856 13.008 51.184 13.248 51.616 13.44C52.048 13.632 52.6 13.8 53.272 13.944L53.824 14.064C55.024 14.32 56.064 14.648 56.944 15.048C57.84 15.448 58.536 15.976 59.032 16.632C59.528 17.288 59.776 18.128 59.776 19.152C59.776 20.176 59.512 21.08 58.984 21.864C58.472 22.632 57.736 23.24 56.776 23.688C55.832 24.12 54.712 24.336 53.416 24.336ZM61.5147 28.8V12.096H64.4907V13.536H64.9227C65.1947 13.072 65.6187 12.664 66.1947 12.312C66.7707 11.944 67.5947 11.76 68.6667 11.76C69.6267 11.76 70.5147 12 71.3307 12.48C72.1467 12.944 72.8027 13.632 73.2987 14.544C73.7947 15.456 74.0427 16.56 74.0427 17.856V18.24C74.0427 19.536 73.7947 20.64 73.2987 21.552C72.8027 22.464 72.1467 23.16 71.3307 23.64C70.5147 24.104 69.6267 24.336 68.6667 24.336C67.9467 24.336 67.3387 24.248 66.8427 24.072C66.3627 23.912 65.9707 23.704 65.6667 23.448C65.3787 23.176 65.1467 22.904 64.9707 22.632H64.5387V28.8H61.5147ZM67.7547 21.696C68.6987 21.696 69.4747 21.4 70.0827 20.808C70.7067 20.2 71.0187 19.32 71.0187 18.168V17.928C71.0187 16.776 70.7067 15.904 70.0827 15.312C69.4587 14.704 68.6827 14.4 67.7547 14.4C66.8267 14.4 66.0507 14.704 65.4267 15.312C64.8027 15.904 64.4907 16.776 64.4907 17.928V18.168C64.4907 19.32 64.8027 20.2 65.4267 20.808C66.0507 21.4 66.8267 21.696 67.7547 21.696ZM81.5234 24.336C80.3394 24.336 79.2914 24.088 78.3794 23.592C77.4834 23.08 76.7794 22.368 76.2674 21.456C75.7714 20.528 75.5234 19.44 75.5234 18.192V17.904C75.5234 16.656 75.7714 15.576 76.2674 14.664C76.7634 13.736 77.4594 13.024 78.3554 12.528C79.2514 12.016 80.2914 11.76 81.4754 11.76C82.6434 11.76 83.6594 12.024 84.5234 12.552C85.3874 13.064 86.0594 13.784 86.5394 14.712C87.0194 15.624 87.2594 16.688 87.2594 17.904V18.936H78.5954C78.6274 19.752 78.9314 20.416 79.5074 20.928C80.0834 21.44 80.7874 21.696 81.6194 21.696C82.4674 21.696 83.0914 21.512 83.4914 21.144C83.8914 20.776 84.1954 20.368 84.4034 19.92L86.8754 21.216C86.6514 21.632 86.3234 22.088 85.8914 22.584C85.4754 23.064 84.9154 23.48 84.2114 23.832C83.5074 24.168 82.6114 24.336 81.5234 24.336ZM78.6194 16.68H84.1874C84.1234 15.992 83.8434 15.44 83.3474 15.024C82.8674 14.608 82.2354 14.4 81.4514 14.4C80.6354 14.4 79.9874 14.608 79.5074 15.024C79.0274 15.44 78.7314 15.992 78.6194 16.68ZM89.2309 24V12.096H92.2069V13.656H92.6389C92.8309 13.24 93.1909 12.848 93.7189 12.48C94.2469 12.096 95.0469 11.904 96.1189 11.904C97.0469 11.904 97.8549 12.12 98.5429 12.552C99.2469 12.968 99.7909 13.552 100.175 14.304C100.559 15.04 100.751 15.904 100.751 16.896V24H97.7269V17.136C97.7269 16.24 97.5029 15.568 97.0549 15.12C96.6229 14.672 95.9989 14.448 95.1829 14.448C94.2549 14.448 93.5349 14.76 93.0229 15.384C92.5109 15.992 92.2549 16.848 92.2549 17.952V24H89.2309ZM108.1 24.336C107.156 24.336 106.268 24.104 105.436 23.64C104.62 23.16 103.964 22.464 103.468 21.552C102.972 20.64 102.724 19.536 102.724 18.24V17.856C102.724 16.56 102.972 15.456 103.468 14.544C103.964 13.632 104.62 12.944 105.436 12.48C106.252 12 107.14 11.76 108.1 11.76C108.82 11.76 109.42 11.848 109.9 12.024C110.396 12.184 110.796 12.392 111.1 12.648C111.404 12.904 111.636 13.176 111.796 13.464H112.228V7.2H115.252V24H112.276V22.56H111.844C111.572 23.008 111.148 23.416 110.572 23.784C110.012 24.152 109.188 24.336 108.1 24.336ZM109.012 21.696C109.94 21.696 110.716 21.4 111.34 20.808C111.964 20.2 112.276 19.32 112.276 18.168V17.928C112.276 16.776 111.964 15.904 111.34 15.312C110.732 14.704 109.956 14.4 109.012 14.4C108.084 14.4 107.308 14.704 106.684 15.312C106.06 15.904 105.748 16.776 105.748 17.928V18.168C105.748 19.32 106.06 20.2 106.684 20.808C107.308 21.4 108.084 21.696 109.012 21.696ZM119.781 24.336C119.141 24.336 118.597 24.128 118.149 23.712C117.717 23.28 117.501 22.728 117.501 22.056C117.501 21.384 117.717 20.84 118.149 20.424C118.597 19.992 119.141 19.776 119.781 19.776C120.437 19.776 120.981 19.992 121.413 20.424C121.845 20.84 122.061 21.384 122.061 22.056C122.061 22.728 121.845 23.28 121.413 23.712C120.981 24.128 120.437 24.336 119.781 24.336ZM124.217 24V7.2H127.385V24H124.217ZM129.921 24V12.096H132.897V13.656H133.329C133.521 13.24 133.881 12.848 134.409 12.48C134.937 12.096 135.737 11.904 136.809 11.904C137.737 11.904 138.545 12.12 139.233 12.552C139.937 12.968 140.481 13.552 140.865 14.304C141.249 15.04 141.441 15.904 141.441 16.896V24H138.417V17.136C138.417 16.24 138.193 15.568 137.745 15.12C137.313 14.672 136.689 14.448 135.873 14.448C134.945 14.448 134.225 14.76 133.713 15.384C133.201 15.992 132.945 16.848 132.945 17.952V24H129.921Z"
        fill="currentColor"
      />
      <defs>
        <clipPath id="clip0_325_18313">
          <rect
            width="20.1005"
            height="28"
            fill="white"
            transform="translate(6 2)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}