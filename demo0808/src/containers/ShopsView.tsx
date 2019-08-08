import React, { PureComponent } from 'react';
import { withStyles, createStyles} from "@material-ui/styles";
import PayPackageItem from './PayPackageItem';

// 依赖于主题的样式
const styles = createStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  content:{
    margin: 'auto',
    width: '300px',
  },
  header:{
    height: '300px',
    width: '100%',
    background: 'url(\'../images/ia_100000002.png\')',
    backgroundSize: '100% 100%',
  },
  textField: {
    flexBasis: 200,
    margin: '10px',
    width: '100%',
  },
  Linear:{
    width: '100%',
    margin: '10px'
  },
  payPackage:{
    width: '100%',
    paddingTop: '200px',
    height: '110px',
    padding: '10px',
  },
  payPackageDes:{
    width: '100%',
    height: '100px',
  },
  button: {
    width: '100%',
    height: '60px',
    background: '#292928',
    fontSize: '21px',
    lineHeight: '60px',
    fontWeight: 'bold',
    borderRadius: '0.75rem',
    color: '#ffda43',
    textAlign: 'center',
  }
});



class ShopsView extends PureComponent<any, any> { // 父组件


  constructor(props: any) {
    super(props)
  
    console.log("卧槽 我进来了");

  }


  render () {
    let { classes } = this.props;
    console.log("卧槽 我进来了");
    
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          {/* <img src={require('../resource/img/ia_100000002.png')} height='100%' width='100%' /> */}
          <div className={classes.payPackage}>
          <div>二狗子VIP套餐</div>
          <div className={classes.payPackageDes}>
            <PayPackageItem price={88} day={100} offer={23} isRecommend={true}/>
            <PayPackageItem price={88} day={100} offer={23} isRecommend={true}/>
            <PayPackageItem price={88} day={100} offer={23} isRecommend={true}/>
          </div>
          <div className={classes.button}>
            立即购买
          </div>

        </div>
        </div>
        <img src={require('../images/ia_100000002.png')}/>
       

      </div>
    )
  }
}


export default withStyles(styles)(ShopsView);
