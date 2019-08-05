import React from 'react';
import './App.css';
import Dropzone from 'react-dropzone'
import { Button } from 'reactstrap';


export default class myDropzone extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loadedFile: null,
      payloadFile: null,
      success: false,
      error: false,
    }
  }

  render(){
    var loadedText = null
    var displaySendButton = false
    var displayOkButton = false
    var displayErrorButton = false
    var displayDropzone = true
    if(this.state.loadedFile && this.state.loadedFile.length === 0){
      loadedText = "Veuillez ne choisir qu'un seul fichier."
      displaySendButton = false
    }
    if(this.state.loadedFile && this.state.loadedFile.length === 1){
      loadedText = "Vous avez chargé « " + this.state.loadedFile[0].name + " »."      
      displaySendButton = true
    }
    if(!this.state.loadedFile){
      loadedText = "Vous n'avez rien chargé pour l'instant."
      displaySendButton = false
    }
    if(this.state.success){
      loadedText = "Merci ! Nous avons bien reçu votre fichier."
      displaySendButton = false
      displayOkButton = true
      displayDropzone = false
    }
    if(this.state.error){
      loadedText = "Erreur ! Veuillez recommencer."
      displayErrorButton = true
      displayDropzone = false
    }

    return(
      <div style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
        <div style={{height:"100px"}}>
          <div style={styles.topText}>
            {loadedText}
          </div>
          <div>
            <Button 
              style={{display: displaySendButton ? "inline" : "none", marginBottom: "15px"}} 
              outline color="primary" 
              onClick={ async () =>{
                let uploadResponse = await fetch('https://fhirtest.uhn.ca/baseDstu3/Binary', { method: 'POST', body: this.state.payloadFile })
                //console.log(uploadResponse)
                if(uploadResponse.ok){
                  this.setState({
                    loadedFile: null,
                    success: true,
                  })
                }
                else{
                  this.setState({
                    error: true,
                  })
                }
              }
              } size="sm">Envoyer
            </Button>
            <Button 
              style={{display: displayOkButton ? "inline" : "none", marginBottom: "15px"}} 
              outline color="success" 
              onClick={() =>{
                this.setState({
                  success: false,
                })}
                } size="sm">OK
            </Button>
            <Button 
              style={{display: displayErrorButton ? "inline" : "none", marginBottom: "15px"}} 
              outline color="danger" 
              onClick={() =>{
                this.setState({
                  success: false,
                })}
                } size="sm">OK
            </Button>

          </div>
        </div>
        <div style={{display: displayDropzone ? "flex" : "none", justifyContent: "center"}}>
          <Dropzone multiple={false} onDrop={
            acceptedFiles =>{
              this.setState({
                loadedFile: acceptedFiles,
              })
              const reader = new FileReader()
              reader.onabort = () => console.log('file reading was aborted')
              reader.onerror = () => console.log('file reading has failed')
              reader.onload = () => {
              const binaryStr = reader.result
              // console.log(binaryStr)
              this.setState({
                payloadFile: binaryStr,
              })
              }
              acceptedFiles.forEach(file => reader.readAsBinaryString(file))
            }
          }>
          {({getRootProps, getInputProps}) => (
              <div {...getRootProps()} style={styles.drop}>
                <input {...getInputProps()} />
                  <div style={styles.dropText}>Glissez-déposez un fichier ici, <br/> ou cliquez pour choisir un fichier.</div>
              </div>
          )}
          </Dropzone>
        </div>
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
  },
}