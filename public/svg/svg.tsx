"use client";

export default function NetworkSVG() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <style>{`
        @keyframes networkFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33%       { transform: translateY(-12px) translateX(4px); }
          66%       { transform: translateY(6px) translateX(-4px); }
        }
        @keyframes lineGlow1 {
          0%, 100% { opacity: 0.12; }
          50%       { opacity: 0.55; }
        }
        @keyframes lineGlow2 {
          0%, 100% { opacity: 0.08; }
          50%       { opacity: 0.45; }
        }
        @keyframes lineGlow3 {
          0%, 100% { opacity: 0.05; }
          50%       { opacity: 0.35; }
        }
        @keyframes dotPulse1 {
          0%, 100% { opacity: 0.6; r: 2.5; }
          50%       { opacity: 1; r: 4.5; }
        }
        @keyframes dotPulse2 {
          0%, 100% { opacity: 0.4; r: 2; }
          50%       { opacity: 0.95; r: 3.5; }
        }
        @keyframes dotPulse3 {
          0%, 100% { opacity: 0.7; r: 3; }
          50%       { opacity: 1; r: 5; }
        }
        @keyframes dashFlow {
          0%   { stroke-dashoffset: 300; opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.6; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .net-group {
          animation: networkFloat 14s ease-in-out infinite;
        }
        .net-line-a { animation: lineGlow1 3.5s ease-in-out infinite; }
        .net-line-b { animation: lineGlow2 4.2s ease-in-out infinite 0.8s; }
        .net-line-c { animation: lineGlow3 5.1s ease-in-out infinite 1.6s; }
        .net-line-d { animation: lineGlow1 3.8s ease-in-out infinite 2.2s; }
        .net-line-e { animation: lineGlow2 4.6s ease-in-out infinite 0.4s; }

        .dot-a { animation: dotPulse1 2.4s ease-in-out infinite; }
        .dot-b { animation: dotPulse2 3.1s ease-in-out infinite 0.6s; }
        .dot-c { animation: dotPulse3 2.8s ease-in-out infinite 1.2s; }
        .dot-d { animation: dotPulse1 3.4s ease-in-out infinite 1.8s; }
        .dot-e { animation: dotPulse2 2.6s ease-in-out infinite 2.4s; }

        .flow-path {
          stroke-dasharray: 80 220;
          animation: dashFlow 4s ease-in-out infinite;
        }
        .flow-path-b {
          stroke-dasharray: 60 240;
          animation: dashFlow 5s ease-in-out infinite 1.5s;
        }
        .flow-path-c {
          stroke-dasharray: 100 200;
          animation: dashFlow 6s ease-in-out infinite 3s;
        }
      `}</style>

      <svg
        viewBox="0 0 357 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.7 }}
      >
        <g className="net-group" style={{ mixBlendMode: "screen" }}>
          {/* ── Main network paths split into groups for staggered animation ── */}
          <g className="net-line-a">
            <path
              d="M311.779 26.495L345.437 22.441L356.335 55.34L297.532 50.07L269.403 63.125L286.112 93.259L322.052 98.847L312.176 125.923L298.128 164.43L265.491 110.663L254.599 160.033L232.043 145.195L191.853 142.929L158.224 158.682L132.975 175.175"
              stroke="#589CFF"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M322.052 98.847L345.437 22.441L297.532 50.07L312.127 26.407L356.217 55.458L322.052 98.847ZM322.052 98.847L297.532 50.07"
              stroke="#589CFF"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
          </g>

          <g className="net-line-b">
            <path
              d="M179.895 177.703L235.289 199.048L222.166 260.298L212.465 305.564L199.667 330.926L168.021 297.729L154.838 283.898L219.548 237.265L193.072 198.712"
              stroke="#589CFF"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M235.289 199.049L217.505 176.072L191.853 142.929L179.909 177.919L193.071 198.712L235.289 199.049Z"
              stroke="#589CFF"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
          </g>

          <g className="net-line-c">
            <path
              d="M235.289 199.049L219.337 237.189L154.687 218.82L179.909 177.919L254.599 160.033L235.289 199.049Z"
              stroke="#589CFF"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M235.289 199.049L174.84 256.792L136.202 225.84L104.69 231.763L133.077 174.874L154.512 218.637L164.791 254.406L154.837 283.898L141.918 256.988L118.247 297.368L106.355 262.374L98.105 342.397"
              stroke="#589CFF"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
          </g>

          <g className="net-line-d">
            <path
              d="M119.032 348.053L152.155 313.088L118.247 297.368L136.224 289.012L130.682 315.957L154.825 284.113L176.809 290.986L193.538 276.987L199.594 331.004L230.497 311.343L233.783 333.74L237.286 357.625L198.314 378.734L184.135 341.811L183.33 377.398"
              stroke="#589CFF"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M199.352 330.85L210.61 348.73L167.852 315.48L184.136 341.811L199.352 330.85Z"
              stroke="#589CFF"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
          </g>

          <g className="net-line-e">
            <path
              d="M209.062 254.149L219.337 237.189L136.486 225.598L193.538 276.987L231.04 311.729L167.936 315.201L152.154 313.089L130.682 315.957L184.135 341.812L98.105 342.397L148.401 374.477L189.08 401.943L218.451 387.518L237.286 357.625L210.609 348.731L183.376 376.758L148.846 374.795L162.021 356.349L140.506 347.172L130.489 316.025L59.89 284.125L90.485 275.192L104.292 231.927L17.15 285.176L49.447 320.919"
              stroke="#589CFF"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
            <path
              d="M231.771 145.513L268.213 126.677L322.052 98.848L269.403 63.126L265.49 110.664L191.853 142.93L254.599 160.033L193.071 198.713"
              stroke="#589CFF"
              strokeWidth="0.5"
              strokeMiterlimit="10"
            />
          </g>

          {/* ── Animated "data flow" overlay paths ── */}
          <path
            className="flow-path"
            d="M311.779 26.495L297.532 50.07L269.403 63.125L265.491 110.663L232.043 145.195L191.853 142.929L179.895 177.703L235.289 199.048"
            stroke="#60A5FA"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            fill="none"
          />
          <path
            className="flow-path-b"
            d="M193.072 198.712L219.548 237.265L154.838 283.898L168.021 297.729L199.667 330.926L237.286 357.625L218.451 387.518L189.08 401.943"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            fill="none"
          />
          <path
            className="flow-path-c"
            d="M104.292 231.927L136.202 225.84L174.84 256.792L193.538 276.987L230.497 311.343L237.286 357.625"
            stroke="#93C5FD"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            fill="none"
          />

          {/* ── Node dots with staggered pulse animations ── */}
          {/* Top cluster */}
          <circle
            className="dot-a"
            cx="311.779"
            cy="26.495"
            r="3"
            fill="#589CFF"
          />
          <circle
            className="dot-b"
            cx="345.437"
            cy="22.441"
            r="2.5"
            fill="#589CFF"
          />
          <circle
            className="dot-c"
            cx="356.335"
            cy="55.34"
            r="3.5"
            fill="#589CFF"
          />
          <circle
            className="dot-d"
            cx="297.532"
            cy="50.07"
            r="3"
            fill="#589CFF"
          />
          <circle
            className="dot-e"
            cx="322.052"
            cy="98.847"
            r="3"
            fill="#589CFF"
          />

          {/* Middle cluster */}
          <circle
            className="dot-b"
            cx="265.491"
            cy="110.663"
            r="3"
            fill="#589CFF"
          />
          <circle
            className="dot-c"
            cx="254.599"
            cy="160.033"
            r="2.5"
            fill="#589CFF"
          />
          <circle
            className="dot-a"
            cx="191.853"
            cy="142.929"
            r="3.5"
            fill="#589CFF"
          />
          <circle
            className="dot-d"
            cx="235.289"
            cy="199.049"
            r="4"
            fill="#3B82F6"
          />
          <circle
            className="dot-e"
            cx="179.895"
            cy="177.703"
            r="3"
            fill="#589CFF"
          />
          <circle
            className="dot-a"
            cx="219.548"
            cy="237.265"
            r="3"
            fill="#589CFF"
          />
          <circle
            className="dot-b"
            cx="193.538"
            cy="276.987"
            r="2.5"
            fill="#589CFF"
          />

          {/* Lower cluster */}
          <circle
            className="dot-c"
            cx="199.667"
            cy="330.926"
            r="3.5"
            fill="#3B82F6"
          />
          <circle
            className="dot-d"
            cx="237.286"
            cy="357.625"
            r="3"
            fill="#589CFF"
          />
          <circle
            className="dot-e"
            cx="218.451"
            cy="387.518"
            r="3"
            fill="#589CFF"
          />
          <circle
            className="dot-a"
            cx="148.401"
            cy="374.477"
            r="2.5"
            fill="#589CFF"
          />
          <circle
            className="dot-b"
            cx="183.376"
            cy="376.758"
            r="3"
            fill="#589CFF"
          />

          {/* Left cluster */}
          <circle
            className="dot-c"
            cx="104.292"
            cy="231.927"
            r="2.5"
            fill="#589CFF"
          />
          <circle
            className="dot-d"
            cx="136.202"
            cy="225.84"
            r="3"
            fill="#589CFF"
          />
          <circle
            className="dot-e"
            cx="17.15"
            cy="285.176"
            r="3"
            fill="#589CFF"
          />
          <circle
            className="dot-a"
            cx="59.89"
            cy="284.125"
            r="2.5"
            fill="#589CFF"
          />
          <circle
            className="dot-b"
            cx="49.447"
            cy="320.919"
            r="3"
            fill="#589CFF"
          />
          <circle
            className="dot-c"
            cx="98.105"
            cy="342.397"
            r="3.5"
            fill="#3B82F6"
          />

          {/* Bright highlight dots on key nodes */}
          <circle
            className="dot-d"
            cx="235.289"
            cy="199.049"
            r="1.5"
            fill="#EEF5FF"
            opacity="0.9"
          />
          <circle
            className="dot-e"
            cx="199.667"
            cy="330.926"
            r="1.5"
            fill="#EEF5FF"
            opacity="0.9"
          />
          <circle
            className="dot-a"
            cx="98.105"
            cy="342.397"
            r="1.5"
            fill="#EEF5FF"
            opacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
}

