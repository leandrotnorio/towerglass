
function ButtonReq({link, children}){
    return (
        <button onClick={() => alert(link)}>
            {children}
        </button>
    )
}

export default function Buttonprimary () {

    return (
        <div>
            <ButtonReq link=''>Solicitar Orçamento</ButtonReq>
        </div>
    )

}