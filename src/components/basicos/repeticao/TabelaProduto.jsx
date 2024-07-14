import tabelaProdutos from '../../../data/produtos'
export default (props) => {

    const produtosTab = tabelaProdutos.map((produto) => {
        return (
            <tr key={produto.id}>
                {produto.id}) {produto.nome} -- {produto.preco}
            </tr>
        )
    })

    return(
        <div className='flex  justify-center text-start'>
            <table>
                {produtosTab}
            </table>
        </div>
    )
}