export function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30"
        cy="30"
        r="29.7"
        fill="#F9F9F9"
        stroke="#E7E7E7"
        stroke-width="0.6"
      />
      <path
        opacity="0.4"
        d="M31.3333 18.3334H23.3333C18.7733 18.3334 17 20.1067 17 24.6667V35.3334C17 38.4 18.6667 41.6667 23.3333 41.6667H31.3333C35.8933 41.6667 37.6667 39.8934 37.6667 35.3334V24.6667C37.6667 20.1067 35.8933 18.3334 31.3333 18.3334Z"
        fill="url(#paint0_linear_23_39)"
      />
      <path
        d="M29.3333 29.1734C30.7177 29.1734 31.84 28.0511 31.84 26.6667C31.84 25.2823 30.7177 24.16 29.3333 24.16C27.9489 24.16 26.8267 25.2823 26.8267 26.6667C26.8267 28.0511 27.9489 29.1734 29.3333 29.1734Z"
        fill="url(#paint1_linear_23_39)"
      />
      <path
        d="M42.8667 22.2266C42.32 21.9466 41.1733 21.6266 39.6133 22.7199L37.64 24.1066C37.6533 24.2933 37.6667 24.4666 37.6667 24.6666V35.3333C37.6667 35.5333 37.64 35.7066 37.64 35.8933L39.6133 37.2799C40.44 37.8666 41.16 38.0533 41.7333 38.0533C42.2267 38.0533 42.6133 37.9199 42.8667 37.7866C43.4133 37.5066 44.3333 36.7466 44.3333 34.8399V25.1733C44.3333 23.2666 43.4133 22.5066 42.8667 22.2266Z"
        fill="url(#paint2_linear_23_39)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_23_39"
          x1="27.3333"
          y1="18.3334"
          x2="27.3333"
          y2="41.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3B82F6" />
          <stop offset="1" stop-color="#204887" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_23_39"
          x1="29.3333"
          y1="24.16"
          x2="29.3333"
          y2="29.1734"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3B82F6" />
          <stop offset="1" stop-color="#204887" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_23_39"
          x1="40.9867"
          y1="21.9562"
          x2="40.9867"
          y2="38.0533"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3B82F6" />
          <stop offset="1" stop-color="#204887" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ClarityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="29.7" fill="#F9F9F9" stroke="#E7E7E7" stroke-width="0.6"/>
