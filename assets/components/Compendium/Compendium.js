import React, { Component } from 'react'
import {Link} from "react-router-dom";
import apiPgsql from "../../config/apiPgsql";

class Compendium extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: [],
            years: [],
        }
    }
    componentDidMount() {
       apiPgsql.get("/api/themes/list", {
           headers: {
               'Content-Type': 'application/json'
           },
       })
           .then(res => {
           if(res.status === 200){
               this.setState({
                   themes: res.data
               })
           }
       })
           .catch(error => {
               console.log(error);
           });
       apiPgsql.get("/api/years/list", {
           headers: {
               'Content-Type': 'application/json'
           }
       })
           .then(res => {
               if(res.status === 200){
                   this.setState({
                       years: res.data
                   })
               }
           })

    }

    render() {
        const { themes, years } = this.state;
        return (
           <>
                <h2 className="theme__title">Thèmes</h2>
                <hr className="theme__separator"/>
               { themes && themes.map((t,i) => (
                       <Link className="theme__link" key={ t.title + i } to={ "/theme/" + t.title }>{ t.title }</Link>
                   )
               )}
               <h2 className="year__title">Années</h2>
               <hr className="year__separator" />
               { years && years.map((y,i) => (
                   <Link key={ y.year + i } to={ "/year/" + y.year }>{ y.year }</Link>
               ))}
           </>
        )
    }
}

export default Compendium;
