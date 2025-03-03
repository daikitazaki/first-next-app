import Link from 'next/link';
import Counter from '../../components/Counter';

export default function CounterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        カウンターページ
      </h1>
      <Counter message="Hello Counter" />
      <Link 
        href="/" 
        className="mt-8 text-blue-500 hover:text-blue-600 underline"
      >
        トップページへ戻る
      </Link>
    </main>
  );
} 