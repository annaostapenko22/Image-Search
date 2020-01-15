import axios from "axios"

axios.defaults.baseURL = "https://pixabay.com/api/";
const key = "14452993-a97f0aeb82bfc4ebb60896535";

export const getAllImages = async(name,page=1)=> {
const data= await axios.get(`?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)

return data.data.hits.map(({id, webformatURL, largeImageURL })=> ({id, webformatURL, largeImageURL }));
}
