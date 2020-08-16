import React, { Component, createContext } from "react";

const GlobalContext = createContext({
  user: {},
  categories: [],
  selectedCategory: "Books",
  setValue: () => {},
  getCategory: () => {},
  getSelectedCategory: () => {},
});

class GlobalContextProvider extends Component {
  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.getSelectedCategory = this.getSelectedCategory.bind(this);
  }

  setValue = (object) => {
    let arr = [];
    arr.push(object);
    console.log(arr);
    this.setState({ user: arr });
  };
  getCategory = (value) => {
    console.log("getcategory...", value);
    this.setState({ categories: value });
  };
  getSelectedCategory = (val) => {
    console.log("globall", val);
    this.setState({ selectedCategory: val });
  };

  state = {
    user: {},
    currentRouterLocation: "",
    getSelectedCategory: () => {},
    categories: [
      {
        Name: "Books",
        id: "01",
        sub: [
          { name: "Tamil", price: "730", rating: "5" },
          { name: "English", price: "250", rating: "2" },
          { name: "History", price: "900", rating: "3" },
          { name: "Science", price: "890", rating: "4" },
          { name: "Zoology", price: "720", rating: "5" },
          { name: "Economics", price: "240", rating: "2" },
          { name: "Civics", price: "600", rating: "3" },
          { name: "Botany", price: "895", rating: "4" },
          { name: "Chemistry", price: "760", rating: "3" },
          { name: "Physics", price: "255", rating: "2" },
          { name: "Commerce", price: "800", rating: "3" },
          { name: "EMI", price: "860", rating: "4" },
        ],
      },
      {
        Name: "Dress",
        id: "02",
        sub: [
          { name: "Sweater", price: "2000", rating: "5" },
          { name: "Jumpsuit", price: "2500", rating: "3" },
        ],
      },
      {
        Name: "Cosmetics",
        id: "03",
        sub: [
          { name: "Handbag", price: "200", rating: "4" },
          { name: "Shoe", price: "750", rating: "2" },
        ],
      },
      {
        Name: "Electric Appliances",
        id: "04",
        sub: [
          { name: "Laptop", price: "20000", rating: "5" },
          { name: "Mobile", price: "5000", rating: "4" },
        ],
      },
    ],
    setValue: () => {},
    getCategory: () => {},
    selectedCategory: "Books",
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          selectedCategory: this.state.selectedCategory,
          getSelectedCategory: this.getSelectedCategory,
          user: this.state.user,
          categories: this.state.categories,
          setValue: this.setValue,
          getCategory: this.getCategory,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

const GlobalContextConsumer = GlobalContext.Consumer;

export { GlobalContextConsumer, GlobalContextProvider, GlobalContext };
