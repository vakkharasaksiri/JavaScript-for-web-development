const relatedBlogs = document.getElementById('related-blogs')
const commentBlog = document.getElementById('comment-blog')

async function main() {
  // ข้อ 2: เพิ่มการอ่านภาษาเข้ามา
  language = localStorage.getItem('language') || 'en'

  // fetch data from blogs.json
  try {
    // ข้อ 1 (adv): เปลี่ยนมาดึงข้อมูลผ่าน API และใช้ axios แทน
    const response = await axios.get('https://656469caceac41c0761e22d5.mockapi.io/blogs')
    const blogsRawData = response.data
    // ข้อ 2: แปลงข้อมูลให้เป็นไปตาม pattern เดิมของข้อมูลที่ใช้ เพื่อจะได้ไม่ต้องเปลี่ยน code จุดอื่น
    blogsData = blogsRawData.map(blog => {
      blog.title = blog.localization[language].title
      blog.description = blog.localization[language].description
      return blog
    })

    relatedBlogs.blogs = blogsData

    // ข้อ 2: เพิ่ม event listener for language change
    document.addEventListener('languageChanged', function (event) {
      language = event.detail.language
      blogsData = blogsRawData.map(blog => {
        blog.title = blog.localization[language].title
        blog.description = blog.localization[language].description
        return blog
      })
      relatedBlogs.blogs = blogsData
    })

    // ข้อ 4(adv): ดึง Blog id จาก url
    const blogId = location.href.split('/').pop().split('.')[0]
    // หยิบ blog จากการ search id
    const selectedBlog = blogsData.find(blog => blog.id === blogId)

    // ส่ง blog id และ comment เข้า comment blog
    commentBlog.blogId = blogId
    commentBlog.comments = selectedBlog.comments
  } catch (error) {
    console.log(error)
  }
}

main()