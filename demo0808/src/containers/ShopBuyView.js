import React, { PureComponent } from 'react';
import { withStyles, createStyles } from "@material-ui/styles";
import PayPackageItem from './PayPackageItem';
import '../css/mui.min.css'
import '../css/buy.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
// import mui from './js/mui.min.js'; // 无法使用 mui.js 
// window.mui = mui // 全局对象使用 mui;

export default class ShopBuyView extends PureComponent { // 父组件


  constructor(props) {
    super(props)

    console.log("props:", this.props);
    let storage = window.localStorage;
    storage.home = "home";

    console.log("storage: ", storage);
    
    this.state = {
      open : false
    }
  }

  buyClicked = ()=> {
    console.log("我被点击了");
    this.handleClickOpen();
  }

  handleClickOpen = ()=>{
    this.setState({
      open : true,
    })
  }

  handleClose =()=>{
    console.log("handleClose  close");
    this.setState({
      open : false,
    })
  }

  render() {
    let {open } = this.state;

    return (
      <div className="mui-content">
      <div className="block content">
        <div className="content-info">
          <div>账号：<em id="account">***</em></div>
        </div>
        <p className="text_title">王二狗VIP套餐:</p>
        <ul className="content-price-wrap clear">
        </ul>

        <div className="coupon-wrap">
          <div className="coupon-inner">
            <span className="select-icon"></span>使用/领取优惠券
            <span className="select-text"></span>
          </div>
        </div>
        <div className="tc"><button id="buy_btn" className="mui-btn mui-btn-warning" style={{width:'100%'}} onClick={this.buyClicked}>买一只</button></div>

      </div>

      <div className="block explain blocks">
        <div className="explain-title">购买需知</div>
        <div className="explain-text">
          <p><span className="text-num">01.</span><span style={{color:'red',  "fontWeight": 'bold'}}>【七夕特惠】</span>8月9日前，根据<span style={{color: 'red', 'fontWeight': 'bold'}}>后院等级</span>续费低至<span style={{color: 'red', 'fontWeight': 'bold'}}>5折</span>；</p>
          <p><span className="text-num">02.</span>请遵守国家法律规定，二狗AI会自动识别您的群是否为“非法群”(赌博、色情、毒品等)，<span style={{color: 'red', 'fontWeight': 'bold'}}>若为“非法群”，二狗则会自动退群，并终止所有服务</span>；</p>
          <p><span className="text-num">03.</span>每位用户拥有一只超级狗，邀请进群激活后，则不能再换群，<span style={{color: 'red', 'fontWeight': 'bold'}}>请谨慎选择要进入的群，防止被踢</span>；</p>
          <p><span className="text-num">04.</span><span style={{color: 'red', 'fontWeight': 'bold'}}>超级狗默认服务一个群</span>，若有多个群需要超级狗服务，对超级狗私聊发送"开群"，购买更多的群服务；</p>
          <p><span className="text-num">05.</span>如需帮助，请 <span className="toCustomerSrv">联系客服</span> 。</p>
        </div>
        <div className="line"></div>
        <div className="explain-title mui-navigate-right">VIP超级狗特权<span id="linkUrl">更多玩法</span></div>
        <ul className="mui-table-view mui-grid-view mui-grid-9 girdFour clear">
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_lt_outer">
              <div id="gopng_lt"></div>
            </div>
            <span>智能陪聊</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_xh_outer">
              <div id="gopng_dge" style={{'background-size': '65% !important'}}></div>
            </div>
            <span>点歌</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_sp_outer">
              <div id="gopng_sp" style={{'background-size': '64% !important'}}></div>
            </div>
            <span>免VIP看影视</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_ccy_outer">
              <div id="gopng_yyhd"></div>
            </div>
            <span>语音互动</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_ccy_outer">
              <div id="gopng_qyx"></div>
            </div>
            <span>群游戏</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_sp_outer">
              <div id="gopng_xsp"></div>
            </div>
            <span>小视频</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_xh_outer">
              <div id="gopng_xz"></div>
            </div>
            <span>星座运势</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_ccy_outer">
              <div id="gopng_tp"></div>
            </div>
            <span>查图片</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_tq_outer">
              <div id="gopng_tq"></div>
            </div>
            <span>天气</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_lj_outer">
              <div id="gopng_lj"></div>
            </div>
            <span><Link to="/home">垃圾分类</Link></span>
          </li>
        </ul>
      </div>

      <Dialog
        open={open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
    );
  }
}

/*
 
  <div className="mui-content">
      <div className="block content">
        <div className="content-info">
          <div>账号：<em id="account">***</em></div>
        </div>
        <p className="text_title">王二狗VIP套餐:</p>
        <ul className="content-price-wrap clear">

        </ul>
        <div className="coupon-wrap">
          <div className="coupon-inner">
            <span className="select-icon"></span>使用/领取优惠券
            <span className="select-text"></span>
          </div>
        </div>
        <div className="tc"><button id="buy_btn" className="mui-btn mui-btn-warning" style="width:100%">买一只</button></div>
      </div>
      <div className="block explain blocks">
        <div className="explain-title">购买需知</div>
        <div className="explain-text">
          <p><span className="text-num">01.</span><span style="color: red; fontWeight: bold;">【七夕特惠】</span>8月9日前，根据<span style="color: red; fontWeight: bold;">后院等级</span>续费低至<span style="color: red; fontWeight: bold;">5折</span>；</p>
          <p><span className="text-num">02.</span>请遵守国家法律规定，二狗AI会自动识别您的群是否为“非法群”(赌博、色情、毒品等)，<span style="color: red; fontWeight: bold;">若为“非法群”，二狗则会自动退群，并终止所有服务</span>；</p>
          <p><span className="text-num">03.</span>每位用户拥有一只超级狗，邀请进群激活后，则不能再换群，<span style="color: red; fontWeight: bold;">请谨慎选择要进入的群，防止被踢</span>；</p>
          <p><span className="text-num">04.</span><span style="color: red; fontWeight: bold;">超级狗默认服务一个群</span>，若有多个群需要超级狗服务，对超级狗私聊发送"开群"，购买更多的群服务；</p>
          <p><span className="text-num">05.</span>如需帮助，请 <span className="toCustomerSrv">联系客服</span> 。</p>
        </div>
        <div className="line"></div>
        <div className="explain-title mui-navigate-right">VIP超级狗特权<span id="linkUrl">更多玩法</span></div>
        <ul className="mui-table-view mui-grid-view mui-grid-9 girdFour clear">
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_lt_outer">
              <div id="gopng_lt"></div>
            </div>
            <span>智能陪聊</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_xh_outer">
              <div id="gopng_dge" style="background-size:65% !important"></div>
            </div>
            <span>点歌</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_sp_outer">
              <div id="gopng_sp" style="background-size: 64% !important;"></div>
            </div>
            <span>免VIP看影视</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_ccy_outer">
              <div id="gopng_yyhd"></div>
            </div>
            <span>语音互动</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_ccy_outer">
              <div id="gopng_qyx"></div>
            </div>
            <span>群游戏</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_sp_outer">
              <div id="gopng_xsp"></div>
            </div>
            <span>小视频</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_xh_outer">
              <div id="gopng_xz"></div>
            </div>
            <span>星座运势</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_ccy_outer">
              <div id="gopng_tp"></div>
            </div>
            <span>查图片</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_tq_outer">
              <div id="gopng_tq"></div>
            </div>
            <span>天气</span>
          </li>
          <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <div id="gopng_lj_outer">
              <div id="gopng_lj"></div>
            </div>
            <span>垃圾分类</span>
          </li>
        </ul>
      </div>
    </div>

        */