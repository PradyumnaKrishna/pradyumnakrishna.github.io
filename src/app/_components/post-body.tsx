type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className="prose dark:prose-invert prose-img:rounded-md prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-p:mb-0 prose-headings:mb-0 max-w-max font-sans"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
