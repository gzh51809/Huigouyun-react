import React,{Component} from 'react';
// import  '../../sass/find.scss';
// import  '../../sass/listDatil.scss';
import axios from'axios';

import { Tabs, WhiteSpace } from 'antd-mobile';
class listdatail extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.match.params,
            // 当前页数
            curpage: 1,
           listdatail:[],
            //滚动高度：
            scrollHeight: 0,
            hasMore: true,// 判断接口是否还有数据，通过接口设置
            // isVisible:false//检查子组件是否在可视区域内
            }
            this.handleScroll=this.handleScroll.bind(this)

    }
    
    componentWillMount () {
        // console.log('idd',this.props)
            this.setState({
               id:this.props.match.params        
            })
        //  console.log(this.state.id)    
    }

    componentDidMount(){
        // 获取滚动的高度
        this.setState({
            scrollHeight: window.innerHeight - this.refs.header.clientHeight
        })
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps.id)
        let _this=this;
        axios.get('http://www.lechuyigou.com/mobile/index.php?c=goods&a=goods_list&page=10&', {
            params: {
                curpage:this.state.curpage,
                gc_id:nextProps.id
            }
          })
          .then(function (response) {
            // console.log(1);

            // console.log(response)
            // this.state.list=response.data.datas;
            _this.setState({
                listdatail:response.data.datas.goods_list,
                // curpage:this.state.curpage,
                loading:false
            })
            // console.log(_this.state.listdatail);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    // 处理滚动监听
    handleScroll(){
        const {hasMore} = this.state;
        if(!hasMore){
            return;
        }
        //下面是判断页面滚动到底部的逻辑
        if(this.scrollDom.scrollTop + this.scrollDom.clientHeight >= this.scrollDom.scrollHeight){
            if(!hasMore){
                return;
            }else{
                this.setState({
                    currentPage:this.state.currentPage+1,
                    hasMore:true
                },()=>{
                    let _this=this;
                    axios.get('http://www.lechuyigou.com/mobile/index.php?c=goods&a=goods_list&page=10&', {
                        params: {
                            curpage:this.state.curpage,
                            gc_id:this.state.id
                        }
                    })
                    .then(function (response) {
                        // console.log(1);
                        this.setState({
                            
                            hasMore:response.hasMore
                        })
                        
                        // this.state.list=response.data.datas;
                        let goodsData=this.state.listdatail;
                        for(var i=0;i<response.data.datas.length;i++){
                            goodsData.push(response.data.datas[i]);

                        }

                        _this.setState({
                            listdatail:goodsData
                            
                        })
                        console.log(_this.state.listdatail);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
               })

            }
            
        }
    }

    // fetchData(pageIndex,){
    //     // 接口调用数据字段
    //     //传入的参数包括但不限于：pageIndex， pageSize。。。
    //     // 获取后更新的数据包括但不限于：dataList，hasMore。。。
    // }
    render(){
        // 获取滚动高度
        const {scrollHeight} = this.state;
        // console.log(scrollHeight);
        // console.log(this.state.listdatail)
        return (
            <div id='listdatl'>

                <div className="goods-search-list-nav"  ref='header'>
                    <ul id="nav_ul">
                    <li><a id="sort_default">综合排序<i></i></a></li>
                    <li><a >销量优先</a></li>
                    <li><a id="search_adv" className="current">筛选<i></i></a></li>
                    </ul>
                    <div className="browse-mode"><a href="javascript:void(0);" id="show_style"><span className="browse-list"></span></a></div>
                </div>
                {/* 商品列表区域 */}
                {/* 绑定滚动事件 */}
                <div className="nctouch-main-layout" ref={body=>this.scrollDom = body} style={{height: scrollHeight}} onScroll={this.handleScroll.bind(this)}>
                    <div id="product_list" className="list"> 
                         <ul className="goods-secrch-list">
                        {
                            this.state.listdatail.map(val=>(
                                <li className="goods-item"  key={val.goods_id}>
                                <span className="goods-pic">
                                    <a>
                                        <img src={val.goods_image_url}/>
                                    </a>
                                </span>
                                <dl className="goods-info">
                                    <dt className="goods-name">
                                        <a>
                                            <h4>{val.goods_name}</h4>
                                            <h6></h6>
                                        </a>
                                    </dt>
                                    <dd className="goods-sale">
                                        <a>
                                            <span className="goods-price">￥<em>{val.goods_price}</em>                                              
                                            </span>	
                                            </a>
                                        </dd>
                                    <dd className="goods-assist">
                                        <a>
                                            <span className="goods-sold">销量
                                                <em>{val.is_presell}</em>
                                            </span>
                                        </a>
                                        <div className="goods-store">                           
                                            <span className="icon-mall">自营</span> 
                                        </div>
                                    </dd>
                                </dl>
                            </li>
                             ))
                        }
                            
                        </ul> 
                    </div>
                </div>
            </div>
        )
    }
}
export default listdatail;