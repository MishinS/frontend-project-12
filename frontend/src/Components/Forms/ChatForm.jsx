import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from'react-redux';

import { channelsSuccess  }  from  '../slices/authSlice.jsx';

const ChatForm = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    
        axios
            .get('/api/v1/channels', {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data); // =>[{ id: '1', name: 'general', removable: false }, ...]
                const channel = JSON.stringify(response.data);
                
                localStorage.setItem('channel', channel);
                dispatch(channelsSuccess(token))
                
            })
            .catch((err) => {    
                console.error('Ошибка', err);
            })
            const channels = useSelector((state) => state.auth.channel);
            console.log(channels);
    return (
        <div className="chat-form">
            <p>Channels</p>
            <p>Messages</p>
            <input></input>
            <button>Send</button>
        </div>
        
    )
    
}

export default  ChatForm;