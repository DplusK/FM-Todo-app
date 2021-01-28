<template>
  <div
    class="bg-white dark:bg-d-vdg-blue rounded-md flex px-6 h-65 items-center"
  >
    <div
      class="w-24 h-24 rounded-full border-2 border-gray-200 dark:border-gray-600 overflow-hidden mr-3"
      :class="check ? 'bg-gradient-to-br from-tick-bright to-tick-dark' : ''"
    ></div>
    <input
      @keyup.enter="addTodo"
      class="bg-transparent placeholder-l-d-blue text-l-d-blue dark:text-d-lg-blue flex-1 pt-1"
      type="text"
      placeholder="Create a new todo..."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: false,
    };
  },
  methods: {
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
  },
};
</script>