<path d="M33.5866 14.6666H22.4133C17.56 14.6666 14.6666 17.56 14.6666 22.4133V33.5733C14.6666 38.44 17.56 41.3333 22.4133 41.3333H33.5733C38.4266 41.3333 41.32 38.44 41.32 33.5866V22.4133C41.3333 17.56 38.44 14.6666 33.5866 14.6666ZM34.5066 27.3733C34.5066 27.8933 34.0933 28.3066 33.5733 28.3066C33.0533 28.3066 32.64 27.8933 32.64 27.3733V27.1333L29.0133 30.76C28.8133 30.96 28.5466 31.0533 28.2666 31.0266C27.9866 31 27.7333 30.8533 27.5866 30.6133L26.2266 28.5866L23.0533 31.76C22.8666 31.9466 22.64 32.0266 22.4 32.0266C22.16 32.0266 21.92 31.9333 21.7466 31.76C21.3866 31.4 21.3866 30.8133 21.7466 30.44L25.72 26.4666C25.92 26.2666 26.1866 26.1733 26.4666 26.2C26.7466 26.2266 27 26.3733 27.1466 26.6133L28.5066 28.64L31.32 25.8266H31.08C30.56 25.8266 30.1466 25.4133 30.1466 24.8933C30.1466 24.3733 30.56 23.96 31.08 23.96H33.56C33.68 23.96 33.8 23.9866 33.92 24.0266C34.1466 24.12 34.3333 24.3066 34.4266 24.5333C34.48 24.6533 34.4933 24.7733 34.4933 24.8933V27.3733H34.5066Z" fill="url(#paint0_linear_24_28)"/>
<defs>
<linearGradient id="paint0_linear_24_28" x1="27.9933" y1="14.6666" x2="27.9933" y2="41.3333" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#204887"/>
</linearGradient>
</defs>
</svg>

  );
}

