import Button from '@mui/material/Button';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {
  const{gif,loading,fetchData} =useGif();
  function clickHandler(){
        fetchData();
    }
  return (
    <div className='random'>
        <h2 style={{textDecoration:"underline"}}>A RANDOM GIF</h2>
        {
          loading ? <Spinner/> : <img alt='gif' src={gif} style={{maxHeight:"350px"}}/>
        }
        <Button variant='contained' onClick={clickHandler} style={{marginBottom:"10px", backgroundColor:"teal"}}>Generate</Button>
    </div>
  )
}

export default Random