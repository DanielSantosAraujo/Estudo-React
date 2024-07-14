export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }

    return (
        <div className="bg-green-700 border-[3px] rounded-[10px] border-solid m-[10px] flex flex-col max-w-[500px] min-w-[500px]" style={cardStyle}>
            <div className="space-y-[5px] space-x-0 flex justify-center">
                {props.titulo}
            </div>
            <div className="flex-1 bg-[#fff] text-black p-[10px]">
                {props.children}
            </div>
        </div>
    )
}