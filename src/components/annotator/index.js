import React, { Component } from 'react';
import {Grid, Button, List, Icon} from 'semantic-ui-react'
import {Player} from 'video-react'
import axios from 'axios'
import AnnotatorForm from './annotatorform'


class Annotator extends Component {

  constructor (props) {
    super (props)
    this.state = {
      video: undefined
    }
  }

  submitAnnotationForVideo (annotation) {
    const video = this.state.video
    annotation['video_url'] = video.video_url
    annotation['video_id'] = video._id
    var form = {video, annotation}
    console.log(annotation)
    axios.post('http://localhost:1234/api/annotation', form)
      .then(function(response){
        console.log(response)
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  componentWillMount () {
    var self = this
    axios.get('http://localhost:1234/api/video')
      .then(function (response) {
        console.log(response.data.result)
        var video = response.data.result
        self.setState({
          video: video
        })
      })
      .catch(function (error) {
        console.log(error)
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
                src={this.state.video ? this.state.video.video_url : undefined}
              />
            </Grid.Column>
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
