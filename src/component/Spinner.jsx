
import loading from './Spinner.png';
  setTimeout(() => {
    let spinner = document.querySelector('.spinner');
    spinner.remove();
  }, 2000);
let Spinner = (props)=> {
    return (
      <div className='spinner' style={props.onload ?  {"display":"none"}: {"display":"block"}}>
      <div className="img"><img src={loading} alt='spinner'/></div>
      </div>
    )
}
export default Spinner;