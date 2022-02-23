import { Component } from "react";
import ShareListComponent from "./SBIShareListComponent";

export default function AccountDetailsComponent(props) {

    var styleObject =  {
        containerStyle: {
            width: "18rem", 
            margin: "20px", 
            display: "inline-block"
        }
    };

    return (
          <div className="card" style={styleObject.containerStyle}>
              <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name} />
              <div className="card-body">
                  <div>
                      <div>
                        <p className="card-text">{props.data.LP} <br/> <b>{props.code}</b> <br/> {props.message} <br/> {props.data.pricecurrent}</p>
                    </div>
                    {/* <input type="button" className="btn btn-primary" value="Delete" onClick={props.accountNumber}/> */}
                  </div>
              </div>
          </div>
    )
}