import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactPage = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-red-600">Contato</h2>
        <p className="text-lg text-gray-700 mb-12">
          Entre em contato conosco ou envie sua mensagem. Ficaremos felizes em
          responder!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">
              <Mail size={40} strokeWidth={2} />
            </span>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contato@otto.com</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">
              <MapPin size={40} strokeWidth={2} />
            </span>
            <h3 className="text-xl font-semibold mb-2">Endereço</h3>
            <p className="text-gray-600">Rua Exemplo 123, Luanda, Angola</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <span className="text-3xl mb-2">
              <Phone size={40} strokeWidth={2} />
            </span>
            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p className="text-gray-600">+244 936 000 021</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="text" placeholder="Nome" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
            </div>
            <Input type="text" placeholder="Assunto" className="w-full" />
            <Textarea placeholder="Mensagem" className="w-full" rows={4} />
            <Button
              type="submit"
              className="w-full mt-4 bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
