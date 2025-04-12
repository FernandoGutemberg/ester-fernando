import { useState, useEffect } from "react";

const History = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`/messages/${userId}`)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [userId]);

  return (
    <div>
      <h2>Histórico de Mensagens</h2>
      {messages.length > 0 ? (
        messages.map((msg) => (
          <div key={msg._id}>
            <p>{msg.date}: {msg.text}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma mensagem antiga.</p>
      )}
    </div>
  );
};

export default History;
