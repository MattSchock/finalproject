const GroceryListApiEndpoint = "https://62fd71deb9e38585cd51f570.mockapi.io/groceryList";


export default class GroceryListApi {
    get = async () => {
        console.log('logging get function of api');
        try{
            const resp = await fetch(GroceryListApiEndpoint);
            const data= await resp.json();
            console.log("data from api class", data);
            return data;
        } catch (e) {
            console.log('not able to fetch data from grocery list api', e)
        }
    }
}