
export const burgerIconNum = Math.floor(Math.random() * 4);

export const burgerIDFinder = () => {
    const newburgerID = document.getElementById(`burgerIcon${burgerIconNum}`);
    // console.log(newburgerID);

    if (newburgerID?.id) {
        return newburgerID;
    } else {
        return document.getElementById(`burgerIcon${0}`);
    }
};

export const burgerClassFinder = () => {
    // const burgerClassList = document.getElementsByClassName("toggle_BurgerIcon");
    // console.log(burgerClassList);
    // const newburgerClass = document.getElementsByClassName("toggle_BurgerIcon")[0];
    // if (newburgerClass) {
    //     return newburgerClass;
    // } else {
    // }
    return document.getElementsByClassName("toggle_BurgerIcon")[0];
}