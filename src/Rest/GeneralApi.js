


const API_ENDPOINT_TODOLIST = "https://62fd71deb9e38585cd51f570.mockapi.io/todolist";


class ToDoApi {
    get = async () => {
        try{
            const resp = await fetch(API_ENDPOINT_TODOLIST);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('We have run into an issue fetching the API', e);
        }
    }

    put = async(todoitem) => {
        console.log('todoitem api put request', todoitem);
        try {
            const resp = await fetch(`${API_ENDPOINT_TODOLIST}/${todoitem._id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(todoitem)
            });
            return await resp.json();
        } catch(e) {
            console.log('the put request has failed.', e);
        }
    }

     delete = async(todoitem) => {
        console.log('todo api delete request', todoitem)
        try {
            const resp = await fetch(`${API_ENDPOINT_TODOLIST}/${todoitem._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body:JSON.stringify(todoitem)
            }
            );
            return await resp.json();
        } catch(e) {
            console.log('delete request failed', e);
        }
     }
    



}

export default ToDoApi