


export const withMessageHistory= new RunnableWithMessageHistory(
    {
        runnable: chain,
        getMessageHistory:async (sessionId) => {
            if (messageHistories[sessionId]===undefined){
                messageHistories[sessionId]= new InMemoryChatMessageHistory();    
            }
            return messageHistories[sessionId];
        },
        inputMessagesKey:"input",
        historyMessagesKey:"chat_history",
    }
) //! Otro tipo de runnable sequence, este deberia tener en cuenta el historial de mensajes