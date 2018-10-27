import React, { Component } from 'react';
import {Grid, Image, List} from 'semantic-ui-react'
import {Player} from 'video-react'

class Annotator extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Player
                playsInline
                poster="/images/narnia.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              />
            </Grid.Column>
            <Grid.Column>
              <List selection verticalAlign='middle'>
                <List.Item>

                  <List.Content>
                    <List.Header>Helen</List.Header>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
                  <List.Content>
                    <List.Header>Christian</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                  <List.Content>
                    <List.Header>Daniel</List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <Image src='/images/narnia.jpg' />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Annotator;