export function TeamsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
   <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="29.7" fill="#F9F9F9" stroke="#E7E7E7" stroke-width="0.6"/>
<path opacity="0.4" d="M42 16.6666V32.8C42 35.3333 40.6667 36.6666 38.1333 36.6666H21.8667C19.3333 36.6666 18 35.3333 18 32.8V16.6666H42Z" fill="url(#paint0_linear_24_48)"/>
<path d="M43.3334 17.6666H16.6667C16.12 17.6666 15.6667 17.2133 15.6667 16.6666C15.6667 16.12 16.12 15.6666 16.6667 15.6666H43.3334C43.88 15.6666 44.3334 16.12 44.3334 16.6666C44.3334 17.2133 43.88 17.6666 43.3334 17.6666Z" fill="url(#paint1_linear_24_48)"/>
<path d="M36.2267 43.7866C36.0533 44.1333 35.6933 44.3333 35.3333 44.3333C35.1867 44.3333 35.0267 44.2933 34.8933 44.2266L30 41.7866L25.1066 44.2266C24.9733 44.2933 24.8133 44.3333 24.6667 44.3333C24.3067 44.3333 23.9466 44.1333 23.7733 43.7866C23.52 43.28 23.72 42.6799 24.2267 42.4399L29 40.0533V36.6666H31V40.0533L35.7733 42.4399C36.28 42.6799 36.48 43.28 36.2267 43.7866Z" fill="url(#paint2_linear_24_48)"/>
<path d="M24 29.6667C23.72 29.6667 23.4267 29.5467 23.2267 29.3067C22.8667 28.88 22.9333 28.2534 23.36 27.8934L27.56 24.3867C27.9467 24.0667 28.44 23.9334 28.9067 24.0134C29.3867 24.0934 29.8 24.3867 30.0533 24.8133L31.4533 27.1467L35.36 23.8934C35.7867 23.5334 36.4133 23.6 36.7733 24.0267C37.1333 24.4533 37.0667 25.08 36.64 25.44L32.44 28.9467C32.0533 29.2667 31.56 29.4 31.0933 29.32C30.6133 29.24 30.2 28.9467 29.9467 28.52L28.5467 26.1867L24.64 29.44C24.4534 29.5867 24.2267 29.6667 24 29.6667Z" fill="url(#paint3_linear_24_48)"/>
<defs>
<linearGradient id="paint0_linear_24_48" x1="30" y1="16.6666" x2="30" y2="36.6666" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#204887"/>
</linearGradient>
<linearGradient id="paint1_linear_24_48" x1="30" y1="15.6666" x2="30" y2="17.6666" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#204887"/>
</linearGradient>
<linearGradient id="paint2_linear_24_48" x1="30" y1="36.6666" x2="30" y2="44.3333" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#204887"/>
</linearGradient>
<linearGradient id="paint3_linear_24_48" x1="30" y1="23.6603" x2="30" y2="29.6667" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#204887"/>
</linearGradient>
</defs>
</svg>

  );
}

export function ActionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
 <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="29.7" fill="#F9F9F9" stroke="#E7E7E7" stroke-width="0.6"/>
<path d="M39.333 17C41.3581 17 43 18.642 43 20.667V34C43 36.0251 41.3581 37.667 39.333 37.667H24.6152C24.109 37.667 23.6298 37.8967 23.3135 38.292L20.2061 42.1768C19.1432 43.5054 17.0001 42.7543 17 41.0527V20.667C17 18.6419 18.6419 17 20.667 17H39.333ZM25.333 22.333C24.0445 22.3332 23 23.3784 23 24.667V26C23 27.2885 24.0445 28.3328 25.333 28.333H26.6416C26.5644 28.4582 26.4725 28.5917 26.3662 28.7334C25.9172 29.332 25.3056 29.9463 24.626 30.626C24.2356 31.0164 24.2358 31.6495 24.626 32.04C25.0165 32.4306 25.6495 32.4306 26.04 32.04L26.0693 32.0117C26.7152 31.3659 27.4239 30.6574 27.9668 29.9336C28.5099 29.2095 29 28.326 29 27.333V24.667C29 23.3785 27.9555 22.3332 26.667 22.333H25.333ZM33.333 22.333C32.0445 22.3332 31 23.3785 31 24.667V26C31 27.2885 32.0445 28.3328 33.333 28.333H34.6416C34.5644 28.4582 34.4725 28.5917 34.3662 28.7334C33.9172 29.332 33.3056 29.9463 32.626 30.626C32.2356 31.0164 32.2358 31.6495 32.626 32.04C33.0165 32.4306 33.6495 32.4306 34.04 32.04L34.0693 32.0117C34.7152 31.3659 35.4239 30.6574 35.9668 29.9336C36.5099 29.2095 37 28.326 37 27.333V24.667C37 23.3785 35.9555 22.3332 34.667 22.333H33.333Z" fill="url(#paint0_linear_24_58)"/>
<defs>
<linearGradient id="paint0_linear_24_58" x1="30" y1="17" x2="30" y2="42.8562" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#204887"/>
</linearGradient>
</defs>
</svg>


  );
}



