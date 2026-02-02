// Dữ liệu menu cho từng loại sản phẩm
const menuData = {
    food: [
        { name: 'Khoai tây chiên', price: '15.000đ' },
        { name: 'Xúc xích nướng', price: '12.000đ' },
        { name: 'Xúc xích chiên', price: '35.000đ' },
        { name: 'Ngô nướng', price: '30.000đ' },
        { name: 'Ngô luộc', price: '35.000đ' },
        { name: 'Bánh tráng nướng', price: '5.000đ' },
        { name: 'Hoa quả lắc', price: '10.000đ' },
        { name: 'Hoa quả chấm muốn', price: '5.000đ' },
        { name: 'Bánh khoai', price: '5.000đ'},
        { name: 'Bánh Ngô', price: '5.000đ'},
        { name: 'Bánh Chuối', price: '5.000đ'},
        { name: 'Trứng nướng', price: '5.000đ'},
        { name: 'Khoai môn lệ phố', price: '5.000đ'},
        { name: 'Thịt nướng', price: '5.000đ'},
        { name: 'Rau củ', price: '5.000đ'}
    ],
    drink: [
        { name: 'Trà tắc', price: '5.000đ' },
        { name: 'Nước ngọt', price: '10.000đ' },
        { name: 'Sữa chua dầm hoa quả', price: '25.000đ' }
        // { name: 'Soda', price: '15.000đ' }
    ]
};

// Lấy các elements
const modal = document.getElementById('menuModal');
const modalTitle = document.getElementById('modalTitle');
const menuList = document.getElementById('menuList');
const closeBtn = document.querySelector('.close-btn');

// Hàm hiển thị menu
function showMenu(category, title) {
    modalTitle.textContent = '🍽️ ' + title;
    menuList.innerHTML = '';
    
    const items = menuData[category] || [];
    
    if (items.length === 0) {
        menuList.innerHTML = '<p style="text-align: center; color: #999;">Đang cập nhật menu...</p>';
    } else {
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <span class="item-name">${item.name}</span>
                <span class="item-price">${item.price}</span>
            `;
            menuList.appendChild(menuItem);
        });
    }
    
    modal.style.display = 'block';
}

// Đóng modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners
closeBtn.addEventListener('click', closeModal);

// Click bên ngoài modal để đóng
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Hiệu ứng khi trang web được tải
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Chào mừng đến với Gian Hàng Tết 10A3! 🎉');
    
    // Thêm hiệu ứng fade in cho các sản phẩm
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        // Thêm event listener cho mỗi card
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const title = this.querySelector('.product-name').textContent;
            
            if (category) {
                showMenu(category, title);
            }
        });
    });
});

// Keyboard support - ESC để đóng modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});