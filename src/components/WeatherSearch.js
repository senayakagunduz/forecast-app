import "../styles/main.css"

const WeatherSearch = (props)=>{
    return (
        <form className="home" onClick={props.api_call}>
            <h1 className='title animate__animated animate__bounce'>Weather App</h1>
            <div className="container">
                <div className="row">
                        <select id='city' className='dropdown col-lg-6 col-md-8 col-sm-12'>
                            <option className='shadow-sm p-3 mb-5 bg-body rounded'></option>
                        </select>
                </div>
            </div>
        </form>
      )
}
 


export default WeatherSearch