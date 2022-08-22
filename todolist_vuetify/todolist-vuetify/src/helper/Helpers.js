import axios from 'axios'
import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message';

import 'vue-flash-message/dist/vue-flash-message.min.css'
Vue.use(VueFlashMessage, {
    messageOptions: {
      timeout: 2000,
      pauseOnInteract: true
    }
  });

const vm = new Vue();
const BASE_URL = 'http://localhost:3000/tasks/'
const BASE_URL2 = 'http://localhost:3000/task/'

const handleError = fn => (...params) => 
fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`,'error')
})

export const api ={
    createtask : handleError(async payload => {
    const res =await axios.post(BASE_URL,payload);
    return res.data;
}),
    gettasks: handleError(async() => {
    const res = await axios.get(BASE_URL);
    return res.data;;
}),
    deletetask : handleError(async id => {
    const res = await axios.delete(BASE_URL2 + id);
    return res.data;

}),
    gettask: handleError(async id => {
    const res = await axios.get(BASE_URL2 + id);
    return res.data;;

}),
    updatetask: handleError(async payload => {
    const res = await axios.put(BASE_URL2 + payload._id , payload);
    return res.data;

    })
}
