console.log("Hello Skooldio")

const blogElement =document.getElementById('blog-container')
let blogsRawData =[];
let loadingTimeout = {};

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
            <a href="${blog.url}">Read more</a>
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


function searchBlogs(element){

    // แสดง Loading.... ขึ้นมา 2 วินาทีก่อน ผลออกมา

    // Clear the timer first
    clearTimeout(loadingTimeout)
    
    blogElement.innerHTML = 'Loading.......'

    loadingTimeout = setTimeout(function () {
        const filteredBlogs = blogsRawData.filter(function(blog){ 
            return blog.title.toLowerCase().includes(element.value.toLowerCase()) || blog.description.toLowerCase().includes(element.value.toLowerCase())
    
        })
        createBlogHTML(filteredBlogs)
    }, 2000);
}

function sortBlogs(element){
    console.log(element.value)


    const sortedBlogs = blogsRawData.sort(function(blogA,blogB){
        let compareDate = new Date(blogA.publishedDate) - new Date(blogB.publishedDate)

        if(element.value === 'desc'){
            compareDate = new Date(blogB.publishedDate) - new Date(blogA.publishedDate)
        }

        return compareDate
    })
    createBlogHTML(sortedBlogs)
}
   
 async function main(){
    const response = await axios.get('/scripts/blogs.json');
    blogsRawData = response.data;

    // ทำการนำ response.data ส่งเข้าไปใน createBlogHTML เป็น array ของ blogs
    createBlogHTML(blogsRawData)
 }


 main()

