import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall'; 
import TextFieldsIcon from '@material-ui/icons/TextFields';
import Crop32Icon from '@material-ui/icons/Crop32';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import PanToolIcon from '@material-ui/icons/PanTool';
import CanvasListener from '../classes/CanvasListener'


const Canvas = props => {
    const [tool, setTool] = useState("selection")

    //use effect to create a new canvas-listener class
    useEffect(() => {
        new CanvasListener("magazine-canvas")
    }, [])


    const chooseTool = (selectedTool) => {
        setTool(selectedTool)
    }

    return(
        <div style={{ width: props.width + 62, height: props.height, backgroundColor: "white" }}>
            <div className="icon-bar">
                <IconButton aria-label="pan" onClick={()=> chooseTool("pan")}>
                    <PanToolIcon />
                </IconButton>
                <IconButton aria-label="selection" onClick={() => chooseTool("selection")}>
                    <PhotoSizeSelectSmallIcon />
                </IconButton>
                <IconButton aria-label="square" onClick={() => chooseTool("square")}>
                    <Crop32Icon />
                </IconButton>
                <IconButton aria-label="circle" onClick={() => chooseTool("circle")}>
                    <RadioButtonUncheckedIcon />
                </IconButton>
                <IconButton aria-label="text" onClick={() => chooseTool("text")}>
                    <FormatShapesIcon />
                </IconButton>
                <IconButton disabled color="primary" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </div>
            <div id={"magazine-canvas"} className="canvas" style={{width: props.width, height: props.height, backgroundColor: "gray"}} >

            </div>
            <div className={"footer"}>
                Selected tool: {tool}
            </div>
        </div>
    )
}

export default Canvas

//tools
//pan tool
//selection tool
//circle tool
//square tool
//text tool
