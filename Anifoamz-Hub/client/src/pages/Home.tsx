import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  MessageCircle, 
  Gamepad2, 
  Code2, 
  AlertTriangle, 
  Ban, 
  CheckCircle2,
  Users
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  const scrollToRules = () => {
    document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px]" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-10">

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight"
        >
          ANI<span className="text-primary text-glow">FOAMZ</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl font-light"
        >
          Cộng đồng phát triển website <span className="text-white font-medium">(Roblox)</span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <a 
            href="https://discord.gg/GWxDFXZJuT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 group relative px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#5865F2]/25 hover:shadow-[#5865F2]/40 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Tham gia Discord
          </a>
          <button 
            onClick={scrollToRules}
            className="flex-1 px-8 py-4 bg-secondary hover:bg-secondary/80 text-white rounded-xl font-bold transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            Xem Quy Định
          </button>
        </motion.div>

        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] opacity-20 hidden md:block"
        >
          <Code2 className="w-16 h-16 text-primary" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[10%] opacity-20 hidden md:block"
        >
          <Gamepad2 className="w-16 h-16 text-primary" />
        </motion.div>
      </div>

      {/* Rules & Consequences Grid */}
      <Section id="rules" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rules Card */}
          <Card className="bg-secondary/50 border-primary/20 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent" />
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl text-white">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                Quy Định Cộng Đồng
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {[
                  "Không toxic tuyệt đối",
                  "Tôn trọng lẫn nhau",
                  "Không phân biệt chủng tộc và vùng miền (PBCT & PBVM)",
                  "Không gửi nội dung 18+ hay spam tin nhắn",
                  "Không xúc phạm hay chê bai người khác",
                  "Không quảng cáo trái phép",
                  "Tránh spam tài khoản vào nhóm"
                ].map((rule, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-lg">{rule}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Consequences Card */}
          <Card className="bg-gradient-to-br from-red-950/20 to-secondary/50 border-red-500/20 backdrop-blur-sm overflow-hidden group hover:border-red-500/50 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent" />
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl text-white">
                <ShieldAlert className="w-8 h-8 text-red-500" />
                Xử Lý Vi Phạm
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/15 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    <h4 className="font-bold text-lg text-white">Lần 1: Cảnh cáo</h4>
                  </div>
                  <p className="text-gray-400">Nhẹ sẽ chỉ bị cảnh báo hoặc hạn chế (mute) trong 5 phút để bình tĩnh lại.</p>
                </div>

                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/15 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Ban className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-lg text-white">Lần 2: Hạn chế</h4>
                  </div>
                  <p className="text-gray-400">Nặng sẽ hạn chế một tuần, đi kèm với việc sẽ được admin ưu ái giám sát hoạt động 24/7.</p>
                </div>

                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/15 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                    <h4 className="font-bold text-lg text-white">Lần 3: Trục xuất</h4>
                  </div>
                  <p className="text-gray-400">Rất nặng. Trực tiếp kick thẳng khỏi server hoặc ban vĩnh viễn không thể quay lại.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* About Section */}
      <Section className="relative z-10">
        <div className="bg-secondary/30 border border-white/5 rounded-2xl p-8 md:p-12 text-center backdrop-blur-md">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Về Anifoamz</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Đây là cộng đồng phát triển website liên quan tới <span className="text-primary font-semibold">Roblox</span>... 
              hoặc các dự án sáng tạo khác. Tất nhiên website vẫn là chủ yếu, hỗ trợ player và các nhà phát triển.
            </p>
            <p>
              Hơn hết, vì là cộng đồng nên không có tác phẩm hay sản phẩm riêng nào. Các sản phẩm chủ yếu là từ thành viên 
              hoặc nhóm riêng trong Anifoamz.
            </p>
            <p>
              Anifoamz không chỉ tập trung ở việc tạo website, nó vẫn có thể hoạt động như một nhóm trao đổi (exchange) 
              như bao nhóm Roblox khác.
            </p>
          </div>
        </div>
      </Section>

      {/* Footer CTA */}
      <footer className="relative z-10 py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Sẵn sàng tham gia cùng chúng tôi?
          </h2>
          <a 
            href="https://discord.gg/GWxDFXZJuT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-xl font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            Tham gia Discord Ngay
          </a>
          <p className="mt-8 text-gray-500 text-sm">
            © {new Date().getFullYear()} Anifoamz Community. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
