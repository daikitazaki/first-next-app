'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        カウンターページ
      </h1>
      <div className="flex items-center space-x-6 mb-4">
        <button
          onClick={() => setCount(count - 1)}
          className="p-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 shadow-lg"
        >
          -
        </button>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {count}
        </span>
        <button
          onClick={() => setCount(count + 1)}
          className="p-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 shadow-lg"
        >
          +
        </button>
      </div>
      {count !== 0 && count % 10 === 0 && (
        <div className="p-4 bg-yellow-100 border border-yellow-300 rounded-lg shadow-md">
          <p className="text-lg font-bold text-yellow-800">おめでとうございます！</p>
          <p className="text-sm text-yellow-700">{count}カウントに達しました。</p>
        </div>
      )}
      <div className="mt-12 space-y-4">
        <Link 
          href="/" 
          className="block w-48 mx-auto px-4 py-2 bg-blue-500 text-white text-center rounded hover:bg-blue-600 transition duration-300"
        >
          トップページへ戻る
        </Link>
        <Link 
          href="/todo" 
          className="block w-48 mx-auto px-4 py-2 bg-green-500 text-white text-center rounded hover:bg-green-600 transition duration-300"
        >
          ToDoリストページへ
        </Link>
      </div>
    </main>
  );
} 