<template>
  <keep-alive>
    <div
      :ref="todo.text + index"
      :class="index == 0 ? 'rounded-t-md' : ''"
      class="bg-white dark:bg-d-vdg-blue flex px-6 h-65 items-center text-l-d-blue dark:text-d-lg-blue border-b-2 border-l-l-gray dark:border-gray-600"
    >
      <span class="flex items-center cursor-pointer" @click="toggle(todo)">
        <div
          class="flex-shrink-0 w-24 h-24 rounded-full border-2 border-gray-300 dark:border-gray-600 overflow-hidden mr-3 cursor-pointer"
          :class="
            todo.done ? 'bg-gradient-to-br from-tick-bright to-tick-dark' : ''
          "
        >
          <div
            v-if="todo.done"
            class="bg-tick w-full h-full bg-no-repeat bg-center bg-60%"
          ></div>
        </div>
        <span
          class="max-w-400 overflow-hidden cursor-pointer hover:text-primary transition-colors duration-200"
          :class="{ done: todo.done }"
          >{{ todo.text }}</span
        >
      </span>

      <div
        @click="removeItem({ todo })"
        class="flex-shrink-0 ml-auto w-17 h-17 bg-cross bg-contain bg-no-repeat cursor-pointer dark:bg-cross-light"
      ></div>
    </div>
  </keep-alive>
</template>

<script>
import { mapMutations } from "vuex";
import { gsap } from "gsap";

export default {
  data() {
    return {
      animated: false,
    };
  },
  props: ["todo", "index"],
  methods: {
    removeItem({ todo }) {
      gsap.to(this.$refs[this.todo.text + this.index], {
        x: 50,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          this.remove({ todo });
        },
      });
    },
    ...mapMutations({
      remove: "todos/remove",
      toggle: "todos/toggle",
    }),
  },
};
</script>

<style lang="scss" scoped>
.done {
  text-decoration: line-through;
}
</style>
