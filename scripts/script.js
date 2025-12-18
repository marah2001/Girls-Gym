// بيانات الموقع
const apparelData = [
    { name: "طقم اليوغا البنفسجي", price: "299 SAR", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500" },
    { name: "تيشرت الجري السريع", price: "150 SAR", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500" }
];

// 1. نظام التنقل (SPA Router)
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`${pageId}-page`).classList.add('active');
}

// 2. تبديل السمة
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

// 3. نظام الترجمة
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'ar';

const dictionary = {
    ar: {
        'nav-apparel': 'الملابس', 'nav-nutrition': 'التغذية', 'nav-courses': 'الكورسات',
        'nav-events': 'الفعاليات', 'nav-community': 'المجتمع', 'btn-login': 'دخول',
        'apparel-h': 'مجموعة الأداء', 'apparel-p': 'أناقة وقوة في كل تمرين',
        'nutrition-h': 'تغذية البطلات', 'forum-placeholder': 'شاركي قصتكِ...',
        'forum-btn': 'نشر'
    },
    en: {
        'nav-apparel': 'Apparel', 'nav-nutrition': 'Nutrition', 'nav-courses': 'Courses',
        'nav-events': 'Events', 'nav-community': 'Community', 'btn-login': 'Login',
        'apparel-h': 'Performance Collection', 'apparel-p': 'Elegance and power in every move',
        'nutrition-h': 'Athletes Nutrition', 'forum-placeholder': 'Share your story...',
        'forum-btn': 'Post'
    }
};

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    langToggle.innerText = currentLang === 'ar' ? 'EN' : 'AR';
    
    document.querySelectorAll('[data-key]').forEach(el => {
        el.innerText = dictionary[currentLang][el.getAttribute('data-key')];
        if(el.tagName === 'TEXTAREA') el.placeholder = dictionary[currentLang][el.getAttribute('data-key')];
    });
});

// 4. تحميل المنتجات برمجياً
function renderApparel() {
    const grid = document.getElementById('apparel-grid');
    apparelData.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="${item.name}">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p style="color:var(--primary); font-weight:bold">${item.price}</p>
                    <button class="btn-action" style="margin-top:10px">شراء الآن</button>
                </div>
            </div>
        `;
    });
}

document.addEventListener('DOMContentLoaded', renderApparel);