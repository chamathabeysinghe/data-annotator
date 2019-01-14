import React, { Component } from 'react';
import {Grid, Button, List, Message, Dimmer, Loader} from 'semantic-ui-react'
import {Player} from 'video-react'
import axios from 'axios'
import AnnotatorForm from './annotatorform'


class Annotator extends Component {

  constructor (props) {
    super (props)
    this.state = {
      loading:false,
      video: undefined
    }
  }

  submitAnnotationForVideo (annotation) {
    const video = this.state.video
    annotation['video_url'] = video.video_url
    annotation['video_id'] = video._id
    var form = {video, annotation}
    this.setState({
      loading: true
    })
    var self = this
    axios.post('http://localhost:1234/api/annotation', form)
      .then(function(response){
        console.log(response)
        self.setState({
          loading: false
        })
        window.location.reload(true);

      })
      .catch(function (err) {
        console.log(err)
        self.setState({
          loading: false
        })
      })
  }

  componentWillMount () {
    var self = this
    this.setState({
      loading: true
    })
    axios.get('http://localhost:1234/api/video')
      .then(function (response) {
        console.log(response.data.result)
        var video = response.data.result
        self.setState({
          loading: false,
          video: video
        })
      })
      .catch(function (error) {
        self.setState({
          loading: false,
        })
        console.log(error)
      })
  }

  render() {
    if (this.state.video === undefined && !this.state.loading) {
      return (
        <Message negative>
          <Message.Header>Server has no videos right now</Message.Header>
        </Message>
      )
    }
    return (
      <div>
        <Dimmer active={this.state.loading}>
          <Loader />
        </Dimmer>
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
