import React from 'react';
import '@/components/Loader.css';
const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{backgroundColor: '#1f0033'}}>
      <div className="text-center text-white">
 
        <div className="containerLoader mx-auto mb-4">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
        </div>


        <p className="text-xl font-semibold">Chargement...</p>
      </div>
    </div>
  );
};



export default LoadingPage;