export function FootageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
<svg width="100%" height="auto" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_38_3885)">
<rect x="23.0769" width="60" height="60" rx="30" fill="url(#paint0_linear_38_3885)"/>
<rect x="26.5385" y="3.46143" width="53.0769" height="53.0769" rx="26.5385" fill="white" fill-opacity="0.2"/>
<rect x="27.1154" y="4.03835" width="51.9231" height="51.9231" rx="25.9615" stroke="white" stroke-opacity="0.3" stroke-width="1.15385"/>
<path d="M41.9937 24.75H64.1603" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M58.9103 18.9165L55.4103 24.7498" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M50.7437 18.9165L47.2437 24.7498" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M41.9935 29.9998C41.9935 24.7751 41.9935 22.1627 43.6166 20.5396C45.2398 18.9165 47.8521 18.9165 53.0769 18.9165C58.3016 18.9165 60.914 18.9165 62.5371 20.5396C64.1602 22.1627 64.1602 24.7751 64.1602 29.9998C64.1602 35.2246 64.1602 37.8369 62.5371 39.4601C60.914 41.0832 58.3016 41.0832 53.0769 41.0832C47.8521 41.0832 45.2398 41.0832 43.6166 39.4601C41.9935 37.8369 41.9935 35.2246 41.9935 29.9998Z" stroke="white" stroke-width="1.75"/>
<path d="M56.5222 33.3769C56.3455 34.1081 55.5102 34.6248 53.8398 35.6582C52.2249 36.6572 51.4175 37.1567 50.7668 36.9559C50.4978 36.8729 50.2527 36.7152 50.055 36.4981C49.5769 35.9728 49.5769 34.954 49.5769 32.9163C49.5769 30.8787 49.5769 29.8599 50.055 29.3346C50.2527 29.1175 50.4978 28.9598 50.7668 28.8768C51.4175 28.676 52.2249 29.1755 53.8398 30.1745C55.5102 31.2079 56.3455 31.7245 56.5222 32.4558C56.5951 32.7576 56.5951 33.0751 56.5222 33.3769Z" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_dd_38_3885" x="-1.7643e-05" y="0" width="106.154" height="106.154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.61538" operator="erode" in="SourceAlpha" result="effect1_dropShadow_38_3885"/>
<feOffset dy="9.23077"/>
<feGaussianBlur stdDeviation="4.61538"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.372549 0 0 0 0 0.203922 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_3885"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.61538" operator="erode" in="SourceAlpha" result="effect2_dropShadow_38_3885"/>
<feOffset dy="23.0769"/>
<feGaussianBlur stdDeviation="13.8462"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.462745 0 0 0 0 0.878431 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_38_3885" result="effect2_dropShadow_38_3885"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_38_3885" result="shape"/>
</filter>
<linearGradient id="paint0_linear_38_3885" x1="79.7681" y1="62.6866" x2="-0.507982" y2="30.9613" gradientUnits="userSpaceOnUse">
<stop offset="0.649038" stop-color="#204887"/>
<stop offset="0.879808" stop-color="#FCFFFD" stop-opacity="0.86"/>
</linearGradient>
</defs>
</svg>

  );
}

