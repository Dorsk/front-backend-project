import axios from 'axios';

const ITEMS_API_BASE_URL = "http://localhost:8080/api/v1/items";

class ItemsService {

    getItems() {
        return axios.get(ITEMS_API_BASE_URL);
    }

    createItems(items) {
        return axios.post(ITEMS_API_BASE_URL, items);
    }

    getItemsById(itemsId) {
        return axios.get(ITEMS_API_BASE_URL + '/' + itemsId);
    }

    updateItems(items, itemsId) {
        return axios.put(ITEMS_API_BASE_URL + '/' + itemsId, items);
    }

    deleteItems(itemsId) {
        return axios.delete(ITEMS_API_BASE_URL + '/' + itemsId);
    }
}

export default new ItemsService()