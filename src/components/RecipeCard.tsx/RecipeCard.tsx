import styles from "./RecipeCard.module.css";

export default function RecipeCard() {
  return (
    <article className={styles.RecipeCard}>
      <picture>
        <source srcSet="/OmeletteImageTwo.png" media="(min-width: 640px)" />
        <source srcSet="/image-omelette.jpeg" media="(min-width: 880px)" />
        <img
          className={styles.RecipeImage}
          src="/image-omelette.jpeg"
          alt="Omelette dish with vegetables and meats"
        />
      </picture>
      <section className={styles.RecipeTextContent}>
        <section className={styles.RecipeIntroSection}>
          <h2 className={`${styles.RecipeTitle} textPresetOne`}>
            Simple Omelette Recipe
          </h2>
          <p className={`${styles.RecipeSummary} textPresetFour`}>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>
        <section className={styles.PreperationGroup}>
          <h3 className={`${styles.PreperationTitle} textPresetThree`}>
            Preparation time
          </h3>
          <ul className={`${styles.PreperationList} textPresetFour`}>
            <li>
              <b>Total</b>: Approximately 10 minutes
            </li>
            <li>
              <b>Preperation</b>: 5 Minutes
            </li>
            <li>
              <b>Cooking</b>: 5 Minutes
            </li>
          </ul>
        </section>
        <section className={styles.IngredientsGroup}>
          <h3 className={`${styles.SectionTitle} textPresetTwo`}>
            Ingredients
          </h3>
          <ul className={`${styles.IngredientsList} textPresetFour`}>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>
        <hr />
        <section className={styles.InstructionsGroup}>
          <h3 className={`${styles.SectionTitle} textPresetTwo`}>
            Instructions
          </h3>
          <ol className={`${styles.InstructionsList} textPresetFour`}>
            <li>
              <b>Beat the eggs: </b>In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <b>Heat the pan: </b>Place a non-stick frying pan over medium heat
              and add butter or oil.
            </li>
            <li>
              <b>Cook the omelette: </b>Once the butter is melted and bubbling,
              pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
              surface.
            </li>
            <li>
              <b>Add fillings (optional): </b>When the eggs begin to set at the
              edges but are still slightly runny in the middle, sprinkle your
              chosen fillings over one half of the omelette.
            </li>
            <li>
              <b>Fold and serve: </b>As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <b>Enjoy: </b>Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </section>
        <hr />
        <section className={styles.NutritionGroup}>
          <h3 className={`${styles.SectionTitle} textPresetTwo`}>Nutrition</h3>
          <p className={`textPresetFour`}>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div className={`${styles.NutritionGrid} textPresetFour`}>
            <div className={styles.GridPair}>
              <p className={styles.GridPaddingLeft}>Calories</p>
              <p className={styles.GridItemBold}>
                <b>277kcal</b>
              </p>
            </div>
            <hr />
            <div className={styles.GridPair}>
              <p className={styles.GridPaddingLeft}>Carbs</p>
              <p className={styles.GridItemBold}>
                <b>0g</b>
              </p>
            </div>
            <hr />
            <div className={styles.GridPair}>
              <p className={styles.GridPaddingLeft}>Protein</p>
              <p className={styles.GridItemBold}>
                <b>20g</b>
              </p>
            </div>
            <hr />
            <div className={styles.GridPair}>
              <p className={styles.GridPaddingLeft}>Fat</p>
              <p className={styles.GridItemBold}>
                <b>22g</b>
              </p>
            </div>
          </div>
          {/* <table>
            <tr>
              <td className={`${styles.tableItemLeftPadding} textPresetFour`}>
                Calories
              </td>
              <td className={styles.TableItemBold}>277kcal</td>
            </tr>
            <tr>
              <td className={`textPresetFour`}>Carbs</td>
              <td className={styles.TableItemBold}>0g</td>
            </tr>
            <tr>
              <td className={`textPresetFour`}>Protein</td>
              <td className={styles.TableItemBold}>20g</td>
            </tr>
            <tr>
              <td className={`textPresetFour`}>Fat</td>
              <td className={styles.TableItemBold}>22g</td>
            </tr>
          </table> */}
        </section>
      </section>
    </article>
  );
}
