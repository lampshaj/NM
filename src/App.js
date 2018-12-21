import React, { Component } from 'react';
import logo from './logo.svg';
import wars from './wars.svg';
import star from './star.svg';
import './App.css';
import debounce from 'lodash/debounce'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    };
  }

  delay = e => {
    // debugger
    // fetchFromAPI;
  }

  sortItems = (items) => {
   var itemsCopy = []
   if(items !== undefined){
     var i;
     for(i = 0; i < items.length; i++){
       itemsCopy[i]  = items[i].name;
     }
     return itemsCopy.sort();
   }else{
     return;
   }
  }

  fetchFromAPI = debounce((text) => {
   // debugger;
   this.setState({ text });
   let filter =  text.toLowerCase();
   if(filter === ''){
     this.setState({
       items: []
     })
     return;
   } else{
      fetch(`https://swapi.co/api/people/?search=${filter}`)
       .then(res => res.json())
       .then(json => {
           this.setState({
               items: json
           })
       });
     }
   }, 350)

  render() {
    let title = (
       <div class="images">
         <img src={star} alt="Star" class="star"/>
         <br/>
         <img src={wars} alt="Wars" class="wars"/>
         <br/>
       </div>
    );

    let list = this.state.items.results;
    list = this.sortItems(list);
    var {error, isLoaded, items} = this.state;
    if(error){
      return <div>Error: {error.message}</div>;
    }else{
      return (
        <div>
          {title}
          <div class="titles">
          <input id="search" placeholder="Search characters: "
            onKeyUp={e => this.fetchFromAPI(e.target.value)}
            autocomplete="off"/>
          <br/>
          { this.state.items.length === 0 ? "" :
            <ul id="items">
              {list.map(item => (
                <li>
                  {item}
                </li>
              ))}
            </ul>
          }
          </div>
        </div>
      )
    }
  }
}

export default App;
