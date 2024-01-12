class RelatedBlogs extends HTMLElement {
  constructor() {
    super()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'blogs' && newValue !== oldValue) {
      this.innerHTML = ''
      this.render()
    }
  }

  static get observedAttributes() {
    return ['blogs']
  }

  get blogs() {
    try {
      return JSON.parse(this.getAttribute('blogs'))
    } catch (e) {
      console.error('Error parsing blogs:', e)
      return []
    }
  }

  set blogs(value) {
    this.setAttribute('blogs', JSON.stringify(value))
  }

  render() {
    // สุ่ม blog ออกมา 3 ตัว
    const blogs = this.blogs
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 3)

    // loop แสดงผล blog element
    const blogElements = blogs
      .map(
        (blog) =>
          `<div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="${blog.imageUrl}"
              alt="Thumbnail 1"
            />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-white">${blog.title}</div>
              <p class="text-base text-white">
              ${blog.description}
              </p>
            </div>
          </div>`
      )
      .join('')

    this.innerHTML = `
    <div class="grid grid-cols-3 gap-4">
      ${blogElements}
    </div>
    `
  }
}

customElements.define('related-blogs', RelatedBlogs)

export { RelatedBlogs }
