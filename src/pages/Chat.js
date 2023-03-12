import React, { useState, useRef, useEffect } from "react";
import "./chat.css"
import axios from 'axios' //npm install axios

//map을 통해 출력될 message들을 구성, class 이름으로 스타일이 바뀜 *채팅 인터페이스 기준 right(나) left(상대)* message가 존재하지 않으면 출력하지 않음
function Message(props) {
    let className = "";

    if (props.side === "right") className = "message right appeared";
    else className = "message left appeared"

    return (props.message === ""
        ?
        null
        :
        <li class={className}>
            <div class="avatar"></div>
            <div class="text_wrapper">
                <div class="text">{props.message}</div>
            </div>
        </li>
    )
}


export default function Chat() {
    //input 창의 값을 갖는 state input창의 value와 연결되어 있기 때문에 이 값이 지워지면 input창 내용도 지워짐
    const [message, setMessage] = useState('');
    //채팅 내역을 가지고 있는 state, map을 통해 Message()와 연결되어 있기 때문에 이 값이 업데이트 되면 채팅내역 랜더링도 같이 업데이트 됨
    const [chatList, setChatList] = useState([
        { id: 0, text: "~~가구를 사용하시고 느끼신 점을 자유롭게 말씀해주세요.", side: "left" }]);//현재는 하드 코딩 되어 있으나 추후 쉽게 사용자 요구대로 변경가능

    //채팅 내역 0번이 하드 코딩 되어 있기 때문에 1부터
    let chatId = 1; 

    //chatList state 맨 끝에 새 채팅 내용을 집어 넣음
    const appendMessage = (text, side) => {
        setChatList((prevChatList) => {
            const newMessage = { id: chatId++, text: text, side: side };
            return [...prevChatList, newMessage];
        });
    }

    //enter 키가 눌리거나 버튼을 눌렀을 경우, message와 right(내가 보냈음) 파라미터와 함께 appendMessage, requestGpt를 호출함 그리고 input을 비움
    const handleOnClick = e => {
        e.preventDefault();
        appendMessage(message, "right");
        requestGpt(message);
        setMessage('');
    }

    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            appendMessage(message, "right");
            requestGpt(message);
            setMessage('');
        }
    };

    //input이 바뀌면 바뀐값 message state에 저장
    const handleOnChange = e => {
        setMessage(e.target.value);
    }

    //스크롤 맨밑으로 내리기 
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });

    //chatGpt api에 http 요청을 보내는 함수 text를 질문한다고 생각하면 편함 받은 응답을 파싱해 appendMessage에 left(상대가 보냄) 파라미터와 함께 호출함
    function requestGpt(text) {
        //https://platform.openai.com/account/api-keys 개인키 발급 필요 & 기본적으로 유료이나 18달러 기한제 체험 가능(chatGPT 계정이 있으면 이미 시작 되어있을 것)
        const key = "";
        //하드코딩된 쿼리문 제너럴하게 사용할 수 있게끔 문장을 구성했으니 사용자의 요구에 맞춰 통계를 내도록 추후 쉽게 수정 가능
        const query = "해당 리뷰를 정리한 JSON 코드를 작성해줘.\n항목: 조립 / 설치 편의성, 가성비, 품질 만족도, 디자인, 제품 기능\n척도: 1, 2, 3, 4, 5\n다른 항목과 척도는 사용하지 마.\n예외적으로 리뷰에 관련된 언급이 없는 항목의 척도는 null을 입력해줘.\n설명은 필요없어.";
        const message = text +"\n"+ query;
        axios.post('https://api.openai.com/v1/chat/completions',
            {
                "model": "gpt-3.5-turbo",
                "messages": [{ "role": "user", "content": message}]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ key
                }
            }
        )
            .then((response) => {//api의 응답을 제대로 받은경우 
                appendMessage(response.data.choices[0].message.content, "left");
            })
            .catch((response) => {//종류불문 에러
                appendMessage("에러가 발생 하였습니다. 나중에 다시 시도해주세요.", "left")
                console.log('Error!'); 
            });
    }

    return (
        <>
            <div class="chat_window">
                <div class="top_menu">
                    <div class="buttons">
                        <div class="button close"></div>
                        <div class="button minimize"></div>
                        <div class="button maximize"></div>
                    </div>
                    <div class="title">Chat</div>
                </div>
                <ul class="messages" ref={scrollRef}>
                    {chatList.map((messageInfo) => <Message key={messageInfo.id} message={messageInfo.text} side={messageInfo.side} />)}
                </ul>
                <div class="bottom_wrapper clearfix">
                    <div class="message_input_wrapper">
                        <input class="message_input" placeholder="Type your message here..." onChange={(e) => handleOnChange(e)} onKeyPress={(e) => handleOnKeyPress(e)} value={message} />
                    </div>
                    <div class="send_message" onClick={(e) => handleOnClick(e)}>
                        <div class="icon"></div>
                        <div class="text">Send</div>
                    </div>
                </div>
            </div>
        </>
    );
}