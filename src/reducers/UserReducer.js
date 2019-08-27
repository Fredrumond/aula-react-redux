const initialState = {
	email:'suporte@fred.com',
	pass:''
};

const UserReducer = (state = initialState, action) => {

	//actions especificas
	if(action.type == 'changeEmail'){
		return { ...state, email:action.payload.email};
	}

	if(action.type == 'changePassword'){
		return { ...state, pass:action.payload.pass};
	}

	return state;
};

export default UserReducer;