import React,{Component} from 'react';
import { Divider } from 'antd';
import  '../../sass/listRight.scss';
import axios from'axios';
class listRight extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            id:this.props.id
            
        }

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
    render(){
     console.log(this.state.list)
        let {data,id} =this.props;
        // console.log(id);
        if(id==1){
            return (
               <div id='listRight2'>
                   <dl>
                       {
                           data.tuijian.map(val=>(
                            <dd key={val.brand_id}>
                                <a href="">
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
                        <dl key={idx} onclick={handleget_list_id}>
                            <dt >
                                <a><i className="col0"></i>{item.gc_name}<i className="arrow-r"></i></a>
                            </dt>
                            {item.child.map(val=>{
                                return (<dd key={val.gc_id}><a>{val.gc_name}</a></dd>)
                            })}
                        </dl>
                        ))
                    }  
                            
                                
                            
                             
                       
             </div> 
              )
            
        }
    }
}
export default listRight;
