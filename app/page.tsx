import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Hello, Next.js!
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        ようこそNext.jsの世界へ！
      </p>
      <Link 
        href="/counter" 
        className="mt-4 text-blue-500 hover:text-blue-600 underline"
      >
        カウンターページへ
      </Link>
    </main>
  );
}
