import React, { Component } from 'react';
import wars from './wars.svg';
import star from './star.svg';
import './App.css';
import debounce from 'lodash/debounce'
import {sortItems} from './helpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    };
  }

  fetchFromAPI = debounce((text) => {
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
    const title = (
       <div class="images">
         <img src={star} alt="Star" class="star"/>
         <br/>
         <img src={wars} alt="Wars" class="wars"/>
         <br/>
       </div>
    );

    let list = this.state.items.results;
    list = sortItems(list);
    let {error, items} = this.state;
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
