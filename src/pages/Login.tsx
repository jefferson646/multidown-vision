import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Send, Chrome } from "lucide-react";
import MultiDownLogo from "@/components/MultiDownLogo";

type TabType = "telegram" | "email" | "google";

const Login = () => {
  const [activeTab, setActiveTab] = useState<TabType>("telegram");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: "telegram", label: "Telegram", icon: <Send size={16} /> },
    { id: "email", label: "Email", icon: <Mail size={16} /> },
    { id: "google", label: "Google", icon: <Chrome size={16} /> },
  ];

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-start/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-end/5 blur-[120px]" />
      </div>

      <div className="glass-card w-full max-w-md p-8 animate-scale-fade-in relative z-10">
        <div className="mb-8">
          <MultiDownLogo size="lg" />
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-muted/50 rounded-lg p-1 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-md text-sm font-display font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "brand-gradient text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Telegram Tab */}
        {activeTab === "telegram" && (
          <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDuration: "0.3s" }}>
            <p className="text-muted-foreground text-sm">
              Entre com sua conta do Telegram para acessar o MultiDown.
            </p>
            <button className="w-full py-3 rounded-lg font-display font-semibold text-primary-foreground bg-telegram hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2">
              <Send size={18} />
              Entrar com Telegram
            </button>
          </div>
        )}

        {/* Email Tab */}
        {activeTab === "email" && (
          <form onSubmit={handleEmailLogin} className="space-y-4 animate-fade-in-up" style={{ animationDuration: "0.3s" }}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full bg-input border border-glass-border rounded-lg py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Senha</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-input border border-glass-border rounded-lg py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all"
                />
              </div>
            </div>
            <button type="submit" className="w-full btn-brand py-3 rounded-lg text-primary-foreground">
              Entrar
            </button>
            <div className="flex justify-between text-xs">
              <Link to="/register" className="text-brand-start hover:text-brand-end transition-colors">
                Criar conta
              </Link>
              <Link to="/forgot-password" className="text-muted-foreground hover:text-foreground transition-colors">
                Esqueci a senha
              </Link>
            </div>
          </form>
        )}

        {/* Google Tab */}
        {activeTab === "google" && (
          <div className="text-center space-y-4 animate-fade-in-up" style={{ animationDuration: "0.3s" }}>
            <p className="text-muted-foreground text-sm">
              Entre com sua conta Google de forma rápida e segura.
            </p>
            <button className="w-full py-3 rounded-lg font-display font-semibold border border-glass-border bg-secondary text-foreground hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2">
              <Chrome size={18} />
              Entrar com Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
