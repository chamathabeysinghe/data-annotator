import React, { Component } from 'react';
import {Form,Radio, Checkbox,Grid} from 'semantic-ui-react'

class AnnotatorForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      object_frequency: 'Low',
      object_surface_complexity: 'Low',
      action_frequency: 'Low',
      action_speed: 'Low',
      shadows: 'Low',
      scene_changes: 'No',
      object_entrance: 'No',
      categories: []
    }
  }
  handleChange (target, value) {
    var updatedState = this.state
    updatedState[target] = value
    var updatedState = Object.assign({}, updatedState)
    this.setState(updatedState)
  }
  render() {
    return (
      <Form>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <Form.Field inline>
                <label>Object frequency</label>
                <Radio
                  label='High'
                  name='object_frequency'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='High'
                  checked={this.state.object_frequency === 'High'}
                  onChange={this.handleChange.bind(this,'object_frequency', 'High')}
                />
                <Radio
                  label='Medium'
                  name='object_frequency'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Medium'
                  checked={this.state.object_frequency === 'Medium'}
                  onChange={this.handleChange.bind(this,'object_frequency', 'Medium')}
                />
                <Radio
                  label='Low'
                  name='object_frequency'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Low'
                  checked={this.state.object_frequency === 'Low'}
                  onChange={this.handleChange.bind(this,'object_frequency', 'Low')}
                />
              </Form.Field>

              <Form.Field inline>
                <label>Object surface complexity</label>
                <Radio
                  label='High'
                  name='object_surface_complexity'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='High'
                  checked={this.state.object_surface_complexity === 'High'}
                  onChange={this.handleChange.bind(this,'object_surface_complexity', 'High')}
                />
                <Radio
                  label='Medium'
                  name='object_surface_complexity'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Medium'
                  checked={this.state.object_surface_complexity === 'Medium'}
                  onChange={this.handleChange.bind(this,'object_surface_complexity', 'Medium')}
                />
                <Radio
                  label='Low'
                  name='object_surface_complexity'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Low'
                  checked={this.state.object_surface_complexity === 'Low'}
                  onChange={this.handleChange.bind(this,'object_surface_complexity', 'Low')}
                />
              </Form.Field>

              <Form.Field inline>
                <label>action_frequency</label>
                <Radio
                  label='High'
                  name='action_frequency'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='High'
                  checked={this.state.action_frequency === 'High'}
                  onChange={this.handleChange.bind(this,'action_frequency', 'High')}
                />
                <Radio
                  label='Medium'
                  name='action_frequency'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Medium'
                  checked={this.state.action_frequency === 'Medium'}
                  onChange={this.handleChange.bind(this,'action_frequency', 'Medium')}
                />
                <Radio
                  label='Low'
                  name='action_frequency'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Low'
                  checked={this.state.action_frequency === 'Low'}
                  onChange={this.handleChange.bind(this,'action_frequency', 'Low')}
                />
              </Form.Field>

              <Form.Field inline>
                <label>action_speed</label>
                <Radio
                  label='High'
                  name='action_speed'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='High'
                  checked={this.state.action_speed === 'High'}
                  onChange={this.handleChange.bind(this,'action_speed', 'High')}
                />
                <Radio
                  label='Medium'
                  name='action_speed'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Medium'
                  checked={this.state.action_speed === 'Medium'}
                  onChange={this.handleChange.bind(this,'action_speed', 'Medium')}
                />
                <Radio
                  label='Low'
                  name='action_speed'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Low'
                  checked={this.state.action_speed === 'Low'}
                  onChange={this.handleChange.bind(this,'action_speed', 'Low')}
                />
              </Form.Field>

              <Form.Field inline>
                <label>shadows</label>
                <Radio
                  label='High'
                  name='shadows'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='High'
                  checked={this.state.shadows === 'High'}
                  onChange={this.handleChange.bind(this,'shadows', 'High')}
                />
                <Radio
                  label='Medium'
                  name='shadows'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Medium'
                  checked={this.state.shadows === 'Medium'}
                  onChange={this.handleChange.bind(this,'shadows', 'Medium')}
                />
                <Radio
                  label='Low'
                  name='shadows'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Low'
                  checked={this.state.shadows === 'Low'}
                  onChange={this.handleChange.bind(this,'shadows', 'Low')}
                />
              </Form.Field>

              <Form.Field inline>
                <label>Scene changes</label>
                <Radio
                  label='Yes'
                  name='scene_changes'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Yes'
                  checked={this.state.scene_changes === 'Yes'}
                  onChange={this.handleChange.bind(this,'scene_changes', 'Yes')}
                />
                <Radio
                  label='No'
                  name='scene_changes'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='No'
                  checked={this.state.scene_changes === 'No'}
                  onChange={this.handleChange.bind(this,'scene_changes', 'No')}
                />
              </Form.Field>

              <Form.Field inline>
                <label>Object entrance</label>
                <Radio
                  label='Yes'
                  name='object_entrance'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='Yes'
                  checked={this.state.object_entrance === 'Yes'}
                  onChange={this.handleChange.bind(this,'object_entrance', 'Yes')}
                />
                <Radio
                  label='No'
                  name='object_entrance'
                  style={{marginLeft: '5px',marginRight:'5px', float: 'right'}}
                  value='No'
                  checked={this.state.object_entrance === 'No'}
                  onChange={this.handleChange.bind(this,'object_entrance', 'No')}
                />
              </Form.Field>


            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Form>
    );
  }
}

export default AnnotatorForm;
