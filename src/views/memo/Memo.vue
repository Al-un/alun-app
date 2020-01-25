<template>
  <div>
    <h2>TODO: Memo</h2>

    <h3>Memos list</h3>
    <div v-for="m in memos" :key="m.id">
      <div>{{ m.title }}</div>

      <div>
        <div v-for="(item, idx) in m.items" :key="idx">{{ item.text }}</div>
      </div>

      <button @click="load(m)">Load</button>
      <button @click="prepareForUpdate(m)">Update</button>
      <button @click="deleteMemo(m)">Delete</button>
    </div>

    <h3>New Memo</h3>
    <div>
      <input-text v-model="memo.title"></input-text>
      <div>
        Items
        <div v-for="(item, idx) in memo.items" :key="idx">
          <input-text v-model="item.text"></input-text>
          <button @click="deleteItem(idx)">Delete</button>
        </div>
      </div>
      <button @click="addItem">Add item</button>
      <button @click="createOrUpdateMemo">Create / Update</button>
    </div>

    <button @click="prepareForCreate">Set to create</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { actionsName } from "../../store/memo/actions";
import InputText from "@/components/InputText";

export default {
  name: "memo",
  components: { InputText },
  data: function() {
    return {
      memo: {
        title: "",
        items: [{ text: "" }]
      }
    };
  },
  computed: {
    ...mapState("memo", { memos: state => state.memos })
  },
  created: function() {
    this.$store.dispatch(`memo/${actionsName.loadMemos}`);
  },
  methods: {
    addItem: function() {
      const newItem = { text: "" };
      this.memo.items =
        this.memo.items && this.memo.items.length
          ? [...this.memo.items, newItem]
          : [newItem];
      this.$nextTick();
    },
    load: async function(memo) {
      await this.$store.dispatch(`memo/${actionsName.loadMemoDetail}`, {
        id: memo.id
      });
    },
    prepareForUpdate: async function(memo) {
      await this.load(memo);

      this.memo = this.memos.find(m => m.id === memo.id) || {
        title: "",
        items: []
      };
    },
    createOrUpdateMemo: async function() {
      if (this.memo.id) {
        await this.$store.dispatch(`memo/${actionsName.updateMemo}`, {
          entity: this.memo
        });
      } else {
        await this.$store.dispatch(`memo/${actionsName.createMemo}`, {
          entity: this.memo
        });
      }

      this.prepareForCreate();
      // this.$nextTick();
    },
    prepareForCreate: function() {
      this.memo = {
        title: "",
        items: [{ text: "" }]
      };
    },
    deleteItem: function(itemIdx) {
      this.memo.items.splice(itemIdx, 1);
    },
    deleteMemo: async function(memo) {
      await this.$store.dispatch(`memo/${actionsName.deleteMemo}`, {
        id: memo.id
      });
    }
  }
};
</script>

<style lang="scss"></style>
