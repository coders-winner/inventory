import { ref, computed } from "vue";
import { defineStore } from "pinia";

interface State {
  list: any;
}

export const useStore = defineStore("defineStore", {
  state: (): State => {
    return {
      list: [
        { color: "red", col: 110, id: 1 },
        { color: "green", col: 1, id: 2 },
        { color: "aqua", col: 1, id: 3 },
        { color: "darkorchid", col: 1, id: 4 },
        { color: "burlywood", col: 1, id: 5 },
        { color: "chocolate", col: 1, id: 6 },
        { color: "0", col: 1, id: 7 },
        { color: "0", col: 0, id: 8 },
        { color: "0", col: 0, id: 9 },
        { color: "0", col: 0, id: 10 },
        { color: "0", col: 0, id: 11 },
        { color: "0", col: 0, id: 12 },
        { color: "0", col: 0, id: 13 },
        { color: "0", col: 0, id: 14 },
        { color: "0", col: 0, id: 15 },
        { color: "0", col: 0, id: 16 },
        { color: "0", col: 0, id: 17 },
        { color: "0", col: 0, id: 18 },
        { color: "0", col: 0, id: 19 },
        { color: "0", col: 0, id: 20 },
      ],
    };
  },
  getters: {
    getlist(state) {
      return state.list;
    },
  },
  actions: {
    alist(value: any) {
      localStorage.setItem("list", JSON.stringify(value));
      this.list = value;
    },
    aSave(value: any) {
      // console.log(value);
      this.list = this.list.map((e: any) => (e.id == value.id ? value : e));
      localStorage.setItem("list", JSON.stringify(this.list));
    },
    aLocalS() {
      if (localStorage.list) this.list = JSON.parse(localStorage.list);
    },
  },
});
