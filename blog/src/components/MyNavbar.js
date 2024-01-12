class MyNavbar extends HTMLElement {
  constructor() {
    super()
    this.initTemplate()
    this.initLanguageSwitcher()
  }

  initTemplate() {
    const template = document.createElement('template')

    template.innerHTML = `
          <nav class="bg-wd-darkgrey text-white">
              <div class="max-w-6xl mx-auto px-4">
                  <div class="flex justify-between">
                      <div class="flex space-x-4 px-2">
                          <div class="flex items-center space-x-1">
                              <a href="/src/index.html" class="py-5 px-3 hover:text-gray-100">Home</a>
                              <a href="/src/blogs.html" class="py-5 px-3 hover:text-gray-100">Blog</a>
                              <a href="/src/contact.html" class="py-5 px-3 hover:text-gray-100">Contact</a>
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      `

    this.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('my-navbar', MyNavbar)

export { MyNavbar }
