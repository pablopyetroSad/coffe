// Estado da aplicação
let currentUser = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let products = [];

// Produtos de exemplo
const sampleProducts = [
    {
        id: 1,
        name: "Café Bourbon Amarelo",
        description: "Grãos premium do Sul de Minas com notas frutadas e doces",
        price: 35.90,
        image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "arabica",
        rating: 4.8,
        reviews: 124,
        badge: "Premium"
    },
    {
        id: 2,
        name: "Café Catuaí Vermelho",
        description: "Sabor intenso e aroma marcante do Cerrado Mineiro",
        price: 32.50,
        image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "arabica",
        rating: 4.6,
        reviews: 89,
        badge: "Bestseller"
    },
    {
        id: 3,
        name: "Café Mundo Novo",
        description: "Blend especial com corpo encorpado e baixa acidez",
        price: 29.90,
        image: "https://images.pexels.com/photos/1695056/pexels-photo-1695056.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "robusta",
        rating: 4.4,
        reviews: 67,
        badge: "Tradicional"
    },
    {
        id: 4,
        name: "Café Geisha",
        description: "Variedade rara com perfil floral único e complexo",
        price: 89.90,
        image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "especial",
        rating: 4.9,
        reviews: 156,
        badge: "Exclusivo"
    },
    {
        id: 5,
        name: "Café Acaiá",
        description: "Grãos especiais com notas de chocolate e caramelo",
        price: 42.90,
        image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "arabica",
        rating: 4.7,
        reviews: 98,
        badge: "Gourmet"
    },
    {
        id: 6,
        name: "Café Conilon Capixaba",
        description: "Robusta brasileiro com sabor forte e cremoso",
        price: 27.90,
        image: "https://images.pexels.com/photos/1695056/pexels-photo-1695056.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "robusta",
        rating: 4.3,
        reviews: 73,
        badge: "Regional"
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    products = sampleProducts;
    initializeApp();
});

function initializeApp() {
    loadProducts();
    updateCartUI();
    setupEventListeners();
    setupScrollAnimations();
    checkUserSession();
}

// Gerenciamento de usuário
function checkUserSession() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
    }
}

function updateUserUI() {
    const userBtn = document.getElementById('userBtn');
    const userName = document.getElementById('userName');
    const loggedOutMenu = document.getElementById('loggedOutMenu');
    const loggedInMenu = document.getElementById('loggedInMenu');
    
    if (currentUser) {
        userName.textContent = currentUser.name;
        loggedOutMenu.style.display = 'none';
        loggedInMenu.style.display = 'block';
    } else {
        userName.textContent = 'Entrar';
        loggedOutMenu.style.display = 'block';
        loggedInMenu.style.display = 'none';
    }
}

// Funções de autenticação
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulação de login
    if (email && password) {
        currentUser = {
            id: Date.now(),
            name: email.split('@')[0],
            email: email
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserUI();
        closeModal('loginModal');
        showNotification('Login realizado com sucesso!', 'success');
    } else {
        showNotification('Preencha todos os campos!', 'error');
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    // Simulação de cadastro
    if (name && email && password) {
        currentUser = {
            id: Date.now(),
            name: name,
            email: email
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserUI();
        closeModal('registerModal');
        showNotification('Cadastro realizado com sucesso!', 'success');
    } else {
        showNotification('Preencha todos os campos!', 'error');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserUI();
    toggleUserMenu();
    showNotification('Logout realizado com sucesso!', 'success');
}

// Gerenciamento de produtos
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.dataset.category = product.category;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-badge">${product.badge}</div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">${product.rating} (${product.reviews} avaliações)</span>
            </div>
            <div class="product-footer">
                <span class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Adicionar
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    return starsHTML;
}

// Filtros de produtos
function setupProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            filterProducts(filter);
        });
    });
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
}

// Gerenciamento do carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showNotification(`${product.name} adicionado ao carrinho!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('Item removido do carrinho!', 'info');
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    updateCartCount();
    updateCartSidebar();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

