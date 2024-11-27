import { getPostData } from '../lib/posts';

export default function Home() {
  const { data, content } = getPostData('hello-world'); // Replace with actual slug

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-600 mb-4 text-center">{data.title}</h1>
        <p className="text-sm text-red-600 mb-4 text-center">Published on {data.date}</p>
        <div
          className="prose max-w-none text-center text-white"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
