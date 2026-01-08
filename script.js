/**
 * FAQ Accordion Component
 * Manages the expand/collapse functionality of FAQ items with keyboard accessibility
 */

class FAQAccordion {
    constructor(containerSelector = '.faq-container') {
        this.container = document.querySelector(containerSelector);
        this.faqQuestions = [];
        this.init();
    }

    init() {
        if (!this.container) {
            console.error('FAQ container not found');
            return;
        }

        this.faqQuestions = Array.from(this.container.querySelectorAll('.faq-question'));
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.faqQuestions.forEach((question, index) => {
            question.addEventListener('click', () => this.handleClick(question));
            question.addEventListener('keydown', (e) => this.handleKeydown(e, question, index));
        });
    }

    handleClick(clickedQuestion) {
        const answer = clickedQuestion.nextElementSibling;
        const isCurrentlyActive = clickedQuestion.classList.contains('active');

        // Close all FAQ items
        this.closeAllFAQItems();

        // Open the clicked item if it wasn't already active
        if (!isCurrentlyActive) {
            this.openFAQItem(clickedQuestion, answer);
        }
    }

    handleKeydown(event, question, index) {
        const { key } = event;

        switch (key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                question.click();
                break;

            case 'ArrowDown':
                event.preventDefault();
                this.focusQuestion(index + 1);
                break;

            case 'ArrowUp':
                event.preventDefault();
                this.focusQuestion(index - 1);
                break;

            case 'Home':
                event.preventDefault();
                this.focusQuestion(0);
                break;

            case 'End':
                event.preventDefault();
                this.focusQuestion(this.faqQuestions.length - 1);
                break;

            default:
                break;
        }
    }

    focusQuestion(index) {
        if (index >= 0 && index < this.faqQuestions.length) {
            this.faqQuestions[index].focus();
        }
    }

    openFAQItem(question, answer) {
        question.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        answer.classList.add('active');
    }

    closeFAQItem(question, answer) {
        question.classList.remove('active');
        question.setAttribute('aria-expanded', 'false');
        answer.classList.remove('active');
    }

    closeAllFAQItems() {
        this.faqQuestions.forEach(question => {
            const answer = question.nextElementSibling;
            this.closeFAQItem(question, answer);
        });
    }

    // Public method to programmatically open a specific FAQ
    openFAQByIndex(index) {
        if (index >= 0 && index < this.faqQuestions.length) {
            const question = this.faqQuestions[index];
            const answer = question.nextElementSibling;
            this.closeAllFAQItems();
            this.openFAQItem(question, answer);
        }
    }

    // Public method to close all FAQs
    closeAll() {
        this.closeAllFAQItems();
    }
}

// Initialize FAQ Accordion when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const faqAccordion = new FAQAccordion();

    // Make accordion globally accessible for testing/debugging
    window.faqAccordion = faqAccordion;
});
