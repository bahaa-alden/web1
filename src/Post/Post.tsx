import { useReducer } from "react";
import { INIT_STATE } from "./INIT_STAETE";
import { postReducer } from "./postReducer";
import axios from "axios";
import { actions } from "./Actions";
import styles from "./css/Post.module.css";
function Post() {
  const [state, dispatch] = useReducer(postReducer, INIT_STATE);
  const handleData = async () => {
    dispatch({ type: actions.Start });
    try {
      const respon = await (
        await axios.get("https://jsonplaceholder.typicode.com/posts/1")
      ).data;
      dispatch({ type: actions.Success, paylod: respon });
    } catch {
      dispatch({ type: actions.error });
    }
  };
  return (
    <div className={styles.ss}>
      <button onClick={handleData}>
        {state.loading ? "WAIT" : "FETCH DATA"}
      </button>
      <p>{state.post?.title}</p>
      <span style={{ color: "red" }}>{state.error && "There is an error"}</span>
    </div>
  );
}

export default Post;
