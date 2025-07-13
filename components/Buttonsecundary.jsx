function Button({ children}){    
    return (
        <button type="submit" rel="noopener noreferrer" className="px-4 py-2 mb-8 bg-blue-600 text-[20px] font-bold text-white rounded hover:bg-blue-700 transition">{children}</button>
    )
}

export default function ButtonSecundary () {

    return (
        <div>
            <Button>Solicitar Orçamento</Button>
        </div>
    )

}