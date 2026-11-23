import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { answerFromKnowledge, quickPrompts } from "../data/chatKnowledge";

const WELCOME = "Hi there! I'm Nirmaan's Assistant. How can I help you today?";

/**
 * Built-in FAQ assistant (no Ravvio). Not mounted by default — see App.js.
 * To use: import Chatbot and add <Chatbot /> next to Routes; remove Ravvio script from public/index.html.
 */
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ role: "bot", text: WELCOME }]);
  const endRef = useRef(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function push(role, text) {
    setMessages((m) => [...m, { role, text }]);
  }

  function ask(text) {
    const q = text.trim();
    if (!q) return;
    push("user", q);
    setInput("");
    const reply = answerFromKnowledge(q);
    window.setTimeout(() => push("bot", reply), 280);
  }

  function onSubmit(e) {
    e.preventDefault();
    ask(input);
  }

  return (
    <div className="site-chatbot font-dmsans">
      {open && (
        <div className="site-chatbot__panel" role="dialog" aria-label="Nirmaan Assistant">
          <div className="site-chatbot__head">
            <div>
              <strong>Nirmaan&apos;s Assistant</strong>
              <span>Pre-Incubator · IIT Madras</span>
            </div>
            <button type="button" className="site-chatbot__close" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </div>

          <div className="site-chatbot__body">
            {messages.map((m, i) => (
              <div key={`${m.role}-${i}`} className={`site-chatbot__bubble site-chatbot__bubble--${m.role}`}>
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="site-chatbot__prompts">
            {quickPrompts.map((p) => (
              <button type="button" key={p} onClick={() => ask(p)}>
                {p}
              </button>
            ))}
          </div>

          <form className="site-chatbot__form" onSubmit={onSubmit}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about programs, funding…"
              aria-label="Message"
            />
            <button type="submit" className="site-chatbot__send">
              Send
            </button>
          </form>
          <p className="site-chatbot__foot">
            Prefer email?{" "}
            <a href="mailto:nirmaan@smail.iitm.ac.in" className="site-chatbot__foot-mail">
              nirmaan@smail.iitm.ac.in
            </a>
            {" · "}
            <Link to="/contact-us">Contact us</Link>
          </p>
        </div>
      )}

      <button
        type="button"
        className={`site-chatbot__toggle${open ? " is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close Nirmaan Assistant" : "Open Nirmaan Assistant"}
      >
        {open ? <span aria-hidden="true">×</span> : <span className="site-chatbot__toggle-label">Ask</span>}
      </button>
    </div>
  );
}