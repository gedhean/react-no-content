```javascript

import React from 'react';

const styles = {
  width: '100%',
  height: '100%',
  margin: '0px auto',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const SvgNoContent = props => (
  <div style={styles}>
    <svg
      xmlnsosb="http://www.openswatchbook.org/uri/2009/osb"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={640}
      height={640}
      {...props}
    >
      <defs>
        <linearGradient id="a" osbpaint="solid">
          <stop offset={0} stopColor="#2d4a5e" />
        </linearGradient>
        <path
          d="M502.59 170c6.05 0 10.95 4.9 10.95 10.95v217.68c0 6.05-4.9 10.95-10.95 10.95H197.41c-6.05 0-10.95-4.9-10.95-10.95V180.95c0-6.05 4.9-10.95 10.95-10.95h305.18z"
          id="b"
        />
        <path
          d="M260.72 242.08c0 2.76-2.3 5-5.13 5s-5.13-2.24-5.13-5 2.3-5 5.13-5 5.13 2.24 5.13 5z"
          id="e"
        />
        <path
          d="M438.75 242.08c0 2.76-2.3 5-5.13 5s-5.13-2.24-5.13-5 2.3-5 5.13-5 5.13 2.24 5.13 5z"
          id="f"
        />
        <path
          d="M476.14 480c0 11.35-56.52 20.57-126.14 20.57S223.86 491.35 223.86 480s56.52-20.57 126.14-20.57 126.14 9.22 126.14 20.57z"
          id="c"
        />
        <path d="M395 334.53l-100 .94" id="d" />
        <linearGradient
          xlinkHref="#a"
          id="g"
          x1={186.27}
          y1={183.201}
          x2={513.65}
          y2={183.201}
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <a>
        <use
          transform="matrix(1.0029 0 0 .99635 -1.028 1.592)"
          height="100%"
          width="100%"
          xlinkHref="#b"
          fillOpacity={0}
          strokeWidth={2}
          fill="#2d4a5e"
          stroke="#2d4a5e"
        />
        <use opacity={0.2} fill="#2b2830" xlinkHref="#c" />
        <use
          height="100%"
          width="100%"
          xlinkHref="#d"
          fill="#2d4a5e"
          stroke="#2d4a5e"
          strokeWidth={3.5}
          transform="rotate(.6 368.03 812.353)"
        />
        <g transform="rotate(90 180 525)" fill="none" stroke="#ef9b92">
          <circle cx={65} cy={115} r={15} strokeWidth={2} />
          <path d="M55 125l20-20" strokeWidth={1.9} />
        </g>
        <g transform="rotate(90 -22.5 272.5)" fill="none" stroke="#ef9b92">
          <circle cx={65} cy={115} r={15} strokeWidth={2} />
          <path d="M55 125l20-20" strokeWidth={1.9} />
        </g>
        <g transform="rotate(90 250 315)" fill="none" stroke="#ef9b92">
          <circle cx={65} cy={115} r={15} strokeWidth={2} />
          <path d="M55 125l20-20" strokeWidth={1.9} />
        </g>
        <path
          d="M252.916 135l30-30m-30 0l30 30M100 280l30-30m-30 0l30 30M555 320l30-30m-30 0l30 30"
          fill="none"
          stroke="#abb6c0"
          strokeWidth={1.9}
          strokeLinecap="round"
        />
      </a>
      <use
        xlinkHref="#e"
        width="100%"
        height="100%"
        transform="translate(4.41 2.92)"
        fill="#2d4a5e"
      />
      <use
        xlinkHref="#f"
        width="100%"
        height="100%"
        fill="#2d4a5e"
        transform="translate(6.38 2.92)"
      />
      <path d="M185 195h330" fill="none" stroke="#2d4a5e" strokeWidth={2} />
      <path
        d="M187.344 186.325c.17-7.162.264-7.732 1.643-9.812 2.94-4.438-13.379-4.03 161.06-4.03h155.758l2.333 1.367c3.767 2.208 4.637 4.667 4.637 13.104v6.975h-325.61z"
        fill="url(#g)"
        stroke="#2d4a5e"
        strokeWidth={2.55}
        paintOrder="stroke fill markers"
        strokeLinecap="round"
      />
      <path
        d="M193.706 407.923c-2.15-.768-4.022-2.345-5.24-4.416l-1.077-1.834-.1-102.746-.1-102.746h325.449v102.467c0 86.059-.086 102.672-.535 103.746-.841 2.015-2.98 4.182-5.1 5.17l-1.947.906-154.945-.013c-128.436-.011-155.195-.103-156.405-.534zm206.487-73.03l.118-1.847h-14.31c-7.871 0-30.452-.116-50.18-.259l-35.868-.258v4.013l36.257.103c19.942.057 42.47.102 50.061.1l13.803-.005zM262.98 249.155c2.566-1.89 2.976-5.07.962-7.463-1.474-1.752-3.56-2.252-5.809-1.393-5.57 2.128-3.599 10.433 2.32 9.767.837-.094 1.974-.504 2.527-.911zm180.024.006c1.496-1.092 2.499-3.358 2.197-4.966-.703-3.75-5.044-5.52-8.301-3.386-3.002 1.968-2.515 7.367.8 8.862 1.557.702 3.96.471 5.304-.51z"
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        paintOrder="stroke fill markers"
      />
    </svg>
  </div>
);

export default SvgNoContent;
```
