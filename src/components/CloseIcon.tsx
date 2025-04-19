const CloseIcon = ({
    size = 24,
    ...props
  }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
    <svg
      className="stroke-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  export default CloseIcon;
