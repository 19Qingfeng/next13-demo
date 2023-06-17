function getComments(): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(['This is Great.', 'Worthy of recommendation!']);
    }, 3000)
  );
}

export default async function Home() {
  const comments = await getComments();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>商品</div>
        <p>价格</p>
        <div>
          <p>评论</p>
          <input />
          <div>
            {comments.map((comment) => {
              return <p key={comment}>{comment}</p>;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
