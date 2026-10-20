import React from 'react';

const Logo = ({
  className = '',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="120 28 495 130"
      className={`navbar-logo ${className}`.trim()}
      {...props}
    >
      <defs>
        <style>
          {`
            .text-main {
              font-family: Palatino, "Palatino Linotype", "Book Antiqua", Georgia, serif;
              font-size: 46px;
              /* Vector.svg'deki çift çizgili / konturlu görünüm */
              fill: none;
              stroke: #c4d1c8;
              stroke-width: 2px;
              stroke-linejoin: round;
              letter-spacing: 5px;
            }
            .chimney-stroke {
              fill: none;
              stroke: #c4d1c8;
              stroke-width: 3px;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
            .smoke {
              fill: #c4d1c8;
              stroke: #c4d1c8;
              stroke-width: 1.5px;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
          `}
        </style>
      </defs>

      {/* Sol Metin: BACA */}
      <text x="295" y="152" className="text-main" textAnchor="end">
        BACA
      </text>

      {/* Sağ Metin: RAPORU (Sonuna U eklendi) */}
      <text x="355" y="152" className="text-main" textAnchor="start">
        RAPORU
      </text>

      {/* Ortadaki Baca ve Duman İkonu */}
      <g transform="translate(325, 0)">
        {/* Dumanlar */}
        <path
          className="smoke"
          d="M -2,68 C -4,52 10,48 12,32 C 13,44 -1,48 -1,62 Z"
        />
        <path
          className="smoke"
          d="M 3,64 C 5,53 16,49 17,39 C 16,47 7,51 5,62 Z"
          opacity="0.85"
        />

        {/* Baca Şapkası */}
        <rect
          x="-6.5"
          y="75"
          width="13"
          height="6"
          className="chimney-stroke"
        />

        {/* Baca Gövdesi */}
        <path
          className="chimney-stroke"
          d="M -9,152 L -5.5,81 L 5.5,81 L 9,152"
        />

        {/* Baca Boğum Çizgisi */}
        <line x1="-6" y1="87" x2="6" y2="87" className="chimney-stroke" />
      </g>
    </svg>
  );
};

export default Logo;