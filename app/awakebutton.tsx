'use client';
import { useEffect, useState, useRef} from 'react';

interface AwakeButtonProps {
  width?: string | number;
  height?: string | number;
  onStateChange: (isActive: boolean) => void;
}

export default function AwakeButton({ width, height, onStateChange}: AwakeButtonProps ){
  const [lock, setLock] = useState<WakeLockSentinel | null>(null);
  const lockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    onStateChange(lock !== null);
  }, [lock, onStateChange]);

  //requests the lock from the browser, handles errors and rejections.
  async function requestLock(){

    if (!('wakeLock' in navigator)) {
      alert("Your browser does not support the Screen Wake Lock API.");
      return;
    }

    try {
    const wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => {
        setLock(null);
      });
    setLock(wakeLock);
    
    } catch {
      alert("Awakelock was rejected, this doesn't work if on low battery, or if not compatible with your browser.");
    }
  }
  // onclick handler
  async function handleAwake(){
    if (lock !== null) {
      await lock.release();
      setLock(null);
    } else {
      await requestLock();
    }
  }
  // Handles when the button unmounts
  useEffect(() => {
    lockRef.current = lock;
  }, [lock]);

  useEffect(() => {
    return () => {
      lockRef.current?.release();
    };
  }, []);


  return (
    <button 
      onClick={handleAwake} 
      style={{ width, height }}
      className="w-full h-full text-white font-bold" 
    >
      {lock === null ? "AwakeScreen: OFF" : "AwakeScreen: ON"}
    </button>
  );

}