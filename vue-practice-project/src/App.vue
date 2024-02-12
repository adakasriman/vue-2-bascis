<template>
  <div>
    <h2>Vue Pactice App</h2>
    <h4>Event between parent and chaild</h4>
    <Names :name="name" @changeTitle="updateTitle($event)" />
    <!-- changeTitle: passing to chaild component -->

    <div>
      <h2>Props Passing</h2>
      <props-component :userList="userList" />
    </div>

    <div>
      <h2>Event Bus</h2>
      <event-bus :name="name" />
    </div>

    <div>
      <h2>Life Cycle Methods</h2>
      <life-cyclehooks />
    </div>
  </div>
</template>

<script>
import EventBus from "./components/EventBus.vue";
import LifeCyclehooks from "./components/LifeCyclehooks.vue";
import Names from "./components/Names.vue";
import PropsComponent from "./components/PropsComponent.vue";

export default {
  name: "App",
  data: () => {
    return {
      userList: [
        { id: 1, name: "Sriman", role: "UI developer" },
        { id: 2, name: "Adaka", role: "UI developer" },
        { id: 3, name: "Siva", role: "UI developer" },
        { id: 4, name: "Mahesh", role: "UI developer" },
      ],
      name: "Sriman",
    };
  },
  methods: {
    greeting: () => {
      return "Hi Sriman";
    },
    updateTitle: function (event) {
      this.name = event;
    },
  },
  components: { Names, PropsComponent, EventBus ,LifeCyclehooks},
};
</script>

<style>

#LifeCyclehooksapp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
