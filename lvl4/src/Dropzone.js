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
      serverFilesNumber: null,
      loading: false
    }
  }

  render(){
    // console.log(this.state.serverFilesNumber)
    var loadedText = null
    var displaySendButton = false
    var displayOkButton = false
    var displayErrorButton = false
    var displayDropzone = false

    if(this.state.loadedFile && this.state.loadedFile.length === 0){
      loadedText = "Veuillez ne choisir qu'un seul fichier."
      displaySendButton = false
      displayDropzone = true
    }
    if(this.state.loadedFile && this.state.loadedFile.length === 1){
      loadedText = "Vous avez chargé « " + this.state.loadedFile[0].name + " »."      
      displaySendButton = true
      displayDropzone = true
    }
    if(!this.state.loadedFile && !this.state.success){
      loadedText = "Vous n'avez rien chargé pour l'instant."
      displaySendButton = false
      displayDropzone = true
    }
    if(this.state.success){
      loadedText = "En attente de la réponse du serveur..."
    }
    if(this.state.success && this.state.serverFilesNumber){
      loadedText = "Merci ! Nous avons bien reçu votre fichier. Il y a " + this.state.serverFilesNumber + " fichiers sur le serveur."
      displaySendButton = false
      displayOkButton = true
      displayDropzone = false
    }
    if(this.state.error){
      loadedText = "Erreur ! Veuillez recommencer."
      displayErrorButton = true
      displayDropzone = false
    }
    if(this.state.loading){
      loadedText = "Envoi..."
      displayErrorButton = false
      displaySendButton = false
      displayDropzone = false
    }

    return(
      <div style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
        <div style={{height:"80px"}}>
          <div style={styles.topText}>
            {loadedText}
          </div>
          <div>
            <Button 
              style={{display: displaySendButton ? "inline" : "none", marginBottom: "15px"}} 
              outline color="primary" 
              onClick={ async () =>{
                this.setState({
                  loading: true,
                })
                let uploadResponse = await fetch('https://fhirtest.uhn.ca/baseDstu3/Binary', { method: 'POST', body: this.state.payloadFile })
                //console.log(uploadResponse)
                if(uploadResponse.ok){
                  this.setState({
                    success: true,
                    loading: false,
                    loadedFile: null,
                  })
                }
                else{
                  this.setState({
                    error: true,
                  })
                }
                var numberOfFiles = await fetch('http://hapi.fhir.org/baseDstu3/Binary/_history')
                  .then(function(response) {
                  return response.json();
                  })
                  .then(function(jsonResponse) {
                  return jsonResponse.total;
                  });
                this.setState({
                  serverFilesNumber: numberOfFiles,
                })
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