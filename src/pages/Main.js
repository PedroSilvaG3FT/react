import React from "react";
import "./Main.css";
import logo from "../assets/img/security.svg";
import like from "../assets/img/like.svg";
import dislike from "../assets/img/close.svg";

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />

      <ul>
        <li>
          <img
            src="https://i.pinimg.com/originals/12/73/c3/1273c3b6276f28b68aa0276275a58275.jpg "
            alt=""
          />
          <footer>
            <strong>Pedro Silva</strong>
            <p>Teste de campo da descrição</p>
          </footer>

          <div className="buttons ">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>

            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img
            src="https://i.pinimg.com/originals/12/73/c3/1273c3b6276f28b68aa0276275a58275.jpg "
            alt=""
          />
          <footer>
            <strong>Pedro Silva</strong>
            <p>Teste de campo da descrição</p>
          </footer>

          <div className="buttons ">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>

            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img
            src="https://i.pinimg.com/originals/12/73/c3/1273c3b6276f28b68aa0276275a58275.jpg "
            alt=""
          />
          <footer>
            <strong>Pedro Silva</strong>
            <p>Teste de campo da descrição</p>
          </footer>

          <div className="buttons ">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>

            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img
            src="https://i.pinimg.com/originals/12/73/c3/1273c3b6276f28b68aa0276275a58275.jpg "
            alt=""
          />
          <footer>
            <strong>Pedro Silva</strong>
            <p>Teste de campo da descrição</p>
          </footer>

          <div className="buttons ">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>

            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>

        <li>
          <img
            src="https://i.pinimg.com/originals/12/73/c3/1273c3b6276f28b68aa0276275a58275.jpg "
            alt=""
          />
          <footer>
            <strong>Pedro Silva</strong>
            <p>Teste de campo da descrição</p>
          </footer>

          <div className="buttons ">
            <button type="button">
              <img src={dislike} alt="Dislike" />
            </button>

            <button type="button">
              <img src={like} alt="Like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
