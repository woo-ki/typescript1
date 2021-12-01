import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './index';
import {Dispatch} from 'redux';

function App() {
    const [user, setUser] = useState<string | number>('kim');
    const state = useSelector((state: RootState) => state);
    const dispatch: Dispatch = useDispatch();

    return (
        <div className="App">
            {state.count}
            <button onClick={() => {dispatch({type: '증가'})}}>증가</button>
        </div>
    );
}

const Profile = (props: {name: string, age: number}): JSX.Element => {
    return (
        <div>프로필!!</div>
    )
}

export default App;
