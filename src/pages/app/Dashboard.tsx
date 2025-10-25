import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use.toast";
import { Ticket, LogOut, Plus, Bell } from "lucide-react";

interface TicketStats {
  total: number;
  open: number;
  in_progress: number;
  closed: number;
}

const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null);
  const [stats, setStats] = useState<TicketStats>({
    total: 0,
    open: 0,
    in_progress: 0,
    closed: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
        
        if (!session) {
          navigate("/login");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      
      if (!session) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchStats();
    }
  }, [user]);

  const fetchStats = async () => {
    if (!user?.id) return;
    try {
      const { data: tickets, error } = await supabase
        .from("tickets")
        .select("status")
        .eq("user_id", user?.id);

      if (error) throw error;

      const statsData: TicketStats = {
        total: tickets?.length || 0,
        open: tickets?.filter((t) => t.status === "open").length || 0,
        in_progress: tickets?.filter((t) => t.status === "in_progress").length || 0,
        closed: tickets?.filter((t) => t.status === "closed").length || 0,
      };

      setStats(statsData);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load statistics",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Logged out",
        description: "Successfully logged out",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const avatarUrl = (user as any)?.user_metadata?.avatar_url || (user as any)?.user_metadata?.avatar || null;
  const displayName = (user as any)?.user_metadata?.full_name || (user as any)?.user_metadata?.name || user?.email || "User";
  const initials = displayName
    .split(" ")
    .map((n: string) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const statCards = [
    { title: "Total Tickets", value: stats.total, icon: Ticket, color: "text-primary" },
    { title: "Open", value: stats.open, icon: Ticket, color: "text-green-500" },
    { title: "In Progress", value: stats.in_progress, icon: Ticket, color: "text-amber-500" },
    { title: "Closed", value: stats.closed, icon: Ticket, color: "text-muted-foreground" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-[1440px]">
          <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            Ticketr
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={displayName}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-amber-400 flex items-center justify-center text-xs font-semibold text-white">
                  {initials}
                </div>
              )}
              <span className="text-sm text-muted-foreground hidden sm:inline">{user?.email}</span>
            </div>
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={() => toast({ title: "Coming soon!", description: "Notifications will be available soon." })}
              >
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-amber-400 text-[10px] font-medium flex items-center justify-center text-white">
                  2
                </span>
              </Button>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-[1440px]">
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center ">
            <div>
              <h2 className="text-3xl font-bold">Dashboard</h2>
              <p className="text-muted-foreground mt-1">
                Welcome back! Here's your ticket overview
              </p>
            </div>
            <Button onClick={() => navigate("/tickets")} className="shadow-glow m-10 lg:m-0 md:m-0">
              <Plus className="h-4 w-4 mr-2" />
              Manage Tickets
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="gradient-card hover:shadow-lg transition-smooth animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="gradient-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={() => navigate("/tickets")}
                className="w-full justify-start"
                variant="outline"
              >
                <Ticket className="h-4 w-4 mr-2" />
                Go to Ticket Management
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
