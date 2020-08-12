import React, { Component, createContext } from 'react'

const GlobalContext = createContext({
    user: {},
    categories:[],
    currentRouterLocation: '',
    driverCount:0,
    carrierCount:0,
    setValue: () => {},
    getCategory: () =>{}
})

class GlobalContextProvider extends Component {
    constructor (props) {
        super(props)
        this.setValue = this.setValue.bind(this)
        this.getCategory = this.getCategory.bind(this)
    }

    setValue = (object) => {
        let arr = []
        arr.push(object)
        console.log(arr)
        this.setState({user:arr})

        // for (var key in object) {
        //     console.log('Setting Shared value', `${key}: ${object[key]}`)
        //     this.setState({
        //         [key]: object[key],
        //     })
        // }

    }
        getCategory = (object) => {
        // let arr = []
        // arr.push(object)
        console.log("getcategory...",object)
        this.setState({categories:object})

        // for (var key in object) {
        //     console.log('Setting Shared value', `${key}: ${object[key]}`)
        //     this.setState({
        //         [key]: object[key],
        //     })
        // }

    }

    state = {
        user: {},
        currentRouterLocation: '',
         categories:[],
        wishListCount:0,
        carrierCount:0,
        globalSearchKeyword:'',
        setValue: () => {},
        getCategory:() =>{}
    }

    render () {
        return (
            <GlobalContext.Provider
                value={{
                    user: this.state.user,
                     categories:this.state.categories,
                    wishListCount:this.state.wishListCount,
                    carrierCount:0,
                    globalSearchKeyword:this.state.globalSearchKeyword,
                    setValue: this.setValue,
                    getCategory:this.getCategory,
                    currentRouterLocation: this.state.currentRouterLocation,
                }}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }

}

const GlobalContextConsumer = GlobalContext.Consumer

export { GlobalContextConsumer, GlobalContextProvider, GlobalContext }
