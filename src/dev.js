import './dev.scss';

import ReactStatusManage from './main';

/*===example start===*/
class App extends React.Component{
  state = {
    status:'N',
  };

  render(){
    const {status}=this.state;
    return (
      <div className="react-status-manage">
        <ReactStatusManage status={status}  statusList={['N','A','F']}>
          <span>未开始</span>
          <span>进行中</span>
          <span>已经结束</span>
        </ReactStatusManage>

      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
