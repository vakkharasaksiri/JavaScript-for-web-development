async function main(){
    const response = await axios.get('/scripts/blogs.json');
    blogsRawData = response.data;

    // ทำการนำ response.data ส่งเข้าไปใน createBlogHTML เป็น array ของ blogs
    createBlogHTML(blogsRawData)
 }


 main()
