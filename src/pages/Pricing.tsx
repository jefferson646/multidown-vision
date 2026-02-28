import { Check, ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const faqs = [
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim! No plano mensal, cancele quando quiser sem multa.",
  },
  {
    q: "Quais plataformas são suportadas?",
    a: "Shopee, Amazon e Mercado Livre, com envio automático via WhatsApp.",
  },
  {
    q: "Preciso de cartão de crédito?",
    a: "Aceitamos PIX, cartão de crédito e boleto bancário.",
  },
  {
    q: "Como funciona o suporte prioritário?",
    a: "Assinantes anuais têm atendimento em até 2h via Telegram.",
  },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-start/3 blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Dashboard
        </Link>

        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-foreground">
            Escolha seu <span className="brand-gradient-text">Plano</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Acesse todos os recursos do MultiDown com acesso ilimitado ao WhatsApp automation e Shopee affiliate.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Monthly */}
          <div className="glass-card p-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl font-display font-bold text-foreground">Plano Mensal</h3>
            <div className="mt-4 mb-6">
              <span className="text-muted-foreground text-sm">R$</span>
              <span className="text-5xl font-display font-bold text-foreground ml-1">9,90</span>
              <span className="text-muted-foreground text-sm">/mês</span>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "WhatsApp automation ilimitado",
                "Clonagem de grupos Shopee",
                "Agendamento de posts",
                "Links de afiliado automáticos",
                "Cobrança mensal recorrente",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                  <Check size={16} className="text-whatsapp shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full btn-ghost-brand py-3 rounded-lg">Assinar Mensal</button>
          </div>

          {/* Annual */}
          <div
            className="glass-card p-8 relative border-brand-start/30 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 brand-gradient px-4 py-1 rounded-full text-xs font-display font-bold text-primary-foreground flex items-center gap-1">
              <Star size={12} />
              Mais Popular
            </div>
            <h3 className="text-xl font-display font-bold text-foreground">Plano Anual</h3>
            <div className="mt-4 mb-2">
              <span className="text-muted-foreground text-sm">R$</span>
              <span className="text-5xl font-display font-bold text-foreground ml-1">100</span>
              <span className="text-muted-foreground text-sm">/ano</span>
            </div>
            <p className="text-sm text-whatsapp mb-6">💰 Economize R$18,80 vs mensal</p>
            <ul className="space-y-3 mb-8">
              {[
                "Tudo do plano mensal",
                "12 meses de acesso",
                "Pagamento único (sem recorrência)",
                "Suporte prioritário",
                "Melhor custo-benefício",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                  <Check size={16} className="text-whatsapp shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button className="w-full btn-brand py-3 rounded-lg text-primary-foreground brand-glow">
              Comprar Anual
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Perguntas Frequentes
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between text-sm font-medium text-foreground"
                >
                  {faq.q}
                  <span className={`transition-transform duration-300 text-muted-foreground ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="px-5 text-sm text-muted-foreground">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
