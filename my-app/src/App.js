import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import './sass/base.css'
// import {withRouter} from 'react-router-dom'; Link,NavLink,
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import home from './page/home/home';
import list from './page/list/list';
import datail from './page/datail/datail';
import listdatail from './page/listdatail/listdatail';
import mine from './page/mine/mine';
import cart from './page/cart/cart';
import find from './page/find/find';
import './sass/App.scss'

class App extends Component {
  constructor() {
    super();
    this.state = {
        selectedTab:'/home',
        tabs:[
            {
                text:'首页',
                path:'/home',
                name:'Home',
                icon:'icon-shouye'
            },
            {
                text:'分类',
                path:'/list',
                name:'List',
                icon:'icon-dianpu'
            },
            {
                text:'搜索',
                path:'/find',
                name:'Finder',
                icon:'icon-zhaobudaojieguo'
            },
            {
                text:'购物车',
                path:'/cart',
                name:'Cart',
                icon:'icon-gouwuche'
            },
            {
                text:'我的商城',
                path:'/mine',
                name:'Mine',
                icon:'icon-gerenzhongxin'
            }
        ]
    }
  }
  componentDidMount(){
    let hash = window.location.hash.split('/')[1];
    this.setState({
        selectedTab:'/'+hash
    })
}
  render() {
    return (
      <div className="App">
            <Switch>
                    <Route path="/home" component={home}/>
                    <Route path="/list" component={list}/>
                    <Route path="/cart" component={cart}/>
                    <Route path="/datail " component={datail }/>
                    <Route path="/listdatail " component={listdatail }/>
                    <Route path="/mine" component={mine}/>
                    <Route path="/find" component={find}/>
                    <Redirect from="/" to="/home"/>
                    {/* <Route path="/" component={Home} exact/> */}
            </Switch>
            <div id='footer'> 
         <TabBar
                unselectedTintColor="#000"
                tintColor="#ff2d51"
                barTintColor="white"
                prerenderingSiblingsNumber={0}
                noRenderContent
                tabBarPosition='bottom'
            >
                {
                    this.state.tabs.map(item=>{
                        return (
                        <TabBar.Item
                            title={item.text}
                            key={item.name}
                            icon={<div className={'iconfont ' + item.icon}
                            />
                            }
                            selectedIcon={<div className={'iconfont ' + item.icon}
                            />
                            }
                            selected={this.state.selectedTab === item.path}
                            onPress={() => {
                                this.setState({
                                    selectedTab: item.path,
                                });
                                this.props.history.push(item.path);
                            }}
                        >
                        </TabBar.Item>
                        )
                    })
                }
                
            </TabBar>
            </div>
      </div>
    );
  }
}


App.contextTypes = {
  router:PropTypes.object
}

// 利用withRouter高阶组件包装App组件
App = withRouter(App);
export default App;
