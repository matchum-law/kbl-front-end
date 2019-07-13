import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      indexes: new Set(),
      data: undefined
    }
    this.onClickThProps = this.onClickThProps.bind(this);
  }

  componentWillMount() {
    const result = axios.
    get('http://ec2-52-78-238-20.ap-northeast-2.compute.amazonaws.com:8080/kbl_player');
    console.log("aaaa ", result);

    // this.setState({
    //   data : result
    // })
    this.setState({
      data: [
        {
          id: 1,
          name: 'Khan',
          kill: 26,
          assist: 30,
          death: 10,
          cs: 100,
          gold: 1000,
          solokill: 3
        }, {
          id: 2,
          name: 'Clid',
          kill: 16,
          assist: 20,
          death: 10,
          cs: 50,
          gold: 600,
          solokill: 3
        }, {
          id: 3,
          name: 'Faker',
          kill: 1,
          assist: 2,
          death: 3,
          cs: 3000,
          gold: 3000,
          solokill: 1
        }, {
          id: 4,
          name: 'Teddy',
          kill: 126,
          assist: 30,
          death: 10,
          cs: 150,
          gold: 1000,
          solokill: 3
        }, {
          id: 5,
          name: 'Mata',
          kill: 6,
          assist: 30,
          death: 10,
          cs: 100,
          gold: 1000,
          solokill: 0
        },
      ]
    })
  }

  onClickThProps = (e, handleOriginal, rowInfo) => {
    const index = rowInfo['index'] + 1
    if (this.state.indexes.has(index)) {
      let newIndexes = new Set(this.state.indexes);
      newIndexes.delete(index);
      this.setState({indexes: newIndexes});
    } else {
      let newIndexes = new Set(this.state.indexes);
      newIndexes.add(index);
      this.setState({indexes: newIndexes});
    }
    // IMPORTANT! React-Table uses onClick internally to trigger
    // events like expanding SubComponents and pivots.
    // By default a custom 'onClick' handler will override this functionality.
    // If you want to fire the original onClick handler, call the
    // 'handleOriginal' function.
    if (handleOriginal) {
      handleOriginal()
    }
  }

  render() {
    const columns = [{
      Header: "",
      id: "row",
      maxWidth: 50,
      filterable: false,
      Cell: (row) => {
        return <span>{row.index + 1}</span>;
      },
      getProps: (state, rowInfo, column, instance) => {
        return {
          onClick: (e, handleOriginal) => { this.onClickThProps(e, handleOriginal, rowInfo) }
        }
      }
    }, {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Kill',
      accessor: 'kill',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'assist', // Required because our accessor is not a string
      Header: 'Assist',
      accessor: d => d.assist // Custom value accessors!
    }, {
      Header: props => <span>Death</span>, // Custom header components!
      accessor: 'death'
    }, {
      Header: 'CS',
      accessor: 'cs'
    }, {
      Header: 'GOLD',
      accessor: 'gold'
    }, {
      Header: 'SoloKill',
      accessor: 'solokill'
    }
    ]

    let newData = this.state.data.filter((row) => !this.state.indexes.has(row.id));
   
    if (newData.length === 0) {
      newData = this.state.data
    }
    console.log(newData);

    return (
      <div className='App'>
        <h1>SKT T1</h1>
        <ReactTable data={this.state.data} columns={columns} pageSize={10} />
        <RadarChart outerRadius={150} width={500} height={500} data={newData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="kill" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Radar name="John" dataKey="assist" stroke="#8822d8" fill="#8822d8" fillOpacity={0.3} />
          <Radar name="Poll" dataKey="death" stroke="#2284d8" fill="#2284d8" fillOpacity={0.3} />
        </RadarChart>
      </div>
    )
  }
}