import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ApiGetLog from "./ApiGetLog.js";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {margin: 6}
});

const rows="";

class App extends Component {
  constructor(props ){
    super(props);
    this.getCommits = this.getCommits.bind(this);
    this.showCommits = this.showCommits.bind(this);
    this.formatCommits = this.formatCommits.bind(this);
    this.state={commits: <Text>Hello</Text>,
                showCommits: false,
                data: [],
                tableHead: ['Name', 'Message', 'Hash']}
  }



  async getCommits() {
    //return new Promise ( function (resolve, reject){
    const data = [];
    //})
    fetch('https://api.github.com/repos/merpxm/interview/commits')
      .then((response) => response.json())//.then((rows) => console.log("<td>" + rows[1].commit.author.name + "</td>"))
      //.then((response) => response.json()).then((rows) => (this.formatCommits(rows)));
      .then((rows) =>{
        //console.log(rows.length);
        for(let i=0; i < rows.length; i++){
          let newData = [];
          //console.log(rows[i].sha);
            //let newData = {rows[i].commit.author.name, rows[i].message, rows[i].sha}
            newData.push(rows[i].commit.author.name);
            newData.push(rows[i].commit.message);
            newData.push(rows[i].sha);
            data.push(newData);
        }
        this.setState({data: data},
          () => this.setState({showCommits: true},
            () => {
              console.log(this.state.data);
              console.log(this.state.showCommits);
          })
        );
      })
      //.then((rows) => (console.log(data: rows.map((row, i) =>(

      //)))).then(this.setState({data: data}, this.showCommits())));
      //.then((finalResponse) => this.setState({data: finalResponse}, function() { this.showCommits()}))
      //.catch((err) => console.log(err));

    //response.then(value =>{
      //console.log(value);
      //const commitTable = ""
      //this.setState({commits: value}, function() { this.showCommits()})
    //})
  }

  showCommits() {
    this.setState({showCommits: true});
  }

  formatCommits(rows){

    this.rows = rows;

}



  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            this.getCommits();
          }}
          title='Commits'></Button>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#c8e1ff'}}>
              <Row data={this.state.tableHead} style={styles.head}/>
              <Rows data={this.state.data} textStyle={{ margin: 6}}/>
            </Table>
          </View>
        <StatusBar style="auto" />
      </View>
    );
  }


  logCommits() {
    const response = getLog();
    response.then(value =>{
      return value;
    })
  }

}

export default App;
