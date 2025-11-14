class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-white shadow-sm sticky top-0 z-50">
                <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="/" class="text-2xl font-bold text-blue-900 flex items-center">
                        <i data-feather="home" class="w-6 h-6 mr-2"></i>
                        Katie Cleans
                    </a>
                    <nav class="hidden md:block">
                        <ul class="flex space-x-8">
                            <li><a href="/" class="text-blue-900 font-medium hover:text-teal-500 transition">Home</a></li>
                            <li><a href="#services" class="text-blue-900 font-medium hover:text-teal-500 transition">Services</a></li>
                            <li><a href="#gallery" class="text-blue-900 font-medium hover:text-teal-500 transition">Gallery</a></li>
                            <li><a href="#contact" class="text-blue-900 font-medium hover:text-teal-500 transition">Contact</a></li>
                        </ul>
                    </nav>
                    <button class="md:hidden focus:outline-none" id="mobile-menu-button">
                        <i data-feather="menu" class="w-6 h-6 text-blue-900"></i>
                    </button>
                </div>
                <div class="md:hidden hidden bg-white py-4 px-4" id="mobile-menu">
                    <ul class="space-y-3">
                        <li><a href="/" class="block text-blue-900 font-medium hover:text-teal-500 transition">Home</a></li>
                        <li><a href="#services" class="block text-blue-900 font-medium hover:text-teal-500 transition">Services</a></li>
                        <li><a href="#gallery" class="block text-blue-900 font-medium hover:text-teal-500 transition">Gallery</a></li>
                        <li><a href="#contact" class="block text-blue-900 font-medium hover:text-teal-500 transition">Contact</a></li>
                    </ul>
                </div>
            </header>
        `;
    }
}

customElements.define('custom-header', CustomHeader);
