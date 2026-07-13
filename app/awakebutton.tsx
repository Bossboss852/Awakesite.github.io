'use client';
import {useEffect, useState, useRef} from 'react';

export default function Awakebutton(){
  const [lock, setlock] = useState<WakeLockSentinel | null>(null);
  const lockRef = useRef<WakeLockSentinel | null>(null);
  async function recursivelock(recur : number){
    try {
    const wakelock = await navigator.wakeLock.request('screen');
    alert('wakelock active')
    setlock(wakelock);
    } catch {
      if (recur !== 0) {
        recursivelock(recur-1);
      } else {
        alert("awakelock was completely rejected");
      }
    }
  }
  async function handleAwake(){
    if (lock !== null) {
      lock.release();
      setlock(null);
    } else {
      recursivelock(3);
    }
  }
  
  useEffect(() => {
    lockRef.current = lock;
  }, [lock]);

  useEffect(() => {
    return () => {
      if (lock !== null) {
        lock.release();
      }
    };
  }, []);
  return (
    <>
    <button onClick={handleAwake}>
      {(lock === null) ? "Turn on awakescreen":"Turn off awakescreen"}
    </button>
    </>
  );

}