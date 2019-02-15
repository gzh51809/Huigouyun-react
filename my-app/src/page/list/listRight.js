import React,{Component} from 'react';
import { Divider } from 'antd';
import {withRouter} from 'react-router-dom';
import  '../../sass/listRight.scss';
import axios from'axios';
class listRight extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            id:this.props.id
            
        }
        this.gotolistDatail.bind(this)
    }
    componentWillMount () {
        // console.log(this.props.id)
            this.setState({
               id:this.props.id
            })
        //  
        
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.id)
        let _this=this;
        axios.get('http://www.lechuyigou.com/mobile/index.php?c=goods_class&a=get_child_all&', {
            params: {
                gc_id:nextProps.id
            }
          })
          .then(function (response) {
            // console.log(1);

            // console.log(response)
            // this.state.list=response.data.datas;
            _this.setState({
               list:response.data.datas
            })
            // console.log(nextProps,nextState);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    // getItem(item){
    //     item.child.map(val=>{
    //                 return (<dd key={val.gc_id}><a>{val.gc_name}</a></dd>)
    //     })
    // }
    gotolistDatail(index){
        let {history}=this.props;
        console.log('id',index)
        history.push('/listdatail/'+index);
    }
    render(){
    //  console.log('this',this.props)
        let {data,id} =this.props;
        console.log('data',data);
        if(id==1){
            return (
               <div id='listRight2'>
                   <dl>
                       {
                           data.tuijian.map(val=>(
                            <dd key={val.brand_id} onClick={this.gotolistDatail.bind(this,val.brand_id)}>
                                <a>
                                    <img src={val.brand_pic} />
                                    <p>{val.brand_name}</p>
                                </a>
                            </dd>
                           ))
                        
                       }
                        
                   </dl>
               </div> 
            )
        }
        else{
              return (
                <div id='listRight'>
                    {
                        this.state.list.class_list.map((item,idx)=>(
                        <dl key={idx}>
                            <dt onClick={this.gotolistDatail.bind(this,item.gc_id)}>
                                <a><i className="col0"></i>{item.gc_name}<i className="arrow-r"></i></a>
                            </dt>
                            {item.child.map(val=>{
                                return (<dd key={val.gc_id} onClick={this.gotolistDatail.bind(this,val.gc_id)}><a>{val.gc_name}</a></dd>)
                            })}
                        </dl>
                        ))
                    }  
                            
                                
                            
                             
                       
             </div> 
              )
            
        }
    }
}
listRight=withRouter(listRight)
export default listRight;
