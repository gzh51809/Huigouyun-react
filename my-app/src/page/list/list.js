import React,{Component} from 'react';
import  '../../sass/find.scss';
import  '../../sass/list.scss';
import axios from'axios';
import ListRight from './listRight'
import { Tabs, WhiteSpace } from 'antd-mobile';
class list extends React.Component {
    constructor(){
        super();
        this.state={
            tuijian:[],
            list:[],
            current:'1'
        }
        this.getTuijian=this.getTuijian.bind(this);
        this.getList=this.getList.bind(this);
        this.handleChange=this.handleChange.bind(this);
        
    }
    componentDidMount(){
       
        const _this=this;
        axios.all([this.getTuijian(),  this.getList()])
        .then(axios.spread(function (acct, perms) {
          // 两个请求现在都执行完成
          console.log(acct, perms.data.datas.class_list)
          _this.setState({
                    tuijian:acct.data.datas.brand_list,
                    list:perms.data.datas.class_list,
                    
                })
        //  console.log(this.state.tuijian,this.state.list)
                    
        }));      
        
        
    }
    // 获取推荐数据
    getTuijian(){
        return axios.get('http://www.lechuyigou.com/mobile/index.php?c=brand&a=recommend_list');
      }
      // 获取左侧数据
    getList(){ 

    return axios.get('http://www.lechuyigou.com/mobile/index.php?c=goods_class');
    }

    handleChange(id){
        this.setState({
            current:id
        })
    }
    
  render() {
  

    return (
      <div id='list'>
        <header id="header" className="nctouch-product-header fixed">
            <div className="header-wrap">
                <div className="header-l"> <a href="javascript:history.go(-1)"> <i className="back"></i> </a> </div>
                <div className="header-inp"> <i className="icon"></i> <span className="search-input" id="keyword">请输入关键词</span> </div>
                <div className="header-r"><a id="header-nav" href="javascript:void(0);"><i className="more"></i><sup></sup></a> </div>
            </div>
            <div className="nctouch-nav-layout">
                <div className="nctouch-nav-menu"> <span className="arrow"></span></div> 
            </div>
        </header>
        <div className='nctouch-main-layout'>
            <div className="categroy-cnt" id="categroy-cnt">
                <ul className="categoty_list">
                        <li className={this.state.current=='1'? "categoty_listItem select":"categoty_listItem"} onClick={()=>{this.handleChange('1')}}>
                            <a href="javascript:;">
                                <div className="ci-fcategory-ico">
                                    <img src="../../img/list/star.png"/>
                                </div>
                                <div className="categoty_leftName">为您推荐</div>
                            </a>
                        </li>
                        {
                            this.state.list.map(val=>(
                                <li className={this.state.current==val.gc_id? "categoty_listItem select":"categoty_listItem"} key={val.gc_id} onClick={()=>{this.handleChange(val.gc_id)}}>
                                    <a href="javascript:;">
                                        <div className="ci-fcategory-ico">
                                            <img src="../../img/list/star.png"/>
                                        </div>
                                        <div className="categoty_leftName">{val.gc_name}</div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

            </div>
            
            <ListRight data={{tuijian:this.state.tuijian,list:this.state.list}} id={this.state.current}></ListRight>
        </div>
      
      </div>
    );
  }
  }


// list.render(<Demo />, mountNode);
export default list;