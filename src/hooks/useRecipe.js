import { AppearsIn, GroceryList, Recipe, TipsAndTricks } from '../components';

export default function useRecipe() {
	const createAppearsInArr = (arr) => {
		const appearsInArr = arr.map((tag, index) => {
			return <AppearsIn.Tag key={index}>{tag}</AppearsIn.Tag>;
		});
		return appearsInArr;
	};

	const createIngredientsArr = (arr) => {
		const ingredientsArr = arr.map((ing, index) => {
			return <GroceryList.ListItem key={index}>{ing}</GroceryList.ListItem>;
		});
		return ingredientsArr;
	};

	const createSynopsisArr = (arr) => {
		const synopsisArr = arr.map((par) => {
			return <Recipe.Synopsis>{par}</Recipe.Synopsis>;
		});
		return synopsisArr;
	};

	const createTipsArr1 = (tips1) => {
		const tips1Arr = tips1.content.map((tip) => {
			return <TipsAndTricks.ListItem>{tip}</TipsAndTricks.ListItem>;
		});

		return tips1Arr;
	};
	const createTipsArr2 = (tips2) => {
		const tips2Arr = tips2.content.map((tip) => {
			return <TipsAndTricks.ListItem>{tip}</TipsAndTricks.ListItem>;
		});

		return tips2Arr;
	};

	return {
		createAppearsInArr,
		createIngredientsArr,
		createSynopsisArr,
		createTipsArr1,
		createTipsArr2,
	};
}
