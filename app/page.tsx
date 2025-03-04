import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to First App!
      </h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        First Appはシンプルなカウンターゲームと日々のToDoアプリをひとつにまとめてみました！
      </p>
      <div className="mt-8 space-y-4">
        <Link 
          href="/counter" 
          className="block w-48 p-2 text-center bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          カウンターページへ
        </Link>
        <Link 
          href="/todo" 
          className="block w-48 p-2 text-center bg-green-500 text-white rounded hover:bg-green-600"
        >
          ToDoリストページへ
        </Link>
      </div>
    </main>
  );
}
