class CommentBlog extends HTMLElement {
  constructor() {
    super()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'comments' && newValue !== oldValue) {
      this.innerHTML = ''
      this.render()
    }
  }

  static get observedAttributes() {
    return ['comments', 'blogId']
  }
  get comments() {
    try {
      return JSON.parse(this.getAttribute('comments'))
    } catch (e) {
      console.error('Error parsing blogs:', e)
      return []
    }
  }
  set comments(value) {
    this.setAttribute('comments', JSON.stringify(value))
  }

  render() {
    const comments = this.comments
    const blogId = this.blogId
    const commentElements = comments.map(comment => (
      `
      <div class="comment mb-4 p-4 shadow border rounded">
        <p class="font-bold text-white">${comment.name}</p>
        <p class="text-white">${comment.comment}</p>
      </div>
      `
    )).join('')

    this.innerHTML = `
    <div class="container mx-auto p-4">
        <h2 class="text-2xl font-bold mb-4 text-white">Leave a Comment</h2>
        <form id="comment-form" class="mb-6">
          <div class="mb-4">
            <label for="name" class="block text-white text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-6">
            <label for="comment" class="block text-white text-sm font-bold mb-2">Comment:</label>
            <textarea id="comment" name="comment" rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <button class="bg-primary text-[#010101] px-[33px] py-3 w-full">
            Post Comment
          </button>
        </form>
        <div class="comments">
          <h3 class="text-xl font-bold mb-4 text-white">Comments:</h3>
          ${commentElements}
        </div>
    </div>
    `

    const form = this.querySelector('form#comment-form')
    form.addEventListener('submit', async function (event) {
      event.preventDefault() // Prevent the default form submission
      const name = event.target.name.value 
      const comment = event.target.comment.value
      console.log('submit comment', name, comment)

      try {
        // Use Axios to send the data
        await axios.put(`https://656469caceac41c0761e22d5.mockapi.io/blogs/${blogId}`, {
          comments: comments.concat([{ name , comment }]),
        })
        alert('ทำการ Comment เรียบร้อย')
        location.reload()
      } catch (error) {
        console.error('Error sending comment:', error)
        alert('มีปัญหาขณะ Comment')
      }
    })
  }
}

customElements.define('comment-blog', CommentBlog)

export { CommentBlog }
