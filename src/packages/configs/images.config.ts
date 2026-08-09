export type ThemeSlide = {
  id: string;
  className: string;
  imageUrl: string;
  alt: string;
  color: string;
  width: number;
  height: number;
};

export const themeSlides: ThemeSlide[] = [
  {
    id: "theme-01",
    className: "slider-image",
    imageUrl:
      "https://raw.githubusercontent.com/vivekcsein/githost/main/images/themeImages/dec/theme01.png",
    alt: "Theme 01",
    color: "red",
    width: 2560,
    height: 1440,
  },
  {
    id: "theme-02",
    className: "slider-image",
    imageUrl:
      "https://raw.githubusercontent.com/vivekcsein/githost/main/images/themeImages/dec/theme02.png",
    alt: "Theme 02",
    color: "green",
    width: 2560,
    height: 1440,
  },
  {
    id: "theme-03",
    className: "slider-image",
    imageUrl:
      "https://raw.githubusercontent.com/vivekcsein/githost/main/images/themeImages/dec/theme03.png",
    alt: "Theme 03",
    color: "blue",
    width: 2560,
    height: 1440,
  },
  {
    id: "theme-04",
    className: "slider-image",
    imageUrl:
      "https://raw.githubusercontent.com/vivekcsein/githost/main/images/themeImages/dec/theme04.png",
    alt: "Theme 04",
    color: "pink",
    width: 2560,
    height: 1440,
  },
];
