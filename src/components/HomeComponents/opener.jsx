import React from 'react'
import aa from './a1.jpg'
import a from './a.png'
import Typography from '@mui/joy/Typography'
const Opener = () => {
  return (
      <div style={{position:'relative',top:'10.3rem'}}>
        <img style={{height:'35rem',width:'100%',}} src={aa} alt="" />
          <div style={{  position:'relative' ,bottom:'27rem' , left:'-5rem', }}>
          <img src={a} alt="" style={{height:'15rem'}} />
          </div >

          <div style={{  position:'relative' ,bottom:'41rem' , left:'15rem', }}>
                <Typography  gutterBottom sx={{color:'#3CCF4E' , fontSize:'3rem'}} >
                    TRACKMED 
                </Typography>
          </div>
          <div style={{  position:'relative' ,bottom:'43rem' , left:'21rem', }} >
            <Typography  gutterBottom sx={{color:'#44B980' , fontSize:'2rem'}} >
                    BY
            </Typography>
          </div>
          <div style={{  position:'relative' ,bottom:'43rem' , left:'16em', }} >
            <Typography  gutterBottom sx={{color:'#006DC2' , fontSize:'2.5rem'}} >
                    ERROR2000
            </Typography>
          </div>
      </div>
  )
}

export default Opener