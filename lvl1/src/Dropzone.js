import React from 'react';
import './App.css';
import Dropzone from 'react-dropzone'

export default class myDropzone extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loaded: 0
    }
  }

  render(){
    console.log("loaded: ", this.state.loaded)
    if(this.state.loaded.length === 0){
      loadedText = "Veuillez ne choisir qu'un seul fichier."
    }
    if(this.state.loaded.length === 1){
      loadedText = "Vous avez chargé « " + this.state.loaded[0].name + " »."
    }
    if(this.state.loaded === 0){
      var loadedText = "Vous n'avez rien chargé pour l'instant."
    }

    return(
      <div>
        <div style={styles.topText}>
          {loadedText}
        </div>
        <Dropzone multiple={false} onDrop={
          acceptedFiles => this.setState({
            loaded: acceptedFiles
          })
        }>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()} style={styles.drop}>
              <input {...getInputProps()} />
                <div style={styles.dropText}>Glissez-déposez un fichier ici, <br/> ou cliquez pour choisir un fichier.</div>
            </div>
          </section>
        )}
        </Dropzone>
      </div>
    )
  }
}

const styles = {
  drop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    height: "42vh",
    width: "80vw",
    backgroundColor:"#F5F5F5",
    color: "#6e6e6e"
  },
  dropText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    fontSize: "calc(8px + 2vmin)",
  },
  topText:{
    color: "#6e6e6e",
    marginBottom: "10px",
  }
}