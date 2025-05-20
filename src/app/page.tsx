'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

type Post = {
  id: number;
  title: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]); // 投稿データの状態を管理
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data.slice(0, 5)); // 最初の5件だけ表示
      })
      .catch((err) => {
        console.error('APIエラー:', err);
      });
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">APIから取得した投稿一覧</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-gray-100 rounded shadow">
            {post.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
