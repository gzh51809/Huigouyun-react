import React,{Component} from 'react';
import  '../../sass/find.scss';

class find extends Component{
    render(){
        return(
            <header id="header" className="nctouch-product-header fixed">
  <div className="header-wrap">
    <div className="header-l"> <a href="javascript:history.go(-1)"> <i className="back"></i> </a> </div>
    <div className="header-inp"> <i className="icon"></i> <span className="search-input" id="keyword">请输入关键词</span> </div>
    <div className="header-r"> <a id="header-nav" href="javascript:void(0);" className="search-btn">搜索</a> </div>
  </div>
  <div className="nctouch-nav-layout">
    <div className="nctouch-nav-menu"> <span className="arrow"></span>
      {/* <ul>
        <li><a href="../index.html"><i className="home"></i>首页</a></li>
        <li><a href="search.html"><i className="search"></i>搜索</a></li>
        <li><a href="product_first_categroy.html"><i class="categroy"></i>分类</a></li>
        <li><a href="member/message.html"><i class="message"></i>消息</a></li>
        <li><a href="cart_list.html"><i class="cart"></i>购物车<sup></sup></a></li>
        <li><a href="member/member.html"><i class="member"></i>我的商城</a></li>
      </ul> */}
    </div>
  </div>
</header>
        )
    }
}
export default find;