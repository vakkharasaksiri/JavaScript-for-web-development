console.log("Hello Skooldio")

const blogElement =document.getElementById('blog-container')

function createBlogHTML(blogs) {
    // วนแต่ละตัวของ blogs ด้วย .map เพื่อทำการแปลงเป็น html ออกมา
    const blogContentElement = blogs.map(function(blog) {
        return `
        <div class="flex flex-col md:flex-row gap-6 w-full">
            <img
            src="${blog.imageUrl}"
            alt="feature image 1"
            class="w-full md:w-auto"
            />
            <div class="flex flex-col gap-4 bg-wd-darkgrey p-6 grow">
            <h3 class="text-2xl font-semibold">
                ${blog.title}
            </h3>
            <p class="text-xl font-light">
                ${blog.description}
            </p>
            <p>At ${blog.publishedDate}</p>
            <a href="blogs/test.html">Read more</a>
            </div>
        </div>`
    }).join('');

    // ต่อ html ทั้งหมดเพือ่ใส่ใน blogElement.innerHTML
    blogElement.innerHTML = blogContentElement
}


// Create a variable of content
// const blog = {
//     "title": "Forward Integration Executive",
//     "description": "Nobis quo est corporis totam dolores. Rerum quam autem debitis dolores sunt et quis occaecati. Nam dolorem dolores. ",
//     "publishedDate": "4/1/2024",
//     "imageUrl": "https://fastly.picsum.photos/id/48/300/200.jpg?hmac=5ZylZrVu2ikHu7ODDfsD-Po4--cyrccMtvkzQpf3arE"
//  }

//  createBlogHTML(blog)

 
//  Another method to import json file but didnt use alot
//  import blogs from './blogs.json'

 async function main(){
    const response = await axios.get('/scripts/blogs.json');
    // console.log(response.data)

    const blogs = response.data;
    console.log(blogs)
    // ทำการนำ response.data ส่งเข้าไปใน createBlogHTML เป็น array ของ blogs
    createBlogHTML(blogs)
 }


 main()

