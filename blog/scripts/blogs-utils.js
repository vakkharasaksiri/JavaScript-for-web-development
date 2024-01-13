console.log("Hello Skooldio")

const blogElement =document.getElementById('blog-container')

blogElement.innerHTML = `
    <div class="flex flex-col md:flex-row gap-6 w-full">
        <img
          src="https://fastly.picsum.photos/id/485/300/200.jpg?hmac=N6yRTUogA1s8HlQMCO9BtxlXa8mg7AOQs6JKw0jq6Fw"
          alt="feature image 1"
          class="w-full md:w-auto"
        />
        <div class="flex flex-col gap-4 bg-wd-darkgrey p-6 grow">
          <h3 class="text-2xl font-semibold">
            Forward Integration Executive
          </h3>
          <p class="text-xl font-light">
            Nobis quo est corporis totam dolores. Rerum quam autem debitis
            dolores sunt et quis occaecati. Nam dolorem dolores.
          </p>
          <p>At 4/1/2024</p>
          <a href="blogs/test.html">Read more</a>
        </div>
      </div>
`