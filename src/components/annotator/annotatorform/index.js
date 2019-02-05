import React, { Component } from 'react';
import {Form,Radio, Button,Grid} from 'semantic-ui-react'

class AnnotatorForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      object_frequency: undefined,
      object_surface_complexity: undefined,
      action_frequency: undefined,
      action_speed: undefined,
      shadows: undefined,
      scene_changes: undefined,
      object_entrance: undefined,
      categories: []
    }
  }
  handleChange (target, value) {
    var updatedState = this.state
    updatedState[target] = value
    var updatedState = Object.assign({}, updatedState)
    this.setState(updatedState)
  }
  onCategoryClick (value) {
    var categories = this.state.categories
    if (categories.indexOf(value)!==-1) {
      var newCategories = []
      for (var i = 0; i < categories.length; i++) {
        if (!categories[i].startsWith(value)) {
          newCategories.push(categories[i])
        }
      }
      categories = newCategories
    } else {
      if (value.indexOf('-')>-1) {
        var mainTopic = value.split('-')[0]
        if (categories.indexOf(mainTopic) === -1) {
          categories.push(mainTopic)
        }
      }
      categories.push(value)
    }
    this.setState({
      categories: categories
    })
  }

  onSubmitClick () {
    if (this.state.object_frequency === undefined ||
        this.state.object_surface_complexity === undefined ||
        this.state.action_frequency === undefined ||
        this.state.action_speed === undefined ||
        this.state.shadows === undefined ||
        this.state.scene_changes === undefined ||
        this.state.object_entrance === undefined) {
      alert('Some fields are missing')
      return
    }
    this.props.submitAnnotationForVideo(this.state)
  }
  render() {
    return (
      <Form>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <h1>Tags</h1>
              <Form.Field inline>
                <label><abbr title="Number of objects in video(<2 ~ Low | 2-5 ~ Medium| 5< ~ high)">Object frequency</abbr></label>
                <Radio
                  label='High'
                  name='object_frequency'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='High'
                  checked={this.state.object_frequency === 'High'}
                  onChange={this.handleChange.bind(this,'object_frequency', 'High')}
                />
                <Radio
                  label='Medium'
                  name='object_frequency'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='Medium'
                  checked={this.state.object_frequency === 'Medium'}
                  onChange={this.handleChange.bind(this,'object_frequency', 'Medium')}
                />
                <Radio
                  label='Low'
                  name='object_frequency'
                  style={{marginLeft: '5px',marginRight:'5px'}}
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
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='High'
                  checked={this.state.object_surface_complexity === 'High'}
                  onChange={this.handleChange.bind(this,'object_surface_complexity', 'High')}
                />
                <Radio
                  label='Medium'
                  name='object_surface_complexity'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='Medium'
                  checked={this.state.object_surface_complexity === 'Medium'}
                  onChange={this.handleChange.bind(this,'object_surface_complexity', 'Medium')}
                />
                <Radio
                  label='Low'
                  name='object_surface_complexity'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='Low'
                  checked={this.state.object_surface_complexity === 'Low'}
                  onChange={this.handleChange.bind(this,'object_surface_complexity', 'Low')}
                />
              </Form.Field>

              <Form.Field inline>
                <label><abbr title="Number of actions in video(<2 ~ Low | 2-5 ~ Medium| 5< ~ high)">Action frequency</abbr></label>
                <Radio
                  label='High'
                  name='action_frequency'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='High'
                  checked={this.state.action_frequency === 'High'}
                  onChange={this.handleChange.bind(this,'action_frequency', 'High')}
                />
                <Radio
                  label='Medium'
                  name='action_frequency'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='Medium'
                  checked={this.state.action_frequency === 'Medium'}
                  onChange={this.handleChange.bind(this,'action_frequency', 'Medium')}
                />
                <Radio
                  label='Low'
                  name='action_frequency'
                  style={{marginLeft: '5px',marginRight:'5px'}}
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
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='High'
                  checked={this.state.action_speed === 'High'}
                  onChange={this.handleChange.bind(this,'action_speed', 'High')}
                />
                <Radio
                  label='Medium'
                  name='action_speed'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='Medium'
                  checked={this.state.action_speed === 'Medium'}
                  onChange={this.handleChange.bind(this,'action_speed', 'Medium')}
                />
                <Radio
                  label='Low'
                  name='action_speed'
                  style={{marginLeft: '5px',marginRight:'5px'}}
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
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='High'
                  checked={this.state.shadows === 'High'}
                  onChange={this.handleChange.bind(this,'shadows', 'High')}
                />
                <Radio
                  label='Medium'
                  name='shadows'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='Medium'
                  checked={this.state.shadows === 'Medium'}
                  onChange={this.handleChange.bind(this,'shadows', 'Medium')}
                />
                <Radio
                  label='Low'
                  name='shadows'
                  style={{marginLeft: '5px',marginRight:'5px'}}
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
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='Yes'
                  checked={this.state.scene_changes === 'Yes'}
                  onChange={this.handleChange.bind(this,'scene_changes', 'Yes')}
                />
                <Radio
                  label='No'
                  name='scene_changes'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='No'
                  checked={this.state.scene_changes === 'No'}
                  onChange={this.handleChange.bind(this,'scene_changes', 'No')}
                />
              </Form.Field>

              <Form.Field inline>
                <label><abbr title="New objects enter into the scene">Object entrance</abbr></label>
                <Radio
                  label='Yes'
                  name='object_entrance'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='Yes'
                  checked={this.state.object_entrance === 'Yes'}
                  onChange={this.handleChange.bind(this,'object_entrance', 'Yes')}
                />
                <Radio
                  label='No'
                  name='object_entrance'
                  style={{marginLeft: '5px',marginRight:'5px'}}
                  value='No'
                  checked={this.state.object_entrance === 'No'}
                  onChange={this.handleChange.bind(this,'object_entrance', 'No')}
                />
              </Form.Field>

            </Grid.Column>

            <Grid.Column>
              <h1>Categories</h1>
              <div style={{marginTop: '5px', marginBottom: '5px', padding: '5px'}}>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Plants')===-1} color='green' onClick={this.onCategoryClick.bind(this,'Plants')}>
                  Plants
                </Button>
              </div>

              <div style={{marginTop: '5px', marginBottom: '5px', padding: '5px'}}>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Pets')===-1} color='blue ' onClick={this.onCategoryClick.bind(this,'Pets')}>
                  Pets/Animals
                </Button>
              </div>

              <div style={{marginTop: '5px', marginBottom: '5px', padding: '5px'}}>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Food')===-1} color='olive' onClick={this.onCategoryClick.bind(this,'Food')}>
                  Food
                </Button>
              </div>

              <div style={{marginTop: '5px', marginBottom: '5px', padding: '5px'}}>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Sports')===-1} color='red' onClick={this.onCategoryClick.bind(this,'Sports')}>
                  Sports
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Sports-Indoor')===-1} color='red' onClick={this.onCategoryClick.bind(this,'Sports-Indoor')}>
                  Indoor
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Sports-Outdoor')===-1} color='red' onClick={this.onCategoryClick.bind(this,'Sports-Outdoor')}>
                  Outdoor
                </Button>
              </div>

              <div style={{marginTop: '5px', marginBottom: '5px', padding: '5px'}}>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('People')===-1} color='orange' onClick={this.onCategoryClick.bind(this,'People')}>
                  People
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('People-Beauty')===-1} color='orange' onClick={this.onCategoryClick.bind(this,'People-Beauty')}>
                  Beauty
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('People-Fitness')===-1} color='orange' onClick={this.onCategoryClick.bind(this,'People-Fitness')}>
                  Fitness
                </Button>
              </div>



              <div style={{marginTop: '5px', marginBottom: '5px', padding: '5px'}}>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Business')===-1} color='yellow' onClick={this.onCategoryClick.bind(this,'Business')}>
                  Business
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Business-Building')===-1} color='yellow' onClick={this.onCategoryClick.bind(this,'Business-Building')}>
                  Building
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Business-Factory')===-1} color='yellow' onClick={this.onCategoryClick.bind(this,'Business-Factory')}>
                  Factory
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Business-Paddy')===-1} color='yellow' onClick={this.onCategoryClick.bind(this,'Business-Paddy')}>
                  Paddy
                </Button>
              </div>

              <div style={{marginTop: '5px', marginBottom: '5px', padding: '5px'}}>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Transportation')===-1} color='violet' onClick={this.onCategoryClick.bind(this,'Transportation')}>
                  Transportation
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Transportation-Train')===-1} color='violet' onClick={this.onCategoryClick.bind(this,'Transportation-Train')}>
                  Train
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Transportation-Car')===-1} color='violet' onClick={this.onCategoryClick.bind(this,'Transportation-Car')}>
                  Car
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Transportation-Aeroplane')===-1} color='violet' onClick={this.onCategoryClick.bind(this,'Transportation-Aeroplane')}>
                  Aeroplane
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Transportation-Ship')===-1} color='violet' onClick={this.onCategoryClick.bind(this,'Transportation-Ship')}>
                  Ship
                </Button>
              </div>

              <div style={{marginTop: '5px', marginBottom: '5px', padding: '5px'}}>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Landscape')===-1} color='purple' onClick={this.onCategoryClick.bind(this,'Landscape')}>
                  Landscape
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Landscape-Sea')===-1} color='purple' onClick={this.onCategoryClick.bind(this,'Landscape-Sea')}>
                  Sea
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Landscape-Beach')===-1} color='purple' onClick={this.onCategoryClick.bind(this,'Landscape-Beach')}>
                  Beach
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Landscape-Sky')===-1} color='purple' onClick={this.onCategoryClick.bind(this,'Landscape-Sky')}>
                  Sky
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Landscape-River')===-1} color='purple' onClick={this.onCategoryClick.bind(this,'Landscape-River')}>
                  River
                </Button>
                <Button style={{width: '200px'}} basic={this.state.categories.indexOf('Landscape-Home')===-1} color='purple' onClick={this.onCategoryClick.bind(this,'Landscape-Home')}>
                  Home
                </Button>
              </div>

            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <div>
              <Button style={{width:'500px'}} positive onClick={this.onSubmitClick.bind(this)}>Submit</Button>
            </div>
          </Grid.Row>

        </Grid>
      </Form>
    );
  }
}

export default AnnotatorForm;
