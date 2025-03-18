import React from 'react';

const HeaderAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="coins-animation">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`coin coin-${i + 1} absolute w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600
                       animate-float opacity-75 shadow-lg`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            <div className="absolute inset-1 rounded-full bg-yellow-300/50"></div>
          </div>
        ))}
      </div>
      <div className="stats-animation">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`stat stat-${i + 1} absolute text-xs font-bold text-primary/30
                       animate-float-up`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          >
            {['$', '+', '%', '📈', '💰'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderAnimation; 