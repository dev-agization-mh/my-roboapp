import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField } from '../actions.js';

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState( {robots: users} ));
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (!robots.length) {
            return (
                <div className='tc'>
                    <h1 className='MainHeader'>Robo Friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <h2 className='white'>Loading...</h2>
                </div>
            )
        }
        else {
            return (
                <div className='tc'>
                    <div className='Top'>
                    <h1 className='MainHeader'>Robo Friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    </div>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                    <div className='Footer'>Created by Michael</div>
                </div>
            );
        }
    }
 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);