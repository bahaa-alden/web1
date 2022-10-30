import react, { useReducer } from "react";
import { formReducer, INIT_STATE } from "./formReducer";
import styles from "./css/Form.module.css";
function Form() {
  const [state, dispatch] = useReducer(formReducer, INIT_STATE);
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={state.title}
          placeholder="Title"
        />
        <input type="text" name="desc" placeholder="Desc" value={state.desc} />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={state.price}
        />
        <p>Category:</p>
        <select name="category" id="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea placeholder="Seperate tags with commas..."></textarea>
        <button type="button">Add Tags</button>
        <div className={styles.tags}>
          {state.tags.map((tag: string) => (
            <small key={tag}>{tag}</small>
          ))}
        </div>
        <div className={styles.quantity}>
          <button type="button">-</button>
          <span>Quantity ({state.quantity})</span>
          <button type="button">+</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
