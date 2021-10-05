import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../actions/counter';
import { loginUser, logoutUser } from '../actions/user';

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const currentUser = useSelector(state => state.currentUser);

    const dispatch = useDispatch();

    const name = "JIWON";

    useEffect(() => {
        dispatch(loginUser(name));
    }, [dispatch, name]);

    return (
        <div>
          {currentUser.login ? (
            <div>
              <div>Hello, {currentUser.user}</div>
              <button onClick={() => dispatch(logoutUser())}>
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <div>Login</div>
              <button
                onClick={() => dispatch(loginUser(name))}
              >
                Login
              </button>
            </div>
          )}
          <h1>{counter}</h1>
          <button onClick={() => dispatch(increment())}>
            +1
          </button>
          <button onClick={() => dispatch(decrement())}>
            -1
          </button>
        </div>
      );

}

export default Counter;