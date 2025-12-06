document.addEventListener('DOMContentLoaded', () => {
    // تحديد عنصر الترويسة (Header)
    const header = document.querySelector('header');

    // دالة تتعامل مع حدث السحب (Scroll)
    window.addEventListener('scroll', () => {
        // إذا قام المستخدم بالسحب لأكثر من 80 بكسل
        if (window.scrollY > 80) { 
            // أضف الكلاس الذي يصغر ويحرك الترويسة
            header.classList.add('scrolled-header');
        } else {
            // أزل الكلاس عندما يكون في أعلى الصفحة
            header.classList.remove('scrolled-header');
        }
    });
});