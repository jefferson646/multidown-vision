import {
  Calendar,
  Download,
  MessageSquare,
  TrendingUp,
  ShoppingCart,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import StatCard from "@/components/StatCard";
import { ShopeeLogo, AmazonLogo, MercadoLivreLogo } from "@/components/PlatformLogos";

const recentActivity = [
  { icon: CheckCircle2, text: "Post agendado para Shopee enviado com sucesso", time: "há 2 min", status: "success" },
  { icon: Clock, text: "3 posts aguardando envio via WhatsApp", time: "há 15 min", status: "pending" },
  { icon: Download, text: "12 produtos baixados do Mercado Livre", time: "há 1h", status: "success" },
  { icon: AlertCircle, text: "Falha ao conectar WhatsApp - reconecte", time: "há 2h", status: "error" },
];

const statusColors: Record<string, string> = {
  success: "text-whatsapp",
  pending: "text-amazon",
  error: "text-destructive",
};

const Dashboard = () => {
  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div className="opacity-0 animate-fade-in-up">
        <h1 className="text-2xl font-display font-bold text-foreground">
          Bem-vindo ao <span className="brand-gradient-text">MultiDown</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Gerencie suas automações de marketing em um só lugar
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard title="Agendados" value="24" subtitle="8 para hoje" icon={Calendar} variant="default" delay={100} />
        <StatCard title="Downloads" value="156" subtitle="Produtos baixados" icon={Download} variant="ml" delay={150} />
        <StatCard title="WhatsApp" value="Conectado" subtitle="3 grupos ativos" icon={MessageSquare} variant="whatsapp" delay={200} />
        <StatCard title="Comissões" value="R$ 342" subtitle="Este mês" icon={TrendingUp} variant="shopee" delay={250} />
      </div>

      {/* Platform cards with logos */}
      <div className="grid grid-cols-3 gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
        <div className="glass-card p-4 border-shopee/20 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-shopee/10 text-shopee shrink-0">
            <ShopeeLogo className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Shopee</p>
            <p className="text-lg font-display font-bold text-foreground">47</p>
          </div>
        </div>
        <div className="glass-card p-4 border-amazon/20 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amazon/10 text-amazon shrink-0">
            <AmazonLogo className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Amazon</p>
            <p className="text-lg font-display font-bold text-foreground">23</p>
          </div>
        </div>
        <div className="glass-card p-4 border-ml/20 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-ml/10 text-ml shrink-0">
            <MercadoLivreLogo className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Mercado Livre</p>
            <p className="text-lg font-display font-bold text-foreground">89</p>
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass-card p-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <h2 className="text-sm font-display font-semibold text-foreground mb-3">Atividade Recente</h2>
          <div className="space-y-1">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-accent/50 transition-colors">
                <item.icon size={16} className={statusColors[item.status]} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate">{item.text}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "450ms" }}>
          <h2 className="text-sm font-display font-semibold text-foreground mb-3">Ações Rápidas</h2>
          <div className="space-y-2">
            <button className="w-full btn-brand py-2.5 rounded-lg text-primary-foreground text-sm flex items-center justify-center gap-2">
              <ShoppingCart size={15} />
              Buscar Produtos
            </button>
            <button className="w-full btn-ghost-brand py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">
              <Calendar size={15} />
              Agendar Post
            </button>
            <button className="w-full btn-ghost-brand py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">
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
