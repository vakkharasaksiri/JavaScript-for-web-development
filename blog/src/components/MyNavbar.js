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
              <div class="flex items-center space-x-1">
                <select id="language-switcher" class="py-2 px-3 bg-transparent border border-gray-300 rounded hover:border-gray-400">
                    <option value="en">English</option>
                    <option value="th">Thailand</option>
                </select>
              </div>
          </div>
      </div>
    </nav>
    `

    this.appendChild(template.content.cloneNode(true))
  }

  // ข้อ 2: เพิ่ม function สำหรับเปลี่ยนภาษา
  initLanguageSwitcher() {
    const languageSwitcher = this.querySelector('#language-switcher')
    languageSwitcher.value = localStorage.getItem('language') || 'en' // Default to English

    languageSwitcher.addEventListener('change', (event) => {
      const selectedLanguage = event.target.value
      localStorage.setItem('language', selectedLanguage)
      // Dispatch a custom event with the selected language
      this.dispatchEvent(
        new CustomEvent('languageChanged', {
          detail: { language: selectedLanguage },
          bubbles: true, // Allows the event to bubble up through the DOM
        })
      )
    })
  }
}

customElements.define('my-navbar', MyNavbar)

export { MyNavbar }
