import { useEffect, useRef } from 'react'

const SnowEffect = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const snowflakes = []
    for (let i = 0; i < 100; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1
      })
    }

    const getSnowColor = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark'
      return theme === 'dark' ? 'rgba(251, 241, 199, 0.8)' : 'rgba(60, 56, 54, 0.6)'
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = getSnowColor()

      snowflakes.forEach(flake => {
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fill()

        flake.y += flake.speed
        if (flake.y > canvas.height) {
          flake.y = 0
          flake.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="snow-canvas" />
}

export default SnowEffect