import React from 'react'
import SearchForm from '../containers/SearchForm'
import ScheduleList from '../containers/ScheduleList'
import Header from '../components/Header'

const App = () => (
    <main>
        <Header/>
        <SearchForm />
        <ScheduleList />
    </main>
);

export default App;