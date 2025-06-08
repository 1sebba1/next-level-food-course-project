const MealPage = ({params}) => {
    return ( <main>
        <h1>Meal</h1>
        <p>This is the meal page.</p>
        <p>Here you can find details about {params.meal}.</p>
        <p>Feel free to explore more meals!</p>
    </main> );
}
 
export default MealPage;