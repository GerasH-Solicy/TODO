import '../styles/ButtonStyle.scss'

function Button(props){
    return <button className='myBtn' style={{ backgroundColor: props.bgColor, color: props.color }} onClick={props.onClick}>{props.text}</button>;
}
export default Button;