function updateCartSidebar() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        cartTotal.textContent = '0,00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2).replace('.', ',');
}

// Funções de UI
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    userMenu.classList.toggle('active');
}

function toggleMobileMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function switchModal(currentModalId, newModalId) {
    closeModal(currentModalId);
    setTimeout(() => showModal(newModalId), 300);
}

function showLogin() {
    toggleUserMenu();
    showModal('loginModal');
}

function showRegister() {
    toggleUserMenu();
    showModal('registerModal');
}

function showProfile() {
    toggleUserMenu();
    showNotification('Funcionalidade em desenvolvimento!', 'info');
}

function showOrders() {
    toggleUserMenu();
    showNotification('Funcionalidade em desenvolvimento!', 'info');
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    const cartSidebar = document.getElementById('cartSidebar');
    const userMenu = document.getElementById('userMenu');
    
    overlay.classList.remove('active');
    cartSidebar.classList.remove('active');
    userMenu.classList.remove('active');
}

// Notificações
function showNotification(message, type = 'info') {
    // Remove notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Adiciona estilos inline
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        warning: 'fa-exclamation-triangle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        info: '#3498db',
        warning: '#f39c12'
    };
    return colors[type] || colors.info;
}

// Animações de scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observa elementos com classes de animação
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Navegação suave
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Formulários
function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const phone = document.getElementById('contactPhone').value;
    const message = document.getElementById('contactMessage').value;
    
    if (name && email && message) {
        // Simula envio do formulário
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        event.target.reset();
    } else {
        showNotification('Preencha todos os campos obrigatórios!', 'error');
    }
}

function handleNewsletter(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Inscrição realizada com sucesso!', 'success');
        event.target.reset();
    } else {
        showNotification('Digite um email válido!', 'error');
    }
}

// Assinaturas
function selectPlan(planType) {
    if (!currentUser) {
        showNotification('Faça login para assinar um plano!', 'warning');
        showModal('loginModal');
        return;
    }
    
    const plans = {
        basic: { name: 'Básico', price: 49 },
        premium: { name: 'Premium', price: 89 },
        deluxe: { name: 'Deluxe', price: 149 }
    };
    
    const selectedPlan = plans[planType];
    showNotification(`Plano ${selectedPlan.name} selecionado! Redirecionando para pagamento...`, 'success');
    
    // Simula redirecionamento para página de pagamento
    setTimeout(() => {
        showNotification('Funcionalidade de pagamento em desenvolvimento!', 'info');
    }, 2000);
}

// Checkout
function checkout() {
    if (!currentUser) {
        showNotification('Faça login para finalizar a compra!', 'warning');
        showModal('loginModal');
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!', 'warning');
        return;
    }
    
    // Simula processo de checkout
    showNotification('Redirecionando para pagamento...', 'success');
    setTimeout(() => {
        showNotification('Funcionalidade de pagamento em desenvolvimento!', 'info');
    }, 2000);
}

// Event Listeners
function setupEventListeners() {
    // Filtros de produtos
    setupProductFilters();
    
    // Navegação ativa
    setupActiveNavigation();
    
    // Click fora para fechar menus
    document.addEventListener('click', function(event) {
        const userMenu = document.getElementById('userMenu');
        const userBtn = document.getElementById('userBtn');
        
        if (!userMenu.contains(event.target) && !userBtn.contains(event.target)) {
            userMenu.classList.remove('active');
        }
    });
    
    // Fechar modais com ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            closeOverlay();
        }
    });
    
    // Scroll para atualizar navegação ativa
    window.addEventListener('scroll', updateActiveNavigation);
}

function setupActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Remove active de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            // Adiciona active ao link clicado
            this.classList.add('active');
            
            // Scroll suave para a seção
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Adiciona estilos de animação ao CSS
const animationStyles = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;

// Adiciona os estilos ao documento
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);
