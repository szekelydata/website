interface SnowflakeProps {
  size?: number
  color?: string
  className?: string
  style?: React.CSSProperties
  variant?: 'default' | 'simple' | 'detailed'
}

export default function Snowflake({ 
  size = 24, 
  color = '#ffffff', 
  className = '',
  style,
  variant = 'default'
}: SnowflakeProps) {
  const paths = {
    default: "M12 0L14 4L12 8L10 4L12 0ZM12 24L14 20L12 16L10 20L12 24ZM24 12L20 14L16 12L20 10L24 12ZM0 12L4 14L8 12L4 10L0 12ZM20.5 3.5L17.5 6.5L15.5 4.5L18.5 1.5L20.5 3.5ZM3.5 20.5L6.5 17.5L4.5 15.5L1.5 18.5L3.5 20.5ZM20.5 20.5L17.5 17.5L15.5 19.5L18.5 22.5L20.5 20.5ZM3.5 3.5L6.5 6.5L4.5 4.5L1.5 1.5L3.5 3.5Z",
    simple: "M12 0L14 4L12 8L10 4L12 0ZM12 24L14 20L12 16L10 20L12 24ZM24 12L20 14L16 12L20 10L24 12ZM0 12L4 14L8 12L4 10L0 12Z",
    detailed: "M12 0L14 4L12 8L10 4L12 0ZM12 24L14 20L12 16L10 20L12 24ZM24 12L20 14L16 12L20 10L24 12ZM0 12L4 14L8 12L4 10L0 12ZM20.5 3.5L17.5 6.5L15.5 4.5L18.5 1.5L20.5 3.5ZM3.5 20.5L6.5 17.5L4.5 15.5L1.5 18.5L3.5 20.5ZM20.5 20.5L17.5 17.5L15.5 19.5L18.5 22.5L20.5 20.5ZM3.5 3.5L6.5 6.5L4.5 4.5L1.5 1.5L3.5 3.5ZM12 10L14 12L12 14L10 12L12 10Z"
  }

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        fill={color}
        d={paths[variant]}
      />
    </svg>
  )
} 