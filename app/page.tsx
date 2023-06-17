import Comment from '@/components/Comments';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>商品</div>
        <p>价格</p>
        <div>
          <p>评论</p>
          <input />
          <Suspense fallback={<div>Loading...</div>}>
            <Comment />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
