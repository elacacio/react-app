import React from 'react';
import {Header} from "../containers/header";
import {Footer} from "../containers/footer";
import {apiRoute} from "../routes";
import {HomeTable} from "./tableHomes";

class Page extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            list: [],
            sortedBy: 'id',
        };

        this.handleSorterByClick = this.handleSorterByClick.bind(this);
        this.handleDownloadClick = this.handleDownloadClick.bind(this);
    }

    handleSorterByClick(e) {
        e.preventDefault();

        let sorterBy = e.target.dataset.sorter;
        let url = e.target.href;
        this.setState(prevState => ({
            ...prevState,
            sortedBy: sorterBy,
        }), () => this.fetchData(url))
    }

    composeParams = () => {
        const {
            sortedBy
        } = this.state;

        return '?sortedBy='+sortedBy;
    }

    handleDownloadClick = (e) => {
        e.preventDefault();

        window.location.href = e.target.href+this.composeParams();
    }

    fetchData(url) {

        url = url+this.composeParams();

        fetch(url, {
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState(prevState => ({
                ...prevState,
                list: data
            }))
        })
        .catch(function(e) {
            console.log('Error: ', e);
        })
    }

    componentDidMount() {
        this.fetchData(apiRoute);
    }

    render() {
        return (
            <div>
                <Header />
                <HomeTable
                    sorterByClick={this.handleSorterByClick}
                    downloadClick={this.handleDownloadClick}
                    {...this.state}
                />
                <Footer />
            </div>
        )
    }
}

export default Page