import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag, setTag] = useState("");
  const{gif,loading,fetchData} =useGif(tag);
  
  function clickHandler(){
        fetchData(tag);
    }
  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className='tag'>
        <h2 style={{textDecoration:"underline", textTransform:"uppercase"}}>A RANDOM {tag} GIF</h2>
        {
          loading ? <Spinner/> : <img alt='gif' src={gif} style={{maxHeight:"350px"}}/>
        }
        <TextField style={{backgroundColor:"lightgray"}} onChange={changeHandler} value={tag}></TextField>
        <Button variant='contained' onClick={clickHandler} style={{marginBottom:"10px", backgroundColor:"teal"}}>Generate</Button>
    </div>
  )
}

export default Tag