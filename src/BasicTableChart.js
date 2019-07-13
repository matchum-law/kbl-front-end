import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class TableChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data })
    }

    render() {
        const data = this.state.data

        const columns =
            [
                {
                    Header: 'UNI_NUM',
                    accessor: 'p_uni_num'
                }, {
                    Header: 'NAME',
                    accessor: 'p_name',
                }, {
                    Header: 'GAME',
                    accessor: 'p_game'
                }, {
                    Header: 'TIME',
                    accessor: 'p_time'
                }, {
                    Header: '2P',
                    accessor: 'p_2p'
                }, {
                    Header: '2PA',
                    accessor: 'p_2pa',
                }, {
                    Header: '2P_PCT',
                    accessor: 'p_2p_pct'
                }, {
                    Header: '3P',
                    accessor: 'p_3p'
                }, {
                    Header: '3PA',
                    accessor: 'p_3pa'
                }, {
                    Header: '3P_PCT',
                    accessor: 'p_3p_pct',
                }, {
                    Header: 'FG_PCT',
                    accessor: 'p_fg_pct'
                }, {
                    Header: 'FT',
                    accessor: 'p_ft'
                }, {
                    Header: 'FTA',
                    accessor: 'p_fta'
                }, {
                    Header: 'FT_PCT',
                    accessor: 'p_ft_pct',
                }, {
                    Header: 'EFG_PCT',
                    accessor: 'p_efg_pct'
                }, {
                    Header: 'TEAM',
                    accessor: 'p_team'
                }, {
                    Header: 'ORB',
                    accessor: 'p_orb'
                }, {
                    Header: 'DRB',
                    accessor: 'p_drb',
                }, {
                    Header: 'RPG',
                    accessor: 'p_rpg'
                }, {
                    Header: 'AST',
                    accessor: 'p_ast'
                }, {
                    Header: 'APG',
                    accessor: 'p_apg'
                }, {
                    Header: 'WFT',
                    accessor: 'p_wft',
                }, {
                    Header: 'WOFT',
                    accessor: 'p_woft'
                }, {
                    Header: 'STL',
                    accessor: 'p_stl'
                }, {
                    Header: 'BS',
                    accessor: 'p_bs',
                }, {
                    Header: 'GD',
                    accessor: 'p_gd'
                }, {
                    Header: 'TO',
                    accessor: 'p_to'
                }, {
                    Header: 'DK',
                    accessor: 'p_dk'
                }, {
                    Header: 'DKA',
                    accessor: 'p_dka',
                }, {
                    Header: 'PTS',
                    accessor: 'p_pts'
                }, {
                    Header: 'PPG',
                    accessor: 'p_ppg'
                }
            ]

        return <ReactTable
            data={data}
            columns={columns}
            pageSize={10}
        />
    }
}

export default TableChart;