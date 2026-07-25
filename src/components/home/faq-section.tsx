import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I receive my product after purchase?",
    answer: "Immediately after your payment is successful, you will receive an email and WhatsApp message with your license key, account details, and a step-by-step installation guide. Delivery is instant and automated 24/7."
  },
  {
    question: "Are these licenses genuine?",
    answer: "Yes, 100%. We source our software directly from authorized corporate distributors in bulk, which allows us to offer them at a significant discount. They are fully legitimate and can be linked to your own email in most cases."
  },
  {
    question: "What if I face an issue during installation?",
    answer: "We offer 24/7 priority support via WhatsApp. If you face any issues, our technical team will guide you through the process or resolve it for you via remote support (AnyDesk/TeamViewer) if needed."
  },
  {
    question: "Is it a lifetime license or subscription?",
    answer: "This depends on the specific product. Windows and Office are typically lifetime licenses for 1 PC. Tools like ChatGPT Plus or Canva Pro are billed per month or year. Please check the specific product description before purchasing."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, if the product key is found to be defective or doesn't work as advertised, we offer a full replacement or refund within 7 days of purchase, provided our technical team verifies the issue."
  }
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#16163A]/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400">Everything you need to know about purchasing from NovaHub.</p>
        </div>
        
        <Accordion className="w-full bg-white dark:bg-[#1E1E4A] rounded-2xl p-2 md:p-6 shadow-sm border border-slate-200 dark:border-white/5">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-slate-100 dark:border-b-white/10 last:border-0">
              <AccordionTrigger className="text-left font-semibold text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
