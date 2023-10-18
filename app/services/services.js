export const getData = async () => {
    try {
        const data = await fetch (`http://localhost:3000/Movies`)
        const dataToJson = await data.json()
        return dataToJson     
    }   catch (error) {
        console.log ("Error", error)
        return error;   
    }
};