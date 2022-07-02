export const GET_DATA="GET_DATA";
export const GET_DATA_USER="GET_DATA_USER";
// export const GET_DATA_PRODUCT_DETAILS="GET_DATA_PRODUCT_DETAILS";


export const getData= (data) =>({
    type:GET_DATA,
    payload:data
});

export const getDataProduct= (user) =>({
    type:GET_DATA_USER,
    payload:user
});