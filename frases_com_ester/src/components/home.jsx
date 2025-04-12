import { useState, useEffect } from "react";

const Home = ({ userId }) => {
  const [message, setMessage] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    fetch(`/message/${userId}`)
      .then((res) => res.json())
      .then((data) => setMessage(data))
      .catch(() => setMessage(null));
  }, [userId]);

  const handleReply = async () => {
    await fetch("/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: userId,
        receiver: message?.sender, // Responde para quem enviou
        text: reply,
      }),
    });
    alert("Resposta enviada!");
  };

  return (
    <div>
      <h2>Mensagem do Dia</h2>
      {message ? (
        <div>
          <p>{message.text}</p>
          <input value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Responda aqui..." />
          <button onClick={handleReply}>Responder</button>
        </div>
      ) : (
        <p>Nenhuma mensagem hoje.</p>
      )}
    </div>
  );
};

export default Home;
