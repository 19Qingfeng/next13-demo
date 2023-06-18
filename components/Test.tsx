function getComments(): Promise<string[]> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(['This is Great.', 'Worthy of recommendation!']);
    }, 3000)
  );
}

export default async function Comments() {
  const comments = await getComments();

  return (
    <div>
      <p>评论</p>
      {/* RFC 中包裹客户端组件 */}
      {comments.map((comment) => {
        return <p key={comment}>{comment}</p>;
      })}
    </div>
  );
}
