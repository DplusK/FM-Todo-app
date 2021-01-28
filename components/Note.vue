<template>
  <div>
    <div
      class="w-full h-50 bg-white flex px-6 items-center justify-between text-l-d-blue dark:text-d-lg-blue dark:bg-d-vdg-blue shadow-md rounded-b-md"
    >
      <div>{{ todos.length }} items left</div>
      <div class="flex">
        <p
          @click="all"
          class="cursor-pointer hover:text-primary transition-colors duration-200 hidden md:block"
          :class="state == 'all' ? 'text-primary' : ''"
        >
          All
        </p>
        <p
          @click="active"
          class="ml-2 cursor-pointer font-bold hover:text-primary transition-colors duration-200 hidden md:block"
          :class="state == 'active' ? 'text-primary' : ''"
        >
          Active
        </p>
        <p
          @click="completed"
          class="ml-2 cursor-pointer font-bold hover:text-primary transition-colors duration-200 hidden md:block"
          :class="state == 'completed' ? 'text-primary' : ''"
        >
          Completed
        </p>
      </div>
      <div
        @click="clear"
        class="cursor-pointer hover:text-primary transition-colors duration-200"
      >
        Clear Completed
      </div>
    </div>
    <div
      class="flex mt-5 md:hidden bg-white shadow-md justify-center h-50 items-center text-l-d-blue dark:text-d-lg-blue dark:bg-d-vdg-blue rounded-md"
    >
      <p
        @click="all"
        class="cursor-pointer font-bold hover:text-primary transition-colors duration-200"
        :class="state == 'all' ? 'text-primary' : ''"
      >
        All
      </p>
      <p
        @click="active"
        class="ml-2 cursor-pointer font-bold hover:text-primary transition-colors duration-200"
        :class="state == 'active' ? 'text-primary' : ''"
      >
        Active
      </p>
      <p
        @click="completed"
        class="ml-2 cursor-pointer font-bold hover:text-primary transition-colors duration-200"
        :class="state == 'completed' ? 'text-primary' : ''"
      >
        Completed
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
    state() {
      return this.$store.state.todos.state;
    },
  },
  methods: {
    ...mapMutations({
      all: "todos/all",
      completed: "todos/completed",
      active: "todos/active",
      clear: "todos/clear",
    }),
  },
};
</script>