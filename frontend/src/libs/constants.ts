
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

export const createBtn = {
    id: 1,
    text: "Click Me",
    type: 2,
    status: "normal",
};

export const createSearchBtn = {
    id: 1,
    text: "Search Me",
    type: 2,
    status: "normal",
};

export const createFormInput = {
    id: 1,
    inputType: 2,
    name: "fullname",
    type: "text",
    label: "Enter Your Name :",
    placeholder: "Enter Your Name :",
    required: true,
}

export const season_Theme = [
    { id: 1, label: "Spring", theme: "pink" },
    { id: 2, label: "Summer", theme: "yellow" },
    { id: 3, label: "Rainy", theme: "skyblue" },
    { id: 4, label: "Winter", theme: "skyblue" },
];