export function ProcessIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
<svg width="100%" height="auto" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_38_3896)">
<rect x="23.0769" width="60" height="60" rx="30" fill="url(#paint0_linear_38_3896)"/>
<rect x="26.5385" y="3.46143" width="53.0769" height="53.0769" rx="26.5385" fill="white" fill-opacity="0.2"/>
<rect x="27.1154" y="4.03835" width="51.9231" height="51.9231" rx="25.9615" stroke="white" stroke-opacity="0.3" stroke-width="1.15385"/>
<path d="M63.8686 22.4165C63.3854 22.4165 62.9936 22.0248 62.9936 21.5415C62.9936 21.0583 63.3854 20.6665 63.8686 20.6665C64.3519 20.6665 64.7436 21.0583 64.7436 21.5415C64.7436 22.0248 64.3519 22.4165 63.8686 22.4165ZM63.8686 22.4165V26.7915C63.8686 27.6056 63.8686 28.0126 63.7681 28.3438C63.5419 29.0896 62.9583 29.6731 62.2126 29.8994C61.8814 29.9998 61.4744 29.9998 60.6603 29.9998" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M42.2853 37.5833C42.7685 37.5833 43.1603 37.9751 43.1603 38.4583C43.1603 38.9416 42.7685 39.3333 42.2853 39.3333C41.802 39.3333 41.4103 38.9416 41.4103 38.4583C41.4103 37.9751 41.802 37.5833 42.2853 37.5833ZM42.2853 37.5833L42.2853 33.2083C42.2853 32.3943 42.2853 31.9872 42.3858 31.656C42.612 30.9103 43.1955 30.3267 43.9413 30.1005C44.2725 30 44.6795 30 45.4936 30" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M45.4935 19.2085C45.4935 19.6917 45.1018 20.0835 44.6185 20.0835C44.1353 20.0835 43.7435 19.6917 43.7435 19.2085C43.7435 18.7252 44.1353 18.3335 44.6185 18.3335C45.1018 18.3335 45.4935 18.7252 45.4935 19.2085ZM45.4935 19.2085L49.8685 19.2085C50.6826 19.2085 51.0896 19.2085 51.4209 19.309C52.1666 19.5352 52.7502 20.1188 52.9764 20.8645C53.0769 21.1957 53.0769 21.6028 53.0769 22.4168" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M60.6602 40.7918C60.6602 40.3086 61.052 39.9168 61.5352 39.9168C62.0185 39.9168 62.4102 40.3086 62.4102 40.7918C62.4102 41.2751 62.0185 41.6668 61.5352 41.6668C61.052 41.6668 60.6602 41.2751 60.6602 40.7918ZM60.6602 40.7918L56.2852 40.7918C55.4712 40.7918 55.0641 40.7918 54.7329 40.6914C53.9872 40.4651 53.4036 39.8816 53.1774 39.1358C53.0769 38.8046 53.0769 38.3976 53.0769 37.5835" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M45.5497 29.9442C45.5497 26.3694 45.5497 24.5819 46.6602 23.4714C47.7708 22.3608 49.5582 22.3608 53.133 22.3608C56.7078 22.3608 58.4952 22.3608 59.6058 23.4714C60.7164 24.5819 60.7164 26.3694 60.7164 29.9442C60.7164 33.519 60.7164 35.3064 59.6058 36.417C58.4952 37.5275 56.7078 37.5275 53.133 37.5275C49.5582 37.5275 47.7708 37.5275 46.6602 36.417C45.5497 35.3064 45.5497 33.519 45.5497 29.9442Z" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M53.6602 32.9168L51.9561 27.6422C51.849 27.3106 51.5202 27.0835 51.1474 27.0835C50.7745 27.0835 50.4458 27.3106 50.3387 27.6422L48.6346 32.9168M56.5767 27.0835V32.9168M49.2628 31.1668H53.032" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_dd_38_3896" x="-1.7643e-05" y="0" width="106.154" height="106.154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.61538" operator="erode" in="SourceAlpha" result="effect1_dropShadow_38_3896"/>
<feOffset dy="9.23077"/>
<feGaussianBlur stdDeviation="4.61538"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.372549 0 0 0 0 0.203922 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_3896"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.61538" operator="erode" in="SourceAlpha" result="effect2_dropShadow_38_3896"/>
<feOffset dy="23.0769"/>
<feGaussianBlur stdDeviation="13.8462"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.462745 0 0 0 0 0.878431 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_38_3896" result="effect2_dropShadow_38_3896"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_38_3896" result="shape"/>
</filter>
<linearGradient id="paint0_linear_38_3896" x1="79.7681" y1="62.6866" x2="-0.507982" y2="30.9613" gradientUnits="userSpaceOnUse">
<stop offset="0.649038" stop-color="#204887"/>
<stop offset="0.879808" stop-color="#FCFFFD" stop-opacity="0.86"/>
</linearGradient>
</defs>
</svg>

  );
}

