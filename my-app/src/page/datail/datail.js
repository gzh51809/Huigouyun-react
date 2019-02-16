import React,{Component} from 'react';
// import  '../../sass/find.scss';
import  '../../sass/details.scss';
import axios from'axios';
import { Tabs, WhiteSpace } from 'antd-mobile';
class datail extends React.Component {
    // 获取id
    constructor(props){
        
        super(props)
        let id=this.props.match.params.id;
        this.state={
            id:id
        }
    }
    render(){

        return (
            <div id='datail'>
                <header id="header" className="posf">
                    <div className="header-wrap">
                        <div className="header-l"> <a href="javascript:history.go(-1)"> <i className="back"></i></a> </div>
                        <ul className="header-nav">
                            <li><a href="javascript:void(0);" id="goodsDetail">商品</a></li>
                            <li className="cur"><a href="javascript:void(0);" id="goodsBody">详情</a></li>
                            <li><a href="javascript:void(0);" id="goodsEvaluation">评价</a></li>
                        </ul>
                        <div className="header-r"><a id="header-nav" href="javascript:void(0);"><i className="more"></i><sup></sup></a> </div>
                    </div>
 
                </header>
            </div>
        )
    }
}
export default datail;