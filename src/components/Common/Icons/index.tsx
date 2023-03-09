interface IconTypes {
  className?: string;
  type: "chevron-down" | string;
}

export const Icon = ({
  className,
  type,
}: IconTypes) => {
  switch (type) {
    case "chevron-down":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          className={className}
        >
          <title>Chevron down</title>
          <path
            d="M14.9401 7.21252L10.0501 12.1025C9.47256 12.68 8.52756 12.68 7.95006 12.1025L3.06006 7.21252"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return <></>;
  }
}