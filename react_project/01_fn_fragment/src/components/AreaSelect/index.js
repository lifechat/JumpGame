import React,{Component} from 'react';
import {Cascader} from ''
import { connect }  from 'umi'


@connect(({commonData}) => ({

}))

class AreaSelect extends Component{
    componentDidMount(){
        const { dispatch } =  this.props;
        if(dispatch) {
            dispatch({
                type:"commonData/areaFetch"
            })
        }
    }
}