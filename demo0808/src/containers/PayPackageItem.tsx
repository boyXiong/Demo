import React, { PureComponent } from 'react';
import { withStyles, createStyles} from "@material-ui/styles";


// 依赖于主题的样式
const styles = createStyles({
  root: {
    height: '100%',
    width: '33.3333%',
    display: 'inline-block',
    textAlign: 'center',
  },
  recommend:{
    width: '40px',
    height: '10px',
    fontSize: '11px',
    background: '#FF0000'
  },
  content:{
    margin: 'auto',
    width: '300px',

  },
  textField: {
    flexBasis: 200,
    margin: '10px',
    width: '100%',
  },
  button: {
    width: '100%',
    margin: '10px'
  },
  Linear:{
    width: '100%',
    margin: '10px'
  }
});



class PayPackageItem extends PureComponent<any, any> { // 父组件

  constructor(props: any) {
    super(props)
    this.state = {
      isSelected: this.props.isSelected
    }
  }


  render () {
    let { classes,price, day, offer, isRecommend} = this.props;
    return (
      <div className={classes.root}>
        {isRecommend && <div className={classes.recommend}>推荐</div>}
        <div>{day}</div>
        <div>{price}</div>
        <div>{offer}</div>
      </div>
    )
  }
}

export default withStyles(styles)(PayPackageItem);
