'use client';

import AwakeButton from './AwakeButton';
import { useState } from 'react';

export default function Home() {
  const [isAwake, setIsAwake] = useState(false);

  return (
    <>
      <div className="awake-button-wrapper">
        <AwakeButton onStateChange={setIsAwake} />
      </div>

      <div className="glass-card">
        <h1>AwakeSite</h1>
        <h2>Instructions</h2>
        <p>The point of this website is to ensure that your computer does not go to sleep.</p>
        <ul>
          <li>1. Click the glowing button above.</li>
          <li>2. Keep the website as the active tab.</li>
          <li>3. Enjoy your non-sleeping computer.</li>
        </ul>
      </div>
    </>
  );
}
