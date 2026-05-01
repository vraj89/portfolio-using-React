import { useState, useEffect } from 'react'

export const LoadingScreen = ({ onCompleted }) => {
  const [text, setText] = useState("")
  const [progress, setProgress] = useState(0)
  const fullText = "Hello I'm Vraj "

  useEffect(() => {
    // Typing animation
    let index = 0
    const typeInterval = setInterval(() => {
      setText(fullText.substring(0, index))
      index++

      if (index > fullText.length) {
        clearInterval(typeInterval)
      }
    }, 80)

    // Progress bar animation
    let progressValue = 0
    const progressInterval = setInterval(() => {
      progressValue += Math.random() * 30
      if (progressValue > 90) progressValue = 90
      setProgress(progressValue)
    }, 200)

    // Complete loading
    const completeTimer = setTimeout(() => {
      clearInterval(typeInterval)
      clearInterval(progressInterval)
      setProgress(100)
      setText(fullText)
      setTimeout(() => {
        onCompleted()
      }, 500)
    }, 3000)

    return () => {
      clearInterval(typeInterval)
      clearInterval(progressInterval)
      clearTimeout(completeTimer)
    }
  }, [onCompleted])

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 opacity-30"></div>
      
      {/* Animated background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Title with typing effect */}
        <div className="mb-12 h-16 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-mono">
            {text}
            <span className="animate-bounce" style={{
              display: text === fullText ? 'none' : 'inline',
              marginLeft: '8px'
            }}>▌</span>
          </h1>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 mx-auto bg-white/10 rounded-full overflow-hidden border border-white/20">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress text */}
        <p className="text-gray-400 text-sm mt-4 font-mono">
          {Math.floor(progress)}%
        </p>

        {/* Loading dots */}
        <div className="flex gap-2 mt-8 justify-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  )
}
