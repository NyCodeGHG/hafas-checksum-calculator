export function IrishRail(): JSX.Element {
  return <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 500 334">
    <defs>
      <linearGradient id="LtGn" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#608c2a" />
        <stop offset="100%" stopColor="#c0d080" />
      </linearGradient>
      <linearGradient id="DkGn" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#3e6f15" />
        <stop offset="100%" stopColor="#2b5933" />
      </linearGradient>
      <linearGradient id="Gray" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#6e6e6e" />
        <stop offset="100%" stopColor="#fcfcfc" />
      </linearGradient>
      <linearGradient id="LtOr" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset="0%" stopColor="#f0b000" />
        <stop offset="100%" stopColor="#f96600" />
      </linearGradient>
      <linearGradient id="DkOr" x1="100%" x2="0%" y1="100%" y2="100%">
        <stop offset="0%" stopColor="#e45300" />
        <stop offset="100%" stopColor="#f99e00" />
      </linearGradient>
    </defs>

    <g stroke="none">
      <path d="M 1,167 H 167 V 1 Z" fill="url(#LtGn)" />
      <path d="M 1,167 H 167 V 333 Z" fill="url(#DkGn)" />
      <path d="M 167,1 V 167 L 333,333 V 167 Z" fill="url(#Gray)" />
      <path d="M 499,167 H 333 V 1 Z" fill="url(#LtOr)" />
      <path d="M 499,167 H 333 V 333 Z" fill="url(#DkOr)" />
    </g>
  </svg>;
}
