console.log("Hello Skooldio")

const blogElement =document.getElementById('blog-container')

function createBlogHTML(blog) {
    blogElement.innerHTML = `
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
      </div>
    `
}


// Create a variable of content
const blog = {
    "title": "Forward Integration Executive",
    "description": "Nobis quo est corporis totam dolores. Rerum quam autem debitis dolores sunt et quis occaecati. Nam dolorem dolores. ",
    "publishedDate": "4/1/2024",
    "imageUrl": "https://fastly.picsum.photos/id/48/300/200.jpg?hmac=5ZylZrVu2ikHu7ODDfsD-Po4--cyrccMtvkzQpf3arE"
 }

 createBlogHTML(blog)



