import React, {useState} from 'react';
import ShowComments from '../showComments/ShowComments';

export default function Comments() {
    const [commentsEneterd, setcommentsEneterd] = useState("");
    const [saveComments, setsaveComments] = useState([])

    const saveCommnets = (e)=>{

        setcommentsEneterd(e.target.value);




    }

    const submitComment=()=>{
        /*
           stacture of save comments will be 

           saveComments =[{

            commentID: unqueKey,
            commentContent : ""

           } ]
        
        */
           let tempCommentID = saveComments.length;
           let  commentContent =  commentsEneterd

           let tempSetSaveComments = { commentID: tempCommentID, commentContent: commentContent}
         
           setsaveComments([...saveComments, tempSetSaveComments]);

         
        
    }


    return (
        <div>
            <input type = "text" onChange = {saveCommnets}/>
            <input type = "button" title = "Submit comments" onClick = {submitComment}/>
            <ShowComments comments = {saveComments} title = "Entered Comments are: "/>
        </div>
    )
}
