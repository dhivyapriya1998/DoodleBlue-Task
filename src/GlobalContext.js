import React, { Component, createContext } from "react";

const GlobalContext = createContext({
  user: {},
  categories: [
    {
      Name: "Books",
      id: "01",
      sub: [
        { name: "Tamil", price: "130" },
        { name: "English", price: "251" },
        { name: "Social", price: "130" },
        { name: "Science", price: "130" },
      ],
    },
    {
      Name: "Dress",
      id: "02",
      sub: [
        { name: "Sweater", price: "2000" },
        { name: "Jumpsuit", price: "2500" },
      ],
    },
    {
      Name: "Cosmetics",
      id: "03",
      sub: [
        { name: "Handbag", price: "200" },
        { name: "Shoe", price: "750" },
      ],
    },
    {
      Name: "Electric Appliances",
      id: "04",
      sub: [
        { name: "Laptop", price: "20000" },
        { name: "Mobile", price: "5000" },
      ],
    },
  ],
  currentRouterLocation: "",
  driverCount: 0,
  carrierCount: 0,
  setValue: () => {},
  getCategory: () => {},
});

class GlobalContextProvider extends Component {
  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this);
    this.getCategory = this.getCategory.bind(this);
  }

  setValue = (object) => {
    let arr = [];
    arr.push(object);
    console.log(arr);
    this.setState({ user: arr });

    // for (var key in object) {
    //     console.log('Setting Shared value', `${key}: ${object[key]}`)
    //     this.setState({
    //         [key]: object[key],
    //     })
    // }
  };
  getCategory = (value) => {
    // let arr = []
    // arr.push(object)
    console.log("getcategory...", value);
    this.setState({ categories: value });

    // for (var key in object) {
    //     console.log('Setting Shared value', `${key}: ${object[key]}`)
    //     this.setState({
    //         [key]: object[key],
    //     })
    // }
  };

  state = {
    user: {},
    currentRouterLocation: "",
    categories: [
      {
        Name: "Books",
        id: "01",
        sub: [
          { name: "Tamil", price: "130" },
          { name: "English", price: "251" },
          { name: "Social", price: "130" },
          { name: "Science", price: "130" },
        ],
      },
      {
        Name: "Dress",
        id: "02",
        sub: [
          { name: "Sweater", price: "2000" },
          { name: "Jumpsuit", price: "2500" },
        ],
      },
      {
        Name: "Cosmetics",
        id: "03",
        sub: [
          { name: "Handbag", price: "200" },
          { name: "Shoe", price: "750" },
        ],
      },
      {
        Name: "Electric Appliances",
        id: "04",
        sub: [
          { name: "Laptop", price: "20000" },
          { name: "Mobile", price: "5000" },
        ],
      },
    ],
    wishListCount: 0,
    carrierCount: 0,
    globalSearchKeyword: "",
    setValue: () => {},
    getCategory: () => {},
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          user: this.state.user,
          categories: this.state.categories,
          wishListCount: this.state.wishListCount,
          carrierCount: 0,
          globalSearchKeyword: this.state.globalSearchKeyword,
          setValue: this.setValue,
          getCategory: this.getCategory,
          currentRouterLocation: this.state.currentRouterLocation,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

const GlobalContextConsumer = GlobalContext.Consumer;

export { GlobalContextConsumer, GlobalContextProvider, GlobalContext };
