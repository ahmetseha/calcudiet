import styles from "./ingredients.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import IngredientsLine from "../IngredientsLine/IngredientsLine";

const Ingredients = ({ ingredientLines, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <p className={styles.header}>Ingredients</p>
      </div>
      <hr />
      {ingredientLines.map((item, index) => {
        return <IngredientsLine item={item} key={index} />;
      })}
      <hr className={styles["bottom-hr"]} />
      <div className={styles["footer-container"]}>
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className={styles["see-instructions"]}
        >
          <span>Full Instructions</span>
          <FontAwesomeIcon className={styles["faIcon"]} icon={faUtensils} />
        </a>
      </div>
    </div>
  );
};

export default Ingredients;
