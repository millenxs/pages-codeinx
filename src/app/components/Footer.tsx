import { Mail, Phone, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-gray-400 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl text-white mb-4">Agência Digital</h3>
            <p className="text-sm">
              Transformando ideias em experiências digitais de sucesso desde 2015.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicos" className="hover:text-lime-400 transition-colors">
                  Criação de Sites
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-lime-400 transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-lime-400 transition-colors">
                  Lojas Virtuais
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-lime-400 transition-colors">
                  SEO & Marketing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-teal-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <a href="mailto:contato@agencia.com" className="hover:text-lime-400 transition-colors">
                  contato@agencia.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <a href="tel:+5511999999999" className="hover:text-lime-400 transition-colors">
                  +55 11 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-teal-400" />
                <a href="#" className="hover:text-lime-400 transition-colors">
                  www.agencia.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
          <p>
            © {currentYear} Agência Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}