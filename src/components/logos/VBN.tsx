import { createContextualStyles } from "../../styles/contextual";

const useStyles = createContextualStyles('#fff', '#1b1c20');

export function VBN(): JSX.Element {
  const { classes } = useStyles();
  return <svg height="28" viewBox="0 0 79.747 110.77" version="1.0" xmlns="http://www.w3.org/2000/svg">
    <path d="m2.3656 76.61h74.918v-74.687h-74.918z" fill="#fff" />
    <path d="m17.714 51.986 17.305-17.305 9.8576 9.8576-17.296 17.296m34.86-34.947c-2.3233-4.1279-5.7559-7.5474-9.8947-9.8533" fill="none" stroke="#e60005" strokeWidth="1.0527" />
    <g transform="translate(-5.3383 -4.8829)" fill="#fff">
      <path d="m20.515 61.52h4.639v-4.639h-4.639z" />
      <path d="m18.37 59.376h4.639v-4.639h-4.639z" />
      <path d="m28.228 69.464h4.639v-4.639h-4.639z" />
      <path d="m30.606 71.437h4.639v-4.639h-4.639z" />
      <path d="m55.656 21.915h4.639v-4.639h-4.639z" />
      <path d="m67.774 33.976h4.639v-4.639h-4.639z" />
    </g>
    <g transform="translate(-5.3383 -4.8829)">
      <path d="m45.417 18.69c-14.162 0-25.641 11.479-25.641 25.641 0 4.555 1.1922 8.8311 3.2757 12.538l17.305-17.305 9.8576 9.8576-17.296 17.296c3.6985 2.0705 7.9593 3.2539 12.499 3.2539 14.162 0 25.641-11.479 25.641-25.641s-11.479-25.641-25.641-25.641" fill="#e73300" />
      <path d="m84.752 4.8829h-78.898v78.898h78.898zm-4.6008 74.297h-61.149v-9.206h-8.5456v-60.488h59.854l-12.477 12.477c4.1235 2.3124 7.5387 5.7319 9.8489 9.8576l12.469-12.469v59.828" className={classes.contextual} />
      <path d="m8.057 71.864 32.299-32.299 9.8576 9.8576-32.299 32.299-9.8576-9.8576" className={classes.contextual} />
    </g>
  </svg>;
}
