import Link from 'next/link';
import Image from 'next/image';
import matter from 'gray-matter';

const Blog = (props) => {
  // console.log(props);
  // return (
  //   <div>
  //     <h1>ブログページ</h1>
  //     {props.blogs.map((blog, index) => {
  //       return (
  //         // mapでも１つの親要素で包む
  //         // mapの親要素にkeyをつける
  //         <div key={index}>
  //           <h3>{blog.frontmatter.title}</h3>
  //           <p>{blog.frontmatter.date}</p>
  //           <Link href={`/blog/${blog.slug}`}>
  //             <a>Read More</a>
  //           </Link>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <>
      <div>
        <div>
          <h1>Blog</h1>
          <p>エンジニアの日常生活をお届けします</p>
          {props.blogs.map((blog, index) => {
            return (
              <div key={index}>
                <div>
                  <h3>{blog.frontmatter.title}</h3>
                  <p>{blog.frontmatter.excerpt}</p>
                  <p>{blog.frontmatter.date}</p>
                  <Link href={`/blog/${blog.slug}`}>
                    <a>Read More</a>
                  </Link>
                </div>
                <div>
                  <Image
                    src={blog.frontmatter.image}
                    alt='card-image'
                    height={300}
                    width={1000}
                    quality={90}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
export async function getStaticProps() {
  // const testText = 'Next.js ポートフォリオサイト';
  const blogs = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);
    // console.log(values);
    // console.log(keys);
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        slug: slug,
      };
    });
    return data;
  })(require.context('../data', true, /\.md$/));
  // console.log(blogs);

  const orderedBlogs = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id;
  });

  return {
    props: {
      // test: testText,
      // blogs: blogs,
      // blogs: JSON.parse(JSON.stringify(blogs)),
      blogs: JSON.parse(JSON.stringify(orderedBlogs)),
    },
  };
}
