import React from 'react';

const modalShow = {
	margin: 'auto',
  position: 'fixed',
  bottom: '0',
  right: '0',
  overflow: 'scroll',
  zIndex: '1000000',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
  display: 'block',
};

const modalHide = {
  display: 'none',
};

const menuList = {
	position: 'sticky',
  background: 'white',
  width: 'auto',
  margin: 'auto',
  height: 'auto',
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '16px',
  lineHeight: '1.43',
  color: '#484848',
};

const menuButton = {
  backgroundColor: 'white',
  top: '0',
  left: '0',
  border: '0px',
  padding: '0px',
  margin: '0px',
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '40px',
  color: '#484848',
  textAlign: 'center',
  cursor: 'pointer',
};

const Menu = (props) => {
	return(
		<div style={props.menu ? modalShow : modalHide}>
			<button style={menuButton} onClick ={() => {
				props.scroll();
				props.toggle();
			}}>Back</button>
			<section style={menuList}>
			<div style={'display':'block'}>
				<img src="https://static.wixstatic.com/media/ed143b_56df559601234e25b4e8ce4dd816a7e2~mv2_d_1800_3600_s_2.jpg/v1/crop/x_86,y_0,w_1628,h_3600/fill/w_417,h_922,al_c,q_85,usm_0.66_1.00_0.01/urban_ritual_menu_v04tk_noprice-01.webp"></img>
			</div>
			<div style={'display':'block'}>
				<img src="https://static.wixstatic.com/media/ed143b_44e9d60a143b4dcdbda5657317509a1b~mv2_d_1800_3600_s_2.jpg/v1/crop/x_90,y_0,w_1620,h_3600/fill/w_415,h_922,al_c,q_85,usm_0.66_1.00_0.01/urban_ritual_menu_v04tk_noprice-02.webp"></img>
			</div>
			</section>
		</div>

		)
};

export default Menu;