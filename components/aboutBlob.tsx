"use client";

import { motion } from "framer-motion";

const path1 =
  "M1467.13 74.9257C1302.22 -42.0263 1108.5 7.7323 1063.5 28C1018.5 48.2677 742.906 210.647 537.209 224.125C345.445 236.691 23.7423 98.3987 1.24658 55.916V48.2678C-0.442878 50.2483 -0.387946 52.8292 1.24658 55.916V1001.08C1.24658 1001.08 67.311 1137.65 276.028 1144.91C484.745 1152.16 718.434 1055.11 852.29 1071.5C986.146 1087.89 1102.12 1144.49 1165.87 1162.4C1229.63 1180.31 1432 1205.08 1472.33 1144.91C1512.66 1084.73 1467.13 74.9257 1467.13 74.9257Z";

const path2 =
  "M1467.13 96.9257C1318.22 -24.0263 1126.5 14.7323 1074.5 40C1022.5 65.2677 746.906 197.647 548.209 215.125C356.445 231.691 40.7423 117.399 1.24658 74.916V48.2678C-0.442878 50.2483 -0.387946 52.8292 1.24658 55.916V980.08C1.24658 980.08 79.311 1116.65 288.028 1129.91C496.745 1143.16 712.434 1042.11 843.29 1059.5C974.146 1076.89 1087.12 1131.49 1157.87 1150.4C1228.63 1169.31 1421 1188.08 1465.33 1128.91C1509.66 1069.73 1467.13 96.9257 1467.13 96.9257Z";

const path3 =
  "M1467.13 64.9257C1288.22 -50.0263 1091.5 1.7323 1049.5 19C1007.5 36.2677 731.906 224.647 524.209 233.125C329.445 241.691 17.7423 85.3987 1.24658 46.916V48.2678C-0.442878 50.2483 -0.387946 52.8292 1.24658 55.916V1018.08C1.24658 1018.08 58.311 1149.65 263.028 1157.91C467.745 1166.16 721.434 1068.11 861.29 1082.5C1001.15 1096.89 1116.12 1155.49 1177.87 1170.4C1239.63 1185.31 1440 1202.08 1476.33 1150.91C1512.66 1099.73 1467.13 64.9257 1467.13 64.9257Z";

export default function AboutBlob() {
  return (
    <div className="absolute inset-0 overflow-y-visible pointer-events-none">
      <svg
        viewBox="0 0 1489 1183"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute left-1/2 top-1/2 w-[102vw]  h-auto -translate-x-1/2 -translate-y-1/2"
      >
        <motion.path
          d={path1}
          fill="url(#paint0_radial_3_9)"
          animate={{
            d: [path1, path2, path3, path1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            transform: "scaleY(0.78)",
          }}
        />

        <defs>
          <radialGradient
            id="paint0_radial_3_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(744.368 591.372) rotate(-91.6517) scale(734.88 1374.98)"
          >
            <stop stopColor="#C5D7F2" />
            <stop offset="1" stopColor="#A92F50" />
          </radialGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 opacity-[0.08] mix-blend-soft-light bg-[url('/noise.png')]" />
    </div>
  );
}