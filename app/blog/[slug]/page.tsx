type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost(props: Props) {
  const { slug } = await props.params;

  const url = `https://harryiraku.hashnode.dev/${slug}`;

  return (
    <div className="min-h-screen">
      <iframe
        src={url}
        className="w-full h-screen border-none"
        title="Blog post"
      />
    </div>
  );
}
