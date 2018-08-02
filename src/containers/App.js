import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending, onRequestRobots } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (isPending) {
            return (
                <div className='tc'>
                    <div className='Top'>
                        <h1 className='MainHeader'>Robo Friends</h1>
                        <SearchBox searchChange={onSearchChange} />
                    </div>
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
                            <CardList robots={filteredRobots} requestRobots={onRequestRobots} />
                        </ErrorBoundary>
                    </Scroll>
                    <div className='Footer'>Created by Michael</div>
                </div>
            );
        }
    }
 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);