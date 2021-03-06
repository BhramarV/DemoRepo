// import "../styles/EmployeeDetailsComponentStyle.css";

export default function displaydata(props) {
    var styleObject = {
        containerStyle: {
            width: "18rem",
            margin: "20px",
            display: "inline-block"
        }, headerStyling: {
            color: "aqua"
        }, buttonStyle: {
            color: "red"
        }
    };

    return (
        <div className="card" style={styleObject.containerStyle}>
            {/* <img height={200} width={300} src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} /> */}
            <div className="card-body">
                <div>
                    <div>
                        {props.detail && <p className="card-text">{props.detail.pricecurrent}</p>}
                        {props.detail && <p className="card-text">{props.detail.pricechange}</p>}
                        {props.detail && <p className="card-text">{props.detail.pricepercentchange}</p>}
                        {props.detail && <p className="card-text">{props.detail.priceprevclose}</p>}
                        {/* {props.detail && <p className="card-text">{props.detail.data['5DaysAvg']}</p>} */}
                    </div>
                </div>
            </div>
        </div>
    )
    debugger;
}