import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  function handle() {
    const input = document.getElementById("input");
    let p = document.createElement("li");
    p.innerHTML = `${input.value}`;

    let sil = document.createElement("button");
    sil.textContent = "sil";
    let done = document.createElement("button");
    let ul = document.getElementById("ul");

    done.textContent = "onayla";
    ul.appendChild(p);
    ul.appendChild(sil);
    ul.appendChild(done);
    done.classList.add("button");
    ul.classList.add("container");
    sil.classList.add("button");

    sil.addEventListener("click", function () {
      ul.removeChild(p);
      ul.removeChild(sil);
      ul.removeChild(done);
    });

    done.addEventListener("click", function () {
      p.style.textDecoration = "line-through";
    });
  }

  return (
    <>
      <input
        type="text"
        id="input"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handle}>Add</button>
      <div>
        <ul className="ul-container" id="ul"></ul>
      </div>
    </>
  );
}

export default App;
