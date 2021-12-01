import React, {useState} from 'react';
import './App.css';

function App() {
    const [user, setUser] = useState<string | number>('kim');

    return (
        <div className="App">
            <h4>해윙</h4>
            <Profile name={"철수"} age={20}/>
        </div>
    );
}

const Profile = (props: {name: string, age: number}): JSX.Element => {
    return (
        <div>프로필!!</div>
    )
}

export default App;
