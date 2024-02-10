const data = {   // outside state
    name: "Sriman"
}

Vue.component('greeting', {
    template: `<div> <p>Hey there, I am a re-usable component name: {{name}} </p> <button @click="changeName">changeName</button></div> `,
    // data: function () {
    //     return data  // If we use outside state, it change the code where ever component is used.
    // },
    data: function () {
        return {
            name: "Sriman"
        }
    },
    methods: {
        changeName: function () {
            this.name = "adaka"
        }
    },
});

new Vue({
    el: "#app-one",
    data: {
        title: "app One"
    }
})

new Vue({
    el: "#app-two",
    data: {
        title: "app Two"
    }
})


