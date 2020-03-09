const initialState = {
    citizens: [
      { name:"Brainey",age:200,height:"5cm",id:0 },
      { name:"another one",age:342,height:"4cm",id:1 }
    ]
  };

export const smurfListReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CITIZEN":
        const newCitizen = { name: action.payload };
        return {
          ...state,
          citizens: [...state.citizens, newCitizen]
        };
  
      default:
        return state;
    }
  };
  