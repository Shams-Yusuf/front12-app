import { useState } from "react";
function Messages() {
  const [messages, setMessage] = useState([
    {
      id: 1,
      text: "hello",
      author: "Adam",
      side: "left",
    },
    {
      id: 2,
      text: "hello",
      author: "Admin",
      side: "right",
    },
    {
      id: 3,
      text: "как дела?",
      author: "Adam",
      side: "left",
    },
    {
      id: 4,
      text: "хорошо!",
      author: "Admin",
      side: "right",
    },
  ]);

  function deleteMessage(id) {
    setMessage(
      messages.filter((item) => {
        if (item.id == id) {
          return false;
        }
        return true;
      })
    );
  }

  return messages.map((item, index) => {
    return (
      <div
        key={index}
        className={`row ${item.side === "right" ? "justify-content-end" : ""} `}
      >
        <div className="col-3">
          <div className={item.side}>
            <p>{item.text} </p>
            <span>{item.author}</span>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => deleteMessage(item.id)}
          >
            x
          </button>
        </div>
      </div>
    );
  });
}
export default Messages;
