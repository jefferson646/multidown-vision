import {
  Calendar,
  Download,
  MessageSquare,
  TrendingUp,
  ShoppingCart,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Package,
  Send,
} from "lucide-react";
import { ShopeeLogo, AmazonLogo, MercadoLivreLogo } from "@/components/PlatformLogos";

const Dashboard = () => {
  return (
    <div className="space-y-5 max-w-5xl">
      {/* Greeting */}
      <div className="opacity-0 animate-fade-in-up">
        <p className="text-muted-foreground text-sm">Painel geral</p>
        <h1 className="text-xl font-display font-semibold text-foreground mt-0.5">
          Resumo de hoje
        </h1>
      </div>

      {/* Metric strip */}
      <div className="grid grid-cols-4 gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
        {[
          { label: "Agendados", value: "24", icon: Calendar, sub: "8 p/ hoje" },
          { label: "Downloads", value: "156", icon: Package, sub: "este mês" },
          { label: "WhatsApp", value: "3", icon: Send, sub: "grupos ativos" },
          { label: "Comissões", value: "R$342", icon: TrendingUp, sub: "este mês" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl bg-card/50 border border-border p-4 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">{m.label}</span>
              <m.icon size={14} className="text-muted-foreground" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">{m.value}</span>
            <span className="text-[11px] text-muted-foreground">{m.sub}</span>
          </div>
        ))}
      </div>

      {/* Platforms */}
      <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Plataformas</p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: "Shopee", count: "47 produtos", Logo: ShopeeLogo, color: "text-shopee", border: "border-shopee/15", bg: "bg-shopee/5" },
            { name: "Amazon", count: "23 produtos", Logo: AmazonLogo, color: "text-amazon", border: "border-amazon/15", bg: "bg-amazon/5" },
            { name: "Mercado Livre", count: "89 produtos", Logo: MercadoLivreLogo, color: "text-ml", border: "border-ml/15", bg: "bg-ml/5" },
          ].map((p) => (
            <div key={p.name} className={`rounded-xl bg-card/40 border ${p.border} p-4 flex items-center gap-3 hover:bg-card/60 transition-colors cursor-pointer group`}>
              <div className={`w-9 h-9 rounded-lg ${p.bg} flex items-center justify-center ${p.color}`}>
                <p.Logo className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.count}</p>
              </div>
              <ArrowUpRight size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Activity */}
        <div className="lg:col-span-3 rounded-xl bg-card/40 border border-border p-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Atividade recente</p>
          <div className="space-y-0.5">
            {[
              { icon: CheckCircle2, text: "Post agendado para Shopee enviado", time: "2 min", color: "text-whatsapp" },
              { icon: Clock, text: "3 posts aguardando envio via WhatsApp", time: "15 min", color: "text-amazon" },
              { icon: Download, text: "12 produtos baixados do Mercado Livre", time: "1h", color: "text-ml" },
              { icon: AlertCircle, text: "Falha ao conectar WhatsApp — reconecte", time: "2h", color: "text-destructive" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-accent/30 transition-colors">
                <item.icon size={15} className={item.color} />
                <p className="text-sm text-foreground flex-1 truncate">{item.text}</p>
                <span className="text-[11px] text-muted-foreground whitespace-nowrap">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="lg:col-span-2 rounded-xl bg-card/40 border border-border p-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "350ms" }}>
          <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Ações rápidas</p>
          <div className="space-y-2">
            <button className="w-full btn-brand py-2.5 rounded-lg text-primary-foreground text-sm flex items-center justify-center gap-2">
              <ShoppingCart size={15} />
              Buscar Produtos
            </button>
            <button className="w-full rounded-lg border border-border bg-card/60 py-2.5 text-sm text-foreground flex items-center justify-center gap-2 hover:bg-accent/40 transition-colors">
              <Calendar size={15} />
              Agendar Post
            </button>
            <button className="w-full rounded-lg border border-border bg-card/60 py-2.5 text-sm text-foreground flex items-center justify-center gap-2 hover:bg-accent/40 transition-colors">
              <MessageSquare size={15} />
              Conectar WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
