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
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div className="opacity-0 animate-fade-in-up">
        <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
          Bem-vindo ao <span className="brand-gradient-text">MultiDown</span>
        </h1>
        <p className="text-muted-foreground mt-1">
          Gerencie suas automações de marketing em um só lugar
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Posts Agendados"
          value="24"
          subtitle="8 para hoje"
          icon={Calendar}
          variant="default"
          delay={100}
        />
        <StatCard
          title="Downloads"
          value="156"
          subtitle="Produtos baixados"
          icon={Download}
          variant="ml"
          delay={200}
        />
        <StatCard
          title="WhatsApp"
          value="Conectado"
          subtitle="3 grupos ativos"
          icon={MessageSquare}
          variant="whatsapp"
          delay={300}
        />
        <StatCard
          title="Comissões"
          value="R$ 342"
          subtitle="Este mês"
          icon={TrendingUp}
          variant="shopee"
          delay={400}
        />
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass-card p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">Atividade Recente</h2>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <item.icon size={18} className={statusColors[item.status]} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate">{item.text}</p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <h2 className="text-lg font-display font-semibold text-foreground mb-4">Ações Rápidas</h2>
          <div className="space-y-3">
            <button className="w-full btn-brand py-3 rounded-lg text-primary-foreground text-sm flex items-center justify-center gap-2">
              <ShoppingCart size={16} />
              Buscar Produtos
            </button>
            <button className="w-full btn-ghost-brand py-3 rounded-lg text-sm flex items-center justify-center gap-2">
              <Calendar size={16} />
              Agendar Post
            </button>
            <button className="w-full btn-ghost-brand py-3 rounded-lg text-sm flex items-center justify-center gap-2">
              <MessageSquare size={16} />
              Conectar WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Platform stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
        <div className="glass-card p-5 border-shopee/20">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-shopee" />
            <span className="text-sm font-display font-semibold text-foreground">Shopee</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">47</p>
          <p className="text-xs text-muted-foreground">Produtos ativos</p>
        </div>
        <div className="glass-card p-5 border-amazon/20">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-amazon" />
            <span className="text-sm font-display font-semibold text-foreground">Amazon</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">23</p>
          <p className="text-xs text-muted-foreground">Produtos ativos</p>
        </div>
        <div className="glass-card p-5 border-ml/20">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-ml" />
            <span className="text-sm font-display font-semibold text-foreground">Mercado Livre</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">89</p>
          <p className="text-xs text-muted-foreground">Produtos ativos</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
