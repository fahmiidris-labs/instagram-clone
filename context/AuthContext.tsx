import { createContext, Dispatch, useReducer } from 'react';

type TUser = {
    id: number;
    name: string;
};

type TInitialState = {
    user: TUser | null;
    isLoggedIn: boolean;
};

type TAction = { type: 'LOGIN_SUCCESS'; payload: TUser };

type TAuthContext = {
    state: TInitialState;
    dispatch: Dispatch<TAction>;
};

const initialState: TInitialState = {
    // user: null,
    // isLoggedIn: false
    user: {
        id: 1,
        name: 'Fahmi Idris'
    },
    isLoggedIn: true
};

const mainReducer = ({ user, isLoggedIn }: TInitialState, action: TAction) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                isLoggedIn: true
            };

        default:
            return {
                user,
                isLoggedIn
            };
    }
};

export const AuthContext = createContext<TAuthContext>({} as TAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    console.info(state);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
