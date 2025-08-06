type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: "What’s included in your web development services?",
    answer:
      'Our full-stack services include custom design, front-end/back-end development, responsive layouts, CMS setup, SEO basics, and launch support. Ongoing maintenance is available too.',
  },
  {
    question: "Do I own my website after it’s built?",
    answer:
      'Yes, once your website is built and delivered, you own all rights to it. We provide you with all the necessary files and documentation.',
  },
  {
    question: 'Do you offer ongoing support or monthly retainers?',
    answer:
      'Yes, it is totally optional. We offer ongoing support and maintenance packages tailored to your needs. This includes regular updates, security checks, and performance optimization.',
  },
  {
    question: 'Can you build a website for my small business or startup?',
    answer:
      'Absolutely. We specialize in creating scalable, professional sites that grow with your business—without the corporate price tag.',
  },
];
