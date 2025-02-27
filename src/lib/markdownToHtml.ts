import { remark } from 'remark';
import html from 'remark-html';
import remarkRehype from 'remark-rehype';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypePrismPlus, {
      ignoreMissing: true,
      showLineNumbers: true, // Enable line numbers
    })
    .use(html)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
