// 取得畫面上所有的 FAQ 問題按鈕
const faqQuestions = document.querySelectorAll('.faq-question');

// 為每一個按鈕綁定點擊事件
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // 找到被點擊按鈕的父元素 (.faq-item)
        const faqItem = question.parentElement;

        // 切換 'active' 這個 class 類別 (這會觸發 CSS 的展開動畫)
        faqItem.classList.toggle('active');
    });
});