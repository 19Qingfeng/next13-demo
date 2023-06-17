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
      {comments.map((comment) => {
        return <p key={comment}>{comment}</p>;
      })}
    </div>
  );
}
