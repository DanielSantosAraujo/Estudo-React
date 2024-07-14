export default props => {

    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min) + min)
    return (
        <div>
            <h2 className="font-bold">valor Aleatorio</h2>
            <div className="flex items-center justify-center"><p>Valor mínimo:</p> {min}</div>
            <div className="flex items-center justify-center"><p>Valor máximo:</p> {max}</div>
            <div className="flex items-center justify-center"><p>Valor Escolhido:</p> {aleatorio}</div>
            
        </div>
    )
}