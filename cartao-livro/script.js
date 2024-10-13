document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('touchstart', () => {
        book.classList.add('touch');
    });

    book.addEventListener('touchend', () => {
        book.classList.remove('touch');
    });
});