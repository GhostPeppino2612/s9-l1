import { Component } from "react";


class ImageComponent extends Component {
    render() {
        const proprerties = {
            width: "300px",
            height: "200px",
            marginBlock: "3em",
            marginInline: "auto",
            display: "block"
          }
        
        return <img style={proprerties} src={this.props.src} alt={this.props.alt} />
    }
}


export default ImageComponent;