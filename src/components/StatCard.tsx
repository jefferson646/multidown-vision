import { type LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "default" | "shopee" | "amazon" | "ml" | "whatsapp";
  delay?: number;
}

const variantStyles: Record<string, string> = {
  default: "border-glass-border",
  shopee: "border-shopee/20",
  amazon: "border-amazon/20",
  ml: "border-ml/20",
  whatsapp: "border-whatsapp/20",
};

const iconBg: Record<string, string> = {
  default: "bg-brand-start/10 text-brand-start",
  shopee: "bg-shopee/10 text-shopee",
  amazon: "bg-amazon/10 text-amazon",
  ml: "bg-ml/10 text-ml",
  whatsapp: "bg-whatsapp/10 text-whatsapp",
};

const StatCard = ({ title, value, subtitle, icon: Icon, variant = "default", delay = 0 }: StatCardProps) => (
  <div
    className={`glass-card-hover p-5 ${variantStyles[variant]} opacity-0 animate-fade-in-up`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-muted-foreground font-medium">{title}</p>
        <p className="text-2xl font-display font-bold text-foreground mt-1">{value}</p>
        {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      <div className={`p-2.5 rounded-lg ${iconBg[variant]}`}>
        <Icon size={20} />
      </div>
    </div>
  </div>
);

export default StatCard;
