import React, { Component } from 'react';
import {Grid, Image} from 'semantic-ui-react'

class Annotator extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <Image src='/images/narnia.jpg' />
            </Grid.Column>
            <Grid.Column width={6}>
              <Image src='/images/narnia.jpg' />
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
