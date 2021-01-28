<template>
  <div class="w-full max-w-545 mx-auto transform -translate-y-56 flex flex-col">
    <div class="flex items-center justify-between w-full mb-5">
      <div class="uppercase text-white text-4xl font-bold tracking-wide">
        todo
      </div>
      <div @click="toggleColorMode" class="cursor-pointer">
        <div v-if="colorMode == 'light'">
          <img class="w-24 h-24" src="/images/icon-sun.svg" alt="light-mode" />
        </div>
        <div v-else>
          <img class="w-24 h-24" src="/images/icon-moon.svg" alt="dark-mod" />
        </div>
      </div>
    </div>
    <Inputbox class="mb-5" />
    <div>
      <draggable v-bind="dragOptions">
        <transition-group>
          <TodoItem
            v-for="(todo, index) in todos"
            :key="todo.text + index"
            :todo="todo"
            :index="index"
            :ref="index"
            class="item"
          />
        </transition-group>
      </draggable>

      <transition name="slideIn">
        <Note v-if="todosFull.length > 0" />
      </transition>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  methods: {
    toggleColorMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    },
  },
  computed: {
    colorMode() {
      return this.$colorMode.preference;
    },
    todos() {
      return this.$store.state.todos.list;
    },
    todosFull() {
      return this.$store.state.todos.fullList;
    },
    dragOptions() {
      return {
        animation: 200,
        disabled: false,
      };
    },
  },
};
// this.$store.commit("todos/active");
</script>

<style lang="css" scoped>
.flip-list-move {
  transition: transform 0.5s;
}

.slideIn-enter-active,
.slideIn-leave-active {
  transition: all 0.3s ease-out;
  z-index: 0;
}

.slideIn-enter,
.slideIn-leave-to {
  /* .fade-leave-active below version 2.1.8 */
  transform: translateY(-50px);
  opacity: 0;
}
</style>