import { useReducer, useRef } from "react";
import { formReducer, INIT_STATE } from "./formReducer";
import styles from "./css/Form.module.css";
import { FormatInputPathObject } from "path";
function Form() {
  const [state, dispatch] = useReducer(formReducer, INIT_STATE);
  const ref = useRef<any>();
  const handleTags = () => {
    const value = ref.current?.value.split(",");
    dispatch({ type: "ADD_TAGS", paylod: { value: value } });
  };
  const removeTag = (el) => {
    const tags = state.tags.filter((e) => {
      return e !== el.target.innerHTML;
    });
    dispatch({ type: "REMOVE_TAG", paylod: { value: tags } });
  };
  const inputHandle = (e) => {
    dispatch({
      type: "INPUT_CHANGE",
      paylod: { name: e.target.name, value: e.target.value },
    });
  };
  const decreaseQuan = () => {
    dispatch({ type: "DECREASE", paylod: 1 });
  };
  const increaseQuan = () => {
    dispatch({ type: "INCREASE", paylod: 1 });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={state.title}
          placeholder="Title"
          onChange={inputHandle}
        />
        <input
          type="text"
          name="desc"
          placeholder="Desc"
          onChange={inputHandle}
          value={state.desc}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={state.price}
          onChange={inputHandle}
        />
        <p>Category:</p>
        <select name="category" id="category" onChange={inputHandle}>
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={ref}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button onClick={handleTags} type="button">
          Add Tags
        </button>
        <div className={styles.tags}>
          {state.tags.map((tag, index) => {
            return (
              <small key={index} onClick={removeTag}>
                {tag}
              </small>
            );
          })}
        </div>
        <div className={styles.quantity}>
          <button type="button" onClick={decreaseQuan}>
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button type="button" onClick={increaseQuan}>
            +
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
