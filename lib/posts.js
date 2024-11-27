import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(slug) {
  if (!slug) {
    throw new Error('Slug is required to fetch the post data');
  }

  const filePath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Markdown file for slug "${slug}" not found at ${filePath}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  console.log('Post data:', data); // Debug log to check if data is being returned
  return { data, content };
}