export function VisualIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
<svg width="100%" height="auto" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_38_3896)">
<rect x="23.0769" width="60" height="60" rx="30" fill="url(#paint0_linear_38_3896)"/>
<rect x="26.5385" y="3.46143" width="53.0769" height="53.0769" rx="26.5385" fill="white" fill-opacity="0.2"/>
<rect x="27.1154" y="4.03835" width="51.9231" height="51.9231" rx="25.9615" stroke="white" stroke-opacity="0.3" stroke-width="1.15385"/>
<path d="M63.8686 22.4165C63.3854 22.4165 62.9936 22.0248 62.9936 21.5415C62.9936 21.0583 63.3854 20.6665 63.8686 20.6665C64.3519 20.6665 64.7436 21.0583 64.7436 21.5415C64.7436 22.0248 64.3519 22.4165 63.8686 22.4165ZM63.8686 22.4165V26.7915C63.8686 27.6056 63.8686 28.0126 63.7681 28.3438C63.5419 29.0896 62.9583 29.6731 62.2126 29.8994C61.8814 29.9998 61.4744 29.9998 60.6603 29.9998" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M42.2853 37.5833C42.7685 37.5833 43.1603 37.9751 43.1603 38.4583C43.1603 38.9416 42.7685 39.3333 42.2853 39.3333C41.802 39.3333 41.4103 38.9416 41.4103 38.4583C41.4103 37.9751 41.802 37.5833 42.2853 37.5833ZM42.2853 37.5833L42.2853 33.2083C42.2853 32.3943 42.2853 31.9872 42.3858 31.656C42.612 30.9103 43.1955 30.3267 43.9413 30.1005C44.2725 30 44.6795 30 45.4936 30" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M45.4935 19.2085C45.4935 19.6917 45.1018 20.0835 44.6185 20.0835C44.1353 20.0835 43.7435 19.6917 43.7435 19.2085C43.7435 18.7252 44.1353 18.3335 44.6185 18.3335C45.1018 18.3335 45.4935 18.7252 45.4935 19.2085ZM45.4935 19.2085L49.8685 19.2085C50.6826 19.2085 51.0896 19.2085 51.4209 19.309C52.1666 19.5352 52.7502 20.1188 52.9764 20.8645C53.0769 21.1957 53.0769 21.6028 53.0769 22.4168" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M60.6602 40.7918C60.6602 40.3086 61.052 39.9168 61.5352 39.9168C62.0185 39.9168 62.4102 40.3086 62.4102 40.7918C62.4102 41.2751 62.0185 41.6668 61.5352 41.6668C61.052 41.6668 60.6602 41.2751 60.6602 40.7918ZM60.6602 40.7918L56.2852 40.7918C55.4712 40.7918 55.0641 40.7918 54.7329 40.6914C53.9872 40.4651 53.4036 39.8816 53.1774 39.1358C53.0769 38.8046 53.0769 38.3976 53.0769 37.5835" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M45.5497 29.9442C45.5497 26.3694 45.5497 24.5819 46.6602 23.4714C47.7708 22.3608 49.5582 22.3608 53.133 22.3608C56.7078 22.3608 58.4952 22.3608 59.6058 23.4714C60.7164 24.5819 60.7164 26.3694 60.7164 29.9442C60.7164 33.519 60.7164 35.3064 59.6058 36.417C58.4952 37.5275 56.7078 37.5275 53.133 37.5275C49.5582 37.5275 47.7708 37.5275 46.6602 36.417C45.5497 35.3064 45.5497 33.519 45.5497 29.9442Z" stroke="white" stroke-width="1.75" stroke-linejoin="round"/>
<path d="M53.6602 32.9168L51.9561 27.6422C51.849 27.3106 51.5202 27.0835 51.1474 27.0835C50.7745 27.0835 50.4458 27.3106 50.3387 27.6422L48.6346 32.9168M56.5767 27.0835V32.9168M49.2628 31.1668H53.032" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_dd_38_3896" x="-1.7643e-05" y="0" width="106.154" height="106.154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.61538" operator="erode" in="SourceAlpha" result="effect1_dropShadow_38_3896"/>
<feOffset dy="9.23077"/>
<feGaussianBlur stdDeviation="4.61538"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.372549 0 0 0 0 0.203922 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_3896"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.61538" operator="erode" in="SourceAlpha" result="effect2_dropShadow_38_3896"/>
<feOffset dy="23.0769"/>
<feGaussianBlur stdDeviation="13.8462"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.462745 0 0 0 0 0.878431 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_38_3896" result="effect2_dropShadow_38_3896"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_38_3896" result="shape"/>
</filter>
<linearGradient id="paint0_linear_38_3896" x1="79.7681" y1="62.6866" x2="-0.507982" y2="30.9613" gradientUnits="userSpaceOnUse">
<stop offset="0.649038" stop-color="#204887"/>
<stop offset="0.879808" stop-color="#FCFFFD" stop-opacity="0.86"/>
</linearGradient>
</defs>
</svg>


  );
}

