import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Switch, SafeAreaView} from 'react-native';
import {
  Container,
  Content,
  Footer,
  Button,
  Icon,
  Grid,
  Col,
  CheckBox,
  ListItem,
  Left,
  Right,
  Body,
  Header,
} from 'native-base';
import {FlatList} from 'react-native';
import styles from './styles';
import data from './data.js';
import IconF from 'react-native-vector-icons/FontAwesome';

const commonColor = require('../../theme/variables/commonColor');

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offerSwitchIsOn: true,
      vegSwitchIsOn: false,
      averageCost: true,
      premiumCost: false,
      questionData: data,
      checkOne: true,
      checkTwo: true,
    };
  }

  render() {
    const navigation = this.props.navigation;
    const handleCheckboxPress = item => {
      let {questionData} = this.state;
      questionData.map((currentItem, index) => {
        if (currentItem.quisine === item.quisine) {
          questionData[index].quisineChecked = !item.quisineChecked;
          return;
        }
      });
      this.setState({questionData});
    };
    return (
      <Container style={{backgroundColor: '#E7F4FF'}}>
        <SafeAreaView />
        <Header style={{flexDirection: 'row'}}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={() => navigation.goBack()}>
              <Text style={styles.headerText}>Dismiss</Text>
            </Button>
          </Left>
          <Body
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button transparent>
              <Text style={styles.headerText}>Filters</Text>
            </Button>
          </Body>
          <Right style={{flex: 1}}>
            <Button transparent>
              <Text style={styles.headerText}>Reset</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={styles.filterHeaderTextView}>
            <Text style={styles.filterHeaderText}>Sort by</Text>
            <View>
              <Grid>
                <Col>
                  <TouchableOpacity style={styles.colLeftBtn}>
                    <Icon active name={'star'} style={styles.colIcon} />
                    <View style={{marginLeft: 15}}>
                      <Text style={styles.filterTypeText}>Rating</Text>
                      <Text style={styles.filterTypeSubtext}>High - Low</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity style={styles.colRightBtn}>
                    <Icon name={'timer'} style={styles.colIcon} />
                    <View style={{marginLeft: 15}}>
                      <Text style={styles.filterTypeText}>Delivery Time</Text>
                      <Text style={styles.filterTypeSubtext}>High - Low</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
          </View>

          <View style={styles.filterHeaderTextView}>
            <Text style={styles.filterHeaderText}>Cost for Two</Text>
            <View>
              <Grid>
                <Col>
                  <TouchableOpacity
                    onPress={() =>
                      this.setState({
                        checkOne: !this.state.checkOne,
                      })
                    }
                    style={styles.colLeftBtn}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}>
                      {this.state.checkOne === true ? (
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: commonColor.contentTextColor,
                            height: 24,
                            width: 24,
                            borderRadius: 1,
                          }}>
                          <IconF name="check" color="white" />
                        </View>
                      ) : (
                        <View style={styles.emptyCheckbox} />
                      )}
                    </View>
                    <View style={{marginLeft: 15}}>
                      <Text style={styles.filterTypeText}>Rs 999</Text>
                      <Text style={styles.filterTypeSubtext}>Average</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity
                    style={styles.colRightBtn}
                    onPress={() =>
                      this.setState({
                        checkTwo: !this.state.checkTwo,
                      })
                    }>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}>
                      {this.state.checkTwo === true ? (
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            height: 24,
                            width: 24,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: commonColor.contentTextColor,
                          }}></View>
                      ) : (
                        <View style={styles.filledCheckbox}>
                          <IconF name="check" color="white" />
                        </View>
                      )}
                    </View>
                    <View style={{marginLeft: 15}}>
                      <Text style={styles.filterTypeText}>Rs 2000</Text>
                      <Text style={styles.filterTypeSubtext}>Premium</Text>
                    </View>
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
          </View>

          <View style={styles.filterHeaderTextView}>
            <Text style={styles.filterHeaderText}>Restaurants with</Text>
            <ListItem noBorder>
              <Left>
                <Text style={styles.filterTypeText}>Offers</Text>
              </Left>
              <Right>
                <Switch
                  onValueChange={value =>
                    this.setState({offerSwitchIsOn: value})
                  }
                  value={this.state.offerSwitchIsOn}
                  trackColor={{
                    true: commonColor.toolbarDefaultBg,
                    false: '#d3d3d3',
                  }}
                  thumbColor={commonColor.brandPrimary}
                />
              </Right>
            </ListItem>
            <ListItem noBorder>
              <Left>
                <Text style={styles.filterTypeText}>Pure Veg Dishes Only</Text>
              </Left>
              <Right>
                <Switch
                  onValueChange={value => this.setState({vegSwitchIsOn: value})}
                  value={this.state.vegSwitchIsOn}
                  trackColor={{
                    true: commonColor.toolbarDefaultBg,
                    false: '#d3d3d3',
                  }}
                  thumbColor={commonColor.brandPrimary}
                />
              </Right>
            </ListItem>
          </View>

          <View style={styles.filterHeaderTextView}>
            <Text style={styles.filterHeaderText}>Quisines</Text>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <ListItem>
                  <Left>
                    <Text style={styles.filterTypeText}>{item.quisine}</Text>
                  </Left>

                  {item.quisineChecked ? (
                    <TouchableOpacity onPress={() => handleCheckboxPress(item)}>
                      <View style={styles.filledCheckbox}>
                        <IconF name="check" color="white" />
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => handleCheckboxPress(item)}>
                      <View style={styles.emptyCheckbox} />
                    </TouchableOpacity>
                  )}
                </ListItem>
              )}
            />
          </View>
        </Content>

        <Footer>
          <Button onPress={() => navigation.goBack()} style={{elevation: 0}}>
            <Text style={{color: commonColor.inverseTextColor}}>
              APPLY FILTERS
            </Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

export default Filter;
