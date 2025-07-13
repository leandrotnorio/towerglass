function Button({link, children}){    
    return (
        <button className="my-8"><a href={link} // Usando o link diretamente na tag <a>
      target="_blank" // Abre o link em uma nova aba
      rel="noopener noreferrer" // Segurança ao abrir link em nova aba
      className="px-4 py-2 mb-8 bg-blue-600 text-[20px] font-bold text-white rounded hover:bg-blue-700 transition">
        {children}
        </a></button>
    )
}

export default function ButtonPrimary () {

    return (
        <div>
            <Button link={"https://www.instagram.com/agtvidros"}>Solicitar Orçamento</Button>
        </div>
    )

}