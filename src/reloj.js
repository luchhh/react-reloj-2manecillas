class Reloj extends React.Component{

    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.cambiarEstado(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    cambiarEstado(){
        this.setState({date:new Date()})
    }

    render(){
        const segundos = this.state.date.getSeconds()
        const minutos = this.state.date.getMinutes()
        const horas = this.state.date.getHours()

        return (<div className="reloj container">
                    <div className="titulo row">{this.state.date.toTimeString()}</div>
                    <div className="row">
                        <div className="col-4"><ManecillaDigitos digitos={horas}></ManecillaDigitos></div>
                        <div className="col-4"><ManecillaDigitos digitos={minutos}></ManecillaDigitos></div>
                        <div className="col-4"><ManecillaPorcentual porcentaje={segundos/60}></ManecillaPorcentual></div>
                    </div>
                </div>)
    }
}

ReactDOM.render(<Reloj/>, document.getElementById("reloj"))
