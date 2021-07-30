import React, {useEffect} from 'react'
import PropTypes from 'prop-types';

export default function ShowComments({comments,title }) {

    useEffect(() => {
        console.log(comments);
      
    }, [comments])

   const editComments =(commnetID,commentContent)=>{

    }

    const CommentItems  = comments.map((comments) =>
    <li>{comments.commentContent}  <input type = "button" title = "Edit" onClick = {()=>alert("hello")}/> </li> 
  );
    return (
        <div>
            {title}

            {CommentItems}

          
        </div>
    )
}

ShowComments.propTypes = {
    title: PropTypes.string,
    comments: PropTypes.array
  };
  
  ShowComments.defautPropTypes = {
    title: '',
    comments:[]
  };
