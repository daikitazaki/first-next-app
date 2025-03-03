'use client';

import { useState } from 'react';

type CounterProps = {
  message?: string;
}

export default function Counter({ message = 'カウンター' }: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl font-bold text-gray-900 dark:text-white">
        {message}
      </p>
      <p className="text-xl text-gray-900 dark:text-white">
        カウント: {count}
      </p>
      {count === 10 && (
        <p className="text-lg text-green-600 font-bold animate-bounce">
          🎉 おめでとう！ 🎉
        </p>
      )}
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          減らす
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          増やす
        </button>
      </div>
    </div>
  );
} 