// @ts-ignore
const checkResponse: any = ({ status, data }) => {
    if ((status < 200 || status >= 300) || data.errors) {
        // Is there the best way to get errors messages without libs? D:
        return {
            message: data.errors[Object.keys(data.errors)[0]][0],
        };
    }

    return false;
};

export default checkResponse;
