export default function Star() {
    return (
        <svg width="633" height="659" viewBox="0 0 633 659" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_n_10_12)">
            <path d="M380.413 -8.87237e-07L404.886 191.494L585.389 139.947L471.951 295.349L632.794 390.833L447.894 419.111L494.858 605.692L346.808 490.28L252.382 658.663L227.908 467.168L47.4047 518.716L160.843 363.314L1.4459e-06 267.83L184.9 239.552L137.936 52.9709L285.986 168.383L380.413 -8.87237e-07Z" fill="#AFC29C"/>
            </g>
            <defs>
            <filter id="filter0_n_10_12" x="0" y="0" width="632.794" height="658.663" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feTurbulence type="fractalNoise" baseFrequency="2 2" stitchTiles="stitch" numOctaves="3" result="noise" seed="9940" />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
            </feComponentTransfer>
            <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
            <feFlood flood-color="rgba(0, 0, 0, 0.15)" result="color1Flood" />
            <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
            <feMerge result="effect1_noise_10_12">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
            </feMerge>
            </filter>
            </defs>
        </svg>
    );
}