import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onOpen={props.onOpen}/>
            </header>
            <span className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious meals" />
            </span>
        </>
    )

}

export default Header;