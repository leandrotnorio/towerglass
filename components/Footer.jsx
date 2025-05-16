export default function Footer() {
  return (
    <footer id="contato" className="bg-blue-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Tower Glass. Todos os direitos reservados.</p>
        <p className="mt-1">Contato: contato@engenhariavidros.com</p>
      </div>
    </footer>
  );
}
