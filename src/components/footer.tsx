type FooterProps = {
  className?: string;
};

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`bg-gray-100 text-center text-gray-700 p-6 ${className || ""}`}>
      <p>Desenvolvido por Juelson Júnior. Todos os Direitos Reservados.</p>
    </footer>
  );
};
