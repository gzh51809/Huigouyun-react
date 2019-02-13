import React,{Component} from 'react';
// import  '../../sass/find.scss';
// import  '../../sass/list.scss';
import axios from'axios';

import { Tabs, WhiteSpace } from 'antd-mobile';
class listdatail extends React.Component {
    render(){
        return (
            <div>
                <div class="goods-search-list-nav">
                    <ul id="nav_ul">
                    <li><a href="javascript:void(0);" class="" id="sort_default">综合排序<i></i></a></li>
                    <li><a href="javascript:void(0);" class="" onclick="init_get_list('2', '1')">销量优先</a></li>
                    <li><a href="javascript:void(0);" id="search_adv" class="current">筛选<i></i></a></li>
                    </ul>
                    <div class="browse-mode"><a href="javascript:void(0);" id="show_style"><span class="browse-list"></span></a></div>
                </div>
            </div>
        )
    }
}
export default listdatail;