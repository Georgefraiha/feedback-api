import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext= createContext()

export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback]= useState([
        {
            id: 1,
            text: 'this context for item1',
            rating:10,
        },
        {
            id: 2,
            text: 'this context for item2',
            rating:9,
        },
        {
            id: 3,
            text: 'this context for item3',
            rating:7,
        },

    ])

    const [feedbackEdit, setFeedbackEdit]= useState({
        item: {},
        edit: false,
    })

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete? ")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };

      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      };

      const editFeedback = (item)=>{
        setFeedbackEdit({
        item,
        edit: true,
        })
      }


      const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item)=> (item.id === id ? 
           { ...item, ...updItem}:item))
       )
      }

    return (
    <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext