import spinner from './loader.gif';

const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="loading"/>
            <h1>Loading Data</h1>
        </div>
    )
}

export default Loader
