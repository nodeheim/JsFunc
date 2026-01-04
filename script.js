// FAQ 드롭다운 기능
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            // 모든 FAQ 아이템 닫기
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });

            // 클릭한 아이템이 활성화되어 있지 않았다면 열기
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });

    // 키보드 접근성 추가
    faqQuestions.forEach((question, index) => {
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextQuestion = faqQuestions[index + 1];
                if (nextQuestion) {
                    nextQuestion.focus();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevQuestion = faqQuestions[index - 1];
                if (prevQuestion) {
                    prevQuestion.focus();
                }
            }
        });
    });
});
