import React, { PureComponent } from 'react';
import { withStyles, createStyles } from "@material-ui/styles";
import PayPackageItem from './PayPackageItem';
import '../css/mui.min.css'
import '../css/ShopMorePlay.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import ScrollArea from 'react-scrollbar';
import ScrollView from '../component/ScrollView';
import {Link} from 'react-router-dom';



export default class ShopMorePlayView extends PureComponent { // 父组件


  constructor(props) {
    super(props)
  }



  // 互动视图产生
  interactiveView = ()=>{


  }

  buyClicked = () =>{
    

  }

  render() {

    return (
      <div>
        <div className="header">
          <img src="//h5.w2gou.com/h5/img/lifeAssistant/banner.jpg" align="absmiddle" />
        </div>
        <div className="mui-content">
          <div className="buy_play_container">
            <ul className="mui-table-view mui-grid-view mui-grid-9 girdFour" style={{"padding-bottom": '0px'}}>
              <div className="classify">热门玩法</div>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_lt_outer">
                  <div id="gopng_lt"></div>
                </div>
                <span>智能聊天</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_xh_outer">
                  <div id="gopng_dge"></div>
                </div>
                <span>点歌</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_xh_outer">
                  <div id="gopng_xz"></div>
                </div>
                <span>星座</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_ccy_outer">
                  <div id="gopng_ljfl"></div>
                </div>
                <span>垃圾分类</span>
              </li>
            </ul>
            <div className="mui-table-view mui-grid-view mui-grid-9 girdFour hotgame">
              <div className="classify">火爆游戏</div>
              <div id="hotgame" className="hotgame-wrap">
                <ul className="hotgame-inner">
                  <li><div><img src="./img/lifeAssistant/icon/game_bg_09.png" id="gopng_cyy" align="absmiddle" alt="" /></div><span className="new"></span>></li>
                  <li><div><img src="//h5.w2gou.com/h5/img/lifeAssistant/icon/game_bg_01.png" id="gopng_cgm" align="absmiddle" alt="" /></div></li>
                  <li><div><img src="//h5.w2gou.com/h5/img/lifeAssistant/icon/game_bg_02.png" id="gopng_ctp" align="absmiddle" alt="" /></div></li>
                  <li><div><img src="//h5.w2gou.com/h5/img/lifeAssistant/icon/game_bg_03.png" id="gopng_cyjl" align="absmiddle" alt="" /></div></li>
                  <li><div><img src="//h5.w2gou.com/h5/img/lifeAssistant/icon/game_bg_08.png" id="gopng_cdy" align="absmiddle" alt="" /></div></li>
                  <li><div><img src="//h5.w2gou.com/h5/img/lifeAssistant/icon/game_bg_05.png" id="gopng_cmy" align="absmiddle" alt="" /></div></li>
                  <li><div><img src="//h5.w2gou.com/h5/img/lifeAssistant/icon/game_bg_06.png" id="gopng_ccy" align="absmiddle" style={{"overflow":'hidden'}} alt="" /></div></li>
                  <li><div><img src="//h5.w2gou.com/h5/img/lifeAssistant/icon/game_bg_04.png" id="gopng_yfpd" align="absmiddle" alt="" /></div></li>
                </ul>
              </div>
            </div>
            <ul className="mui-table-view mui-grid-view mui-grid-9 girdFour">
              <div className="classify">互动功能</div>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3 ">
                <div id="gopng_sp_outer">
                  <div id="gopng_hs"></div>
                </div>
                <span>喝水提醒</span>
                <span className="master-label">
                  <span>
                    <span className="master-label-text">主人专属</span>
                    <label></label>
                  </span>
                </span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_ccy_outer">
                  <div id="gopng_tp"></div>
                </div>
                <span>图片搜索</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_tq_outer">
                  <div id="gopng_tq"></div>
                </div>
                <span>天气查询</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_cp_outer">
                  <div id="gopng_cp"></div>
                </div>
                <span>菜谱</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_gs_outer">
                  <div id="gopng_gs"></div>
                </div>
                <span>讲笑话</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_zyhy"></div>
                </div>
                <span>中英互译</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_szjs"></div>
                </div>
                <span>数字计算</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_kd"></div>
                </div>
                <span>查快递</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_rkl"></div>
                </div>
                <span>绕口令</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_yyhd"></div>
                </div>
                <span>语音互动</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_dsts"></div>
                </div>
                <span>定时推送</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_xrhy"></div>
                </div>
                <span>新人欢迎</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_zdyhf"></div>
                </div>
                <span>自定义回复</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_mrjt"></div>
                </div>
                <span>每日囧图</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_lsshjt"></div>
                </div>
                <span>历史上的今天</span>
              </li>
              <li className="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                <div id="gopng_kd_outer">
                  <div id="gopng_jrhl"></div>
                </div>
                <span>今日黄历</span>
              </li>
            </ul>
          </div>
        </div>
        <Link to={`/dist/buy`}>
          <div className="footer-tip-wrap">
            <div className="footer-img">
              <img src="//h5.w2gou.com/h5/img/lifeAssistant/buy.png" alt="" />
            </div>
          </div>
        </Link>

        {/* <div style={{"widht:" : '100%', 'height': '20px'}} >
          <ScrollView>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
            <div>hello is me.</div>
          </ScrollView>
        </div> */}

      </div>
    );
  }
}

