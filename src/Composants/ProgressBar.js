export const ProgressBar = ({bgColor, progress, height}) => {

    const parentDiv = {
        height: height,
        width: '100 %', 
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        // margin: 50
    }
    const childDiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgColor,
        borderRadius: 5,
    }
     const progresstext = {
        padding: 1,
        color: 'black',
        fontWeight: 900
      } 

    return(
        <div style={parentDiv}>  
            <div style={childDiv} className={bgColor}>  
            <span style={progresstext}></span>   
            </div>        
        </div> 
    )
}