export function TacticalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
<svg width="100%" height="auto" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_38_3906)">
<rect x="23.0769" width="60" height="60" rx="30" fill="url(#paint0_linear_38_3906)"/>
<rect x="26.5385" y="3.46143" width="53.0769" height="53.0769" rx="26.5385" fill="white" fill-opacity="0.2"/>
<rect x="27.1154" y="4.03835" width="51.9231" height="51.9231" rx="25.9615" stroke="white" stroke-opacity="0.3" stroke-width="1.15385"/>
<path d="M45.4935 25.3335V30.5835M45.4935 30.5835V32.3335C45.4935 35.6333 45.4935 37.2832 46.5187 38.3084C47.4815 39.2712 48.9955 39.3297 51.9102 39.3333M45.4935 30.5835H51.9102" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M62.4102 36.8889H61.5352V36.8889H62.4102ZM63.5769 27.5125L64.2553 26.9598V26.9598L63.5769 27.5125ZM64.0652 29.4971C64.3705 29.8718 64.9216 29.928 65.2963 29.6228C65.6709 29.3176 65.7272 28.7664 65.4219 28.3918L64.7436 28.9444L64.0652 29.4971ZM59.3986 28.3918C59.0933 28.7664 59.1496 29.3176 59.5242 29.6228C59.8989 29.928 60.45 29.8718 60.7553 29.4971L60.0769 28.9444L59.3986 28.3918ZM61.2436 27.5125L60.5652 26.9598L60.5652 26.9598L61.2436 27.5125ZM60.0769 38.4583C59.5937 38.4583 59.2019 38.8501 59.2019 39.3333C59.2019 39.8166 59.5937 40.2083 60.0769 40.2083V39.3333V38.4583ZM62.4102 36.8889L63.2852 36.8889L63.2852 26.5L62.4102 26.5L61.5352 26.5L61.5352 36.8889H62.4102ZM63.5769 27.5125L62.8986 28.0652L64.0652 29.4971L64.7436 28.9444L65.4219 28.3918L64.2553 26.9598L63.5769 27.5125ZM60.0769 28.9444L60.7553 29.4971L61.9219 28.0652L61.2436 27.5125L60.5652 26.9598L59.3986 28.3918L60.0769 28.9444ZM63.5769 27.5125L64.2553 26.9598C63.9967 26.6425 63.7472 26.3333 63.5136 26.1144C63.2705 25.8869 62.9096 25.625 62.4102 25.625V26.5V27.375C62.2526 27.375 62.2 27.2819 62.3174 27.3918C62.4441 27.5105 62.6072 27.7076 62.8986 28.0652L63.5769 27.5125ZM61.2436 27.5125L61.9219 28.0652C62.2133 27.7076 62.3763 27.5105 62.5031 27.3918C62.6205 27.2819 62.5679 27.375 62.4102 27.375V26.5V25.625C61.9109 25.625 61.5499 25.8869 61.3069 26.1145C61.0733 26.3333 60.8238 26.6425 60.5652 26.9598L61.2436 27.5125ZM62.4102 36.8889H61.5352C61.5352 37.7945 60.8444 38.4583 60.0769 38.4583V39.3333V40.2083C61.8867 40.2083 63.2852 38.6834 63.2852 36.8889H62.4102Z" fill="white"/>
<path d="M51.9102 30.5833C51.9102 29.4834 51.9102 28.9334 52.2519 28.5917C52.5936 28.25 53.1436 28.25 54.2436 28.25C55.3435 28.25 55.8935 28.25 56.2352 28.5917C56.5769 28.9334 56.5769 29.4834 56.5769 30.5833C56.5769 31.6833 56.5769 32.2332 56.2352 32.575C55.8935 32.9167 55.3435 32.9167 54.2436 32.9167C53.1436 32.9167 52.5936 32.9167 52.2519 32.575C51.9102 32.2332 51.9102 31.6833 51.9102 30.5833Z" stroke="white" stroke-width="1.75"/>
<path d="M51.9102 39.3333C51.9102 38.2334 51.9102 37.6834 52.2519 37.3417C52.5936 37 53.1436 37 54.2436 37C55.3435 37 55.8935 37 56.2352 37.3417C56.5769 37.6834 56.5769 38.2334 56.5769 39.3333C56.5769 40.4333 56.5769 40.9832 56.2352 41.325C55.8935 41.6667 55.3435 41.6667 54.2436 41.6667C53.1436 41.6667 52.5936 41.6667 52.2519 41.325C51.9102 40.9832 51.9102 40.4333 51.9102 39.3333Z" stroke="white" stroke-width="1.75"/>
<path d="M43.7436 18.3335H47.2436C49.3613 18.3335 49.5769 19.6284 49.5769 21.8335C49.5769 24.0386 49.3613 25.3335 47.2436 25.3335H43.7436C41.6258 25.3335 41.4102 24.0386 41.4102 21.8335C41.4102 19.6284 41.6258 18.3335 43.7436 18.3335Z" stroke="white" stroke-width="1.75"/>
</g>
<defs>
<filter id="filter0_dd_38_3906" x="-1.7643e-05" y="0" width="106.154" height="106.154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.61538" operator="erode" in="SourceAlpha" result="effect1_dropShadow_38_3906"/>
<feOffset dy="9.23077"/>
<feGaussianBlur stdDeviation="4.61538"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.372549 0 0 0 0 0.203922 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_3906"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="4.61538" operator="erode" in="SourceAlpha" result="effect2_dropShadow_38_3906"/>
<feOffset dy="23.0769"/>
<feGaussianBlur stdDeviation="13.8462"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.211765 0 0 0 0 0.462745 0 0 0 0 0.878431 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_38_3906" result="effect2_dropShadow_38_3906"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_38_3906" result="shape"/>
</filter>
<linearGradient id="paint0_linear_38_3906" x1="79.7681" y1="62.6866" x2="-0.507982" y2="30.9613" gradientUnits="userSpaceOnUse">
<stop offset="0.649038" stop-color="#204887"/>
<stop offset="0.879808" stop-color="#FCFFFD" stop-opacity="0.86"/>
</linearGradient>
</defs>
</svg>


  );
}