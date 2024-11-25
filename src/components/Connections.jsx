const Connections = ({ connections }) => {
  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2
      }}
    >
      {connections.map(({ from, to }, index) => (
        <line
          key={index}
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke='rgb(0, 102, 255)'
          strokeWidth='2'
          strokeOpacity={0.31}
        />
      ))}
    </svg>
  )
}

export default Connections
