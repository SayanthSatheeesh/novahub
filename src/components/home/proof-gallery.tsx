export function ProofGallery() {
  return (
    <section className="py-16 bg-white dark:bg-[#0F0F23]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Real Customers, Real Results</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Screenshots from our WhatsApp support chats proving our instant delivery and reliability.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[9/16] bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center p-4">
              <div className="w-full h-full border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl flex items-center justify-center text-slate-400 dark:text-slate-500 text-sm font-medium text-center">
                WhatsApp<br/>Screenshot<br/>Placeholder {i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
