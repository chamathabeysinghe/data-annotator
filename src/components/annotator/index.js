import React, { Component } from 'react';
import {Grid, Button, List, Icon} from 'semantic-ui-react'
import {Player} from 'video-react'
import AnnotatorForm from './annotatorform'
import files from '../../utils/files'


class Annotator extends Component {

  constructor (props) {
    super (props)
    this.state = {
      filesAlreadyAnnotated: [],
      filesToAnnotate: [],
      currentVideo: ''
    }
  }

  getFiles () {
    return files
  }
  getFilesAlreadyAnnotated () {
    var alreadyAnnotated = []
    var currentList = localStorage.getItem('doneList')
    if (!currentList) {
      return alreadyAnnotated
    }
    currentList = JSON.parse(currentList)
    for (var i = 0; i < currentList.length; i++) {
      console.log(currentList[i])
      alreadyAnnotated.push(currentList[i].video)
    }
    return alreadyAnnotated
  }
  submitAnnotationForVideo (annotations) {
    var currentList = localStorage.getItem('doneList')
    annotations.video = this.state.currentVideo

    if (currentList) {
      currentList = JSON.parse(currentList)
      currentList.push(annotations)
    } else {
      currentList = [annotations]
    }
    console.log(currentList)
    localStorage.setItem('doneList', JSON.stringify(currentList))


  }

  submitAllAnnotations () {

  }

  changeCurrentVideo (fileName) {
    this.setState({
      currentVideo: fileName
    })
  }

  componentWillMount () {
    this.setState({
      filesToAnnotate: this.getFiles(),
      filesAlreadyAnnotated: this.getFilesAlreadyAnnotated()
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column width={8}>
              <Player
                playsInline
                src={'/videos/'+this.state.currentVideo}
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <div style={{maxHeight: '500px', overflowY:'scroll'}}>
              <List selection verticalAlign='middle'>
                {this.state.filesToAnnotate.map(fileName => {
                  return (
                    <List.Item onClick={this.changeCurrentVideo.bind(this, fileName)} style={this.state.currentVideo === fileName?{background: 'rgb(232, 233, 232)'}:{}}>
                      {/*<Image avatar src={this.state.filesAlreadyAnnotated.indexOf(fileName)===-1?'images/question.png':'/images/right.png'} />*/}
                      <Icon name={this.state.filesAlreadyAnnotated.indexOf(fileName)===-1?'pencil alternate':'hand point right'} color={this.state.filesAlreadyAnnotated.indexOf(fileName)===-1?'red':'green'} size='big' />
                      <List.Content>
                        <List.Header>{fileName}</List.Header>
                      </List.Content>
                    </List.Item>
                  )
                })}
              </List>
              </div>
            </Grid.Column>
            <Grid.Column width={2} centered>
              <Button style={{width:'100%'}} positive >Download CSV</Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <AnnotatorForm submitAnnotationForVideo={this.submitAnnotationForVideo.bind(this)}/>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Annotator;
