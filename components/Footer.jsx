export default function Footer() {
  return (
    <footer id="contato" className="bg-blue-800 py-4">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="mt-1">Contato: contato@engenhariavidros.com</p>
        <p>&copy; {new Date().getFullYear()} Tower Glass. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
