import React, { Component } from 'react';
import {Grid, Image, List} from 'semantic-ui-react'
import {Player} from 'video-react'
import AnnotatorForm from './annotatorform'

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
    return ['camila.mp4', 'pimple.mp4','camila.mp4', 'pimple.mp4','camila.mp4', 'pimple.mp4','camila.mp4', 'pimple.mp4','camila.mp4', 'pimple.mp4','camila.mp4', 'pimple.mp4','camila.mp4', 'pimple.mp4','camila.mp4', 'pimple.mp4','camila.mp4', 'pimple.mp4',]
  }
  getFilesAlreadyAnnotated () {
    return ['pimple.mp4']
  }
  submitAnnotationForVideo () {

  }

  submitAllAnnotations () {

  }

  changeCurrentVideo (fileName) {
    console.log(fileName)
    this.setState({
      currentVideo: `/videos/${fileName}`
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
          <Grid.Row columns={2}>
            <Grid.Column width={8}>
              <Player
                playsInline
                poster="/images/narnia.jpg"
                src={this.state.currentVideo}
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <div style={{maxHeight: '500px', overflowY:'scroll'}}>
              <List selection verticalAlign='middle'>
                {this.state.filesToAnnotate.map(fileName => {
                  return (
                    <List.Item onClick={this.changeCurrentVideo.bind(this, fileName)}>
                      <Image avatar src={this.state.filesAlreadyAnnotated.indexOf(fileName)===-1?'images/question.png':'/images/right.png'} />
                      <List.Content>
                        <List.Header>{fileName}</List.Header>
                      </List.Content>
                    </List.Item>
                  )
                })}
              </List>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <AnnotatorForm/>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Annotator;
