import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SettingsIcon from '@material-ui/icons/Settings';
import { Close } from '@material-ui/icons';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import PaletteIcon from '@material-ui/icons/Palette';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
//change font family

let quote= [`cursive`,`sans-serif`,`monospace`,`Arial`,'Courier New', 'Times New Roman','Gill Sans', 'Gill Sans MT','Trebuchet MS', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode'];
let fontchange=()=>{
   var randomQuoet = quote[Math.floor(Math.random()*quote.length)];
   document.documentElement.style.setProperty('--fontfamily', randomQuoet);
};
//change font family end
let fontweightbold = (e)=>{
  document.documentElement.style.setProperty('--fontweight', (e.target.value * 10));
}
  //change font color
  let inputfunc =(e)=>{
  document.documentElement.style.cssText += `
   --grey:${e.target.value};
   --black: ${e.target.value};
   --orange: ${e.target.value};
   `
 } 
   let inputfuncforbgcolor =(e)=>{
    document.documentElement.style.setProperty('--white', `${e.target.value}`);
   }
  //change font color end
  return (
    <div className='setting'>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
       <SettingsIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
    <div className='settingcontent'>
      <MenuItem onClick={handleClose} className='settingclosebtn'><Close/></MenuItem>
        <MenuItem ><input type='color' id='colorinput' value='#FCA61F' onChange={inputfunc}/><TextRotationNoneIcon/></MenuItem>
        <MenuItem ><input type='color' id='colorinput' value='#FCA61F' onChange={inputfuncforbgcolor}/> <PaletteIcon/></MenuItem>
        <MenuItem onClick={fontchange}>Font Family<FontDownloadIcon/></MenuItem>
        <MenuItem><input type='range' id='rangeinput' step='10' max='90' min='10' className='boldslider' onInput={fontweightbold}/><FormatBoldIcon/></MenuItem>
       </div>
      </Menu>
    </div>
  );
}
