'use client'

const PreLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-darklight">
      <div className="relative flex flex-col items-center">
        <div className="relative w-20 h-20 mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '0.8s' }}></div>
          <div className="absolute inset-4 rounded-full border-4 border-t-pink-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '0.5s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
          </div>
        </div>
        <div className="flex gap-1">
          {['L', 'o', 'a', 'd', 'i', 'n', 'g'].map((letter, i) => (
            <span
              key={i}
              className="text-purple-500/80 text-sm font-light tracking-widest animate-bounce"
              style={{ animationDelay: `${i * 0.1}s`, animationDuration: '1s' }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